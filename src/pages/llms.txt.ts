import type { APIRoute } from 'astro';
import { SITE_ORG, SITE_DESCRIPTION } from '../consts';

// llms.txt — structured index for AI search engines (llmstxt.org).
export const GET: APIRoute = ({ site }) => {
	const base = (site?.toString() ?? 'https://kurasv2.pages.dev/').replace(/\/$/, '');
	const body = `# ${SITE_ORG}

> ${SITE_DESCRIPTION}

## Latihan
- [Program Latihan](${base}/program): Enam program — Bina Persona @ Media Sosial, Jana Pendapatan sebagai Pempengaruh Buku, Bengkel Bicara & Resensi Buku, Cakap Depan Kamera, Seni Menjadi Moderator Interaktif, Yakin di Kertas Gigil di Pentas.
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
