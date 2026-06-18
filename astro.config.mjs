// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { remarkLazyImages } from './src/lib/remark-lazy-images.mjs';

export default defineConfig({
	site: process.env.SITE_URL ?? 'https://kurasv2.pages.dev',
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => !page.includes('/admin'),
		}),
	],
	image: {
		domains: ['images.unsplash.com', 'media.kurasbuku.com'],
	},
	markdown: {
		remarkPlugins: [remarkLazyImages],
	},
});
