"use client";

import React, { useState } from 'react';
import Link from 'next/link';

type Category = 'All' | 'Systems' | 'Tech';

interface PostEntry {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
}

export default function BlogListClient({ initialPosts }: { initialPosts: PostEntry[] }) {
  const [activeTab, setActiveTab] = useState<Category>('All');

  const filteredPosts = activeTab === 'All' 
    ? initialPosts 
    : initialPosts.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="blog-container">
      <div className="section-header">
        <span className="section-num">05.</span>
        <h2 className="section-title">Writing</h2>
      </div>

      {/* Category Filter Bar */}
      <div className="blog-tabs">
        {(['All', 'Systems', 'Tech'] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
          >
            {`// ${cat}`}
          </button>
        ))}
      </div>

      <div className="posts-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="project-row">
              <span className="project-index">
                {new Date(post.date).toLocaleDateString('en-SG', { 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </span>
              <div className="project-info">
                <div className="project-name">
                  {post.title}
                  <span className={`tag-${post.category.toLowerCase()}`}>
                    {post.category}
                  </span>
                </div>
                <p className="project-desc-short">{post.excerpt}</p>
              </div>
              <span className="project-arrow">↗</span>
            </Link>
          ))
        ) : (
          <p className="no-posts">{"// No posts found in this category yet."}</p>
        )}
      </div>
    </section>
  );
}