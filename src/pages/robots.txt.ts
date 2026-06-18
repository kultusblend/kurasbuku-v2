import type { APIRoute } from 'astro';

// Dynamic robots.txt. Allows crawling on every host so that the host-based
// `noindex` meta in BaseHead is actually seen (staging gets de-indexed).
// Sitemap directive always points to the current host.
export const GET: APIRoute = ({ site }) => {
	const base = (site?.toString() ?? 'https://kurasv2.pages.dev/').replace(/\/$/, '');
	const body = `# Kuras Buku Enterprise Communications
User-agent: *
Allow: /

Sitemap: ${base}/sitemap-index.xml
`;
	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
