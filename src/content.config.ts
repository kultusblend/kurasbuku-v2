import { glob } from 'astro/loaders';
import { defineCollection, reference, z } from 'astro:content';

const emptyToUndefined = (val: unknown) => (val === '' ? undefined : val);

const authors = defineCollection({
	loader: glob({ base: './src/content/authors', pattern: '**/*.{md,json}' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			bio: z.string(),
			role: z.string().optional(),
			avatar: z.union([image(), z.string().url()]).optional(),
			email: z.preprocess(emptyToUndefined, z.string().email().optional()),
			credentials: z.string().optional(),
		}),
});

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.preprocess(emptyToUndefined, z.coerce.date().optional()),
			heroImage: z.union([image(), z.string().url()]).optional(),
			author: reference('authors').optional(),
			tags: z.array(z.string()).default([]),
			module: z
				.enum(['penulisan', 'penerbitan', 'komunikasi', 'strategik', 'umum'])
				.default('umum'),
			tldr: z.string().optional(),
			draft: z.boolean().default(false),
		}),
});

const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: z.union([image(), z.string().url()]).optional(),
			slug: z.preprocess(emptyToUndefined, z.string().optional()),
			updatedDate: z.preprocess(emptyToUndefined, z.coerce.date().optional()),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog, authors, pages };
