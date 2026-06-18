// Global site metadata for V2. Content now lives in editable JSON files
// under src/content/data/ (managed by Sveltia CMS at /admin). This file
// imports them and re-exports the same names/shapes so page code is unchanged.

import siteData from './content/data/site.json';
import programsData from './content/data/programs.json';
import methodologyData from './content/data/methodology.json';
import caseStudiesData from './content/data/case-studies.json';
import trustedByData from './content/data/trusted-by.json';

export const SITE_TITLE = siteData.title;
export const SITE_ORG = siteData.org;
export const SITE_DESCRIPTION = siteData.description;
export const SITE_LANG = 'ms';
export const SITE_LOCALE = 'ms_MY';

// Corporate verification details (visible in footer per procurement requirements)
export const SSM_NUMBER = siteData.ssmNumber;
export const SSM_REGISTRATION = `No. SSM: ${SSM_NUMBER}`;
export const SST_NUMBER = '';
export const BUSINESS_ADDRESS = siteData.address;

export const BUSINESS_ADDRESS_PARTS = {
	streetAddress: siteData.addressStreet,
	addressLocality: siteData.addressLocality,
	addressRegion: siteData.addressRegion,
	postalCode: siteData.addressPostcode,
	addressCountry: 'MY',
};

// Contact
export const SITE_EMAIL = siteData.contactEmail;
export const SITE_WHATSAPP = siteData.whatsapp;

// CTA destinations
export const PRIMARY_CTA_URL = '/hubungi';
export const PROPOSAL_CTA_URL = '/hubungi?intent=proposal';
// Web3Forms access key (editable in CMS, Tetapan Laman). Empty = forms inert.
export const WEB3FORMS_KEY = siteData.web3formsKey ?? '';
export const WEB3FORMS_ACTION = 'https://api.web3forms.com/submit';

// Program keys (literal union for type-safety; labels/content come from JSON)
export type ModuleKey =
	| 'persona'
	| 'pempengaruh'
	| 'resensi'
	| 'kamera'
	| 'moderator'
	| 'pentas';

export type ProgramModule = { title: string; desc: string };

type Program = {
	label: string;
	description: string;
	hasil: string;
	untukSiapa: string;
	format: string;
	modules: ProgramModule[];
	takeaways: string[];
};

// Rebuild the keyed MODULES record from the editable programs array.
export const MODULES = Object.fromEntries(
	programsData.programs.map((p) => [
		p.key,
		{
			label: p.label,
			description: p.description,
			hasil: p.hasil,
			untukSiapa: p.untukSiapa,
			format: p.format,
			modules: p.modules,
			takeaways: p.takeaways,
		},
	])
) as Record<ModuleKey, Program>;

// Methodology steps (Penilaian -> Latihan -> Pelaksanaan)
export const METHODOLOGY = methodologyData.steps;

// Trust banner logos
export const TRUSTED_BY = trustedByData.logos;

// Lead gen form options (6 programs derived from JSON + static extras)
export const PROGRAM_OPTIONS = [
	...programsData.programs.map((p) => ({ value: p.key, label: p.label })),
	{ value: 'enterprise-publishing', label: 'Servis Penerbitan Enterprise' },
	{ value: 'custom', label: 'Program Khusus (Bincang Lanjut)' },
];

export const PAX_OPTIONS = [
	{ value: '1-10', label: '1 – 10 peserta' },
	{ value: '11-25', label: '11 – 25 peserta' },
	{ value: '26-50', label: '26 – 50 peserta' },
	{ value: '50-plus', label: '50+ peserta' },
];

// Case studies (metrics-led)
export const CASE_STUDIES = caseStudiesData.cases;
