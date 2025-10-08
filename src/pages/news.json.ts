import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('news');
  const sortedPosts = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const newsFeed = {
    title: 'Occultation Research Group News',
    description: 'Latest news and updates from the Occultation Research Group',
    site: site || 'https://occultationgroup.org',
    updated: new Date().toISOString(),
    items: sortedPosts.map((post) => ({
      id: post.slug,
      title: post.data.title,
      published: post.data.date.toISOString(),
      summary: post.data.summary || '',
      url: `${site}/news/${post.slug}/`,
      content: post.body,
      image: post.data.image,
      video: post.data.video,
    })),
  };

  return new Response(JSON.stringify(newsFeed, null, 2), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};


