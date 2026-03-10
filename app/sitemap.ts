import { MetadataRoute } from 'next';
import { getPostSlugs } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leedeen.me'; // Replace with your actual domain

  // 1. Get all your dynamic blog slugs
  const blogSlugs = getPostSlugs();
  
  const blogUrls = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug.replace(/\.mdx$/, '')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 2. Define your static routes
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  return [...staticUrls, ...blogUrls];
}