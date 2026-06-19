import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { SITE_ORG } from '../../consts';

export const GET: APIRoute = async (context) => {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	const sorted = posts.sort(
		(a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
	);

	return rss({
		title: `${SITE_ORG} — Artikel`,
		description:
			'Wawasan tentang penerbitan buku, kemahiran penulisan, dan komunikasi profesional daripada Penerbitan Kuras Buku.',
		site: context.site ?? 'https://kurasbuku.com',
		items: sorted.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/artikel/${post.id}/`,
			categories: post.data.tags,
		})),
		customData: `<language>ms-MY</language>`,
	});
};
