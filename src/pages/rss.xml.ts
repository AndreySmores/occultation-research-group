import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export const GET: APIRoute = async (context) => {
  const posts = await getCollection('news');
  const sortedPosts = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Occultation Research Group',
    description: 'Latest news and updates from the Occultation Research Group',
    site: context.site || 'https://occultationgroup.org',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary || '',
      link: `/news/${post.slug}/`,
      content: post.body,
    })),
    customData: `<language>en-us</language>`,
  });
};


