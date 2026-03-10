import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import styles from "./post.module.css";
import "highlight.js/styles/github-dark.css";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

// Import your custom TS components
import { SimmerCard, ComparisonGrid, Card } from "@/components/MDXComponents";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const mdxComponents = {
  SimmerCard,
  ComparisonGrid,
  Card,
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 className={styles.heading2} {...props} />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className={styles.quote} {...props} />
  ),
};

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.meta.title} — Lee De En`,
      description: (post.meta.summary as string) || (post.meta.description as string) || "",
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function Post({ params }: PageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    return notFound();
  }

  // LOGIC: Fetch related posts in the same category
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.meta.category === post.meta.category && p.slug !== slug)
    .slice(0, 2); 

  const mdxOptions = {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight], 
  };

  const categoryClass = typeof post.meta.category === 'string' 
    ? post.meta.category.toLowerCase() 
    : '';

  return (
    <article className={`${styles.article} reveal visible`}>
      <header className={styles.header}>
        {post.meta.category && (
          <span className={`${styles.categoryBadge} ${styles[categoryClass]}`}>
            {`// ${post.meta.category}`}
          </span>
        )}
        
        <time className={styles.date}>{post.meta.date}</time>
        <h1 className={styles.title}>{post.meta.title}</h1>
        
        <div className={styles.tags}>
          {Array.isArray(post.meta.tags) &&
            post.meta.tags.map((tag: string) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
        </div>
      </header>

      <div className={styles.content}>
        <MDXRemote 
          source={post.content || ""} 
          options={{ mdxOptions }} 
          components={mdxComponents} 
        />
      </div>

      <footer className={styles.blogFooter}>
        {relatedPosts.length > 0 && (
          <div className={styles.relatedSection}>
            <div className={styles.relatedHeader}>
              <span className={styles.relatedNum}>{"//"} 06.</span>
              <h3 className={styles.relatedTitle}>Continue Reading</h3>
            </div>
            
            <div className={styles.relatedGrid}>
              {relatedPosts.map((related) => (
                <Link 
                  href={`/blog/${related.slug}`} 
                  key={related.slug} 
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedDate}>
                    {new Date(related.meta.date).toLocaleDateString('en-SG', { month: 'short', year: 'numeric' })}
                  </span>
                  <h4 className={styles.relatedPostTitle}>{related.meta.title}</h4>
                  <p className={styles.relatedDesc}>
                    {(related.meta.summary as string) || "Read more from this category →"}
                  </p>
                  <span className={styles.relatedLink}>Explore Article ↗</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className={styles.backToBlog}>
          <Link href="/blog" className={styles.backLink}>
            {"← Back to all writing"}
          </Link>
        </div>
      </footer>
    </article>
  );
}