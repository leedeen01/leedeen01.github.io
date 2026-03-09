import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/blog");

export function getPostSlugs() {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  return fs.readdirSync(contentDir);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(contentDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // Sort posts by date descending
    .sort((a, b) => (new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()) * -1);
  return posts;
}