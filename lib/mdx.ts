import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 1. Define strict TypeScript interfaces
export interface PostMeta {
  title: string;
  date: string;
  category: string;
  summary?: string;
  tags?: string[];
  [key: string]: unknown; // Replaced 'any' with 'unknown' for ESLint compliance
}

export interface Post {
  slug: string;
  meta: PostMeta;
  content: string;
  category: string;
}

const BLOG_PATH = path.join(process.cwd(), 'content/blog');

/**
 * Recursively gets all post slugs from subdirectories (systems, tech)
 */
export function getPostSlugs(): string[] {
  const categories = fs.readdirSync(BLOG_PATH);
  const slugs: string[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(BLOG_PATH, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath);
      files.forEach((file) => {
        if (file.endsWith('.mdx')) {
          // Store slug as "category/filename" if needed, 
          // or just filename if your [slug] logic is flat
          slugs.push(file.replace('.mdx', ''));
        }
      });
    }
  });

  return slugs;
}

/**
 * Finds and parses a post by its slug, searching through all subcategories
 */
export function getPostBySlug(slug: string): Post {
  const categories = fs.readdirSync(BLOG_PATH);
  let filePath = '';
  let foundCategory = '';

  // Search all subdirectories for the specific slug
  for (const category of categories) {
    const potentialPath = path.join(BLOG_PATH, category, `${slug}.mdx`);
    if (fs.existsSync(potentialPath)) {
      filePath = potentialPath;
      foundCategory = category;
      break;
    }
  }

  if (!filePath) {
    throw new Error(`Post with slug "${slug}" not found.`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    meta: data as PostMeta,
    content,
    category: data.category || (foundCategory.charAt(0).toUpperCase() + foundCategory.slice(1)),
  };
}

/**
 * Retrieves all posts, sorted by date, for the blog list view
 */
export function getAllPosts(): Post[] {
  const categories = fs.readdirSync(BLOG_PATH);
  
  // ESLint 'prefer-const' fix: Using const because the array reference doesn't change
  const allPosts: Post[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(BLOG_PATH, category);
    
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath);
      
      files.forEach((file) => {
        if (file.endsWith('.mdx')) {
          const post = getPostBySlug(file.replace('.mdx', ''));
          allPosts.push(post);
        }
      });
    }
  });

  // Sort posts by date (newest first)
  return allPosts.sort((a, b) => 
    new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );
}