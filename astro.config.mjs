// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { remarkLazyImages } from './src/lib/remark-lazy-images.mjs';

export default defineConfig({
	site: process.env.SITE_URL ?? 'https://kurasbuku.com',
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => !page.includes('/admin'),
		}),
	],
	image: {
		domains: ['media.kurasbuku.com'],
	},
	markdown: {
		remarkPlugins: [remarkLazyImages],
	},
});
