import { getAllPosts } from "../../lib/mdx";
import Link from "next/link";

export const metadata = {
  title: "Blog — Lee De En",
  description: "Writing about software engineering, microservices, and computer science.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section id="blog" style={{ paddingTop: "8rem", paddingBottom: "8rem", minHeight: "100vh" }}>
      <div className="section-header reveal visible">
        <span className="section-num">05.</span>
        <h2 className="section-title">Writing</h2>
      </div>
      
      <div className="projects-list">
        {posts.length === 0 ? (
          <p style={{ color: "var(--muted)", fontFamily: "var(--mono)", fontSize: "0.8rem" }}>No posts yet. Check back soon!</p>
        ) : (
          posts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="project-row reveal visible">
              <span className="project-index">00{index + 1}</span>
              <div className="project-info">
                <div className="project-name">{post.meta.title}</div>
                <p className="project-desc-short">{post.meta.description}</p>
                <div className="project-tags">
                  <span className="tag">{post.meta.date}</span>
                </div>
              </div>
              <span className="project-arrow">↗</span>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}