import { getPostBySlug, getPostSlugs } from "../../../lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((post) => ({ slug: post.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { meta } = getPostBySlug(params.slug);
    return { title: `${meta.title} — Lee De En`, description: meta.description };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let post;

  try {
    post = getPostBySlug(params.slug);
  } catch {
    return notFound();
  }

  const { content, meta } = post;

  return (
    <section style={{ paddingTop: "10rem", paddingBottom: "8rem", maxWidth: "800px" }}>
      <h1 className="section-title reveal visible" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1rem" }}>{meta.title}</h1>
      
      <div className="project-tags reveal visible" style={{ marginBottom: "3rem" }}>
          <span className="tag">{meta.date}</span>
      </div>
      
      <div className="reveal visible about-text" style={{ fontSize: "1.05rem", lineHeight: "2" }}>
        <MDXRemote source={content} />
      </div>
    </section>
  );
}