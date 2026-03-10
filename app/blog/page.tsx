import { getAllPosts } from "@/lib/mdx";
import BlogListClient from "./BlogListClient";

export default async function BlogPage() {
  // Fetch real data from your MDX files
  const posts = getAllPosts();

  // Transform data for the Client Component
  const formattedPosts = posts.map((post) => ({
    slug: post.slug,
    title: post.meta.title,
    category: (post.meta.category as string) || post.category,
    date: post.meta.date,
    excerpt: (post.meta.summary as string) || (post.meta.description as string) || "",
  }));

  return (
    <div className="reveal visible">
      <BlogListClient initialPosts={formattedPosts} />
    </div>
  );
}