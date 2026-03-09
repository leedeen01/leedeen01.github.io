import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import styles from "./post.module.css";
import "highlight.js/styles/github-dark.css";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.meta.title} — Lee De En`,
      description: post.meta.description,
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

  const mdxOptions = {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight], // Type cast for compatibility
  };

  return (
    <article className={`${styles.article} reveal visible`}>
      <header className={styles.header}>
        <time className={styles.date}>{post.meta.date}</time>
        <h1 className={styles.title}>{post.meta.title}</h1>
        <div className={styles.tags}>
          {post.meta.tags &&
            post.meta.tags.map((tag: string) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
        </div>
      </header>

      <div className={styles.content}>
        <MDXRemote source={post.content || ""} options={{ mdxOptions }} />
      </div>

      <div className={styles.cta}>
        <h3>Ready to build something great?</h3>
        <p>
          Let&apos;s discuss how we can engineer a solution for your project.
        </p>
        <Link href="/#contact" className={styles.button}>
          Start a Project
        </Link>
      </div>
    </article>
  );
}
