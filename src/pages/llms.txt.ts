import type { APIRoute } from 'astro';
import { SITE_ORG, SITE_DESCRIPTION, MODULES, type ModuleKey } from '../consts';

// llms.txt — structured index for AI search engines (llmstxt.org).
export const GET: APIRoute = ({ site }) => {
	const base = (site?.toString() ?? 'https://kurasv2.pages.dev/').replace(/\/$/, '');
	const programLinks = (Object.keys(MODULES) as ModuleKey[])
		.map((key) => `- [${MODULES[key].label}](${base}/program/${key}): ${MODULES[key].hasil}`)
		.join('\n');
	const body = `# ${SITE_ORG}

> ${SITE_DESCRIPTION}

## Latihan
- [Program Latihan](${base}/program): Enam program latihan komunikasi dan penyampaian.
${programLinks}
- [Metodologi](${base}/metodologi): Pendekatan tiga langkah, Penilaian, Latihan, Pelaksanaan.

## Servis
- [Servis Penerbitan Enterprise](${base}/penerbitan): Suntingan, reka letak, rekaan visual, dan urusan cetakan untuk dokumen korporat.

## Bukti & Latar
- [Kajian Kes](${base}/kajian-kes): Hasil terukur dari latihan dan penerbitan untuk organisasi.
- [Tentang Kami](${base}/tentang): Rumah penerbitan sejak 2015, kini akademi komunikasi korporat.
- [Wawasan & Artikel](${base}/artikel): Pemikiran tentang komunikasi organisasi.

## Hubungan
- [Hubungi / Mohon Cadangan](${base}/hubungi): Borang permohonan cadangan korporat.

## Polisi
- [Polisi Privasi](${base}/privasi)
- [Terma Perkhidmatan](${base}/terma)
`;
	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
