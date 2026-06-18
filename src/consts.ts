// Global site metadata for V2 (B2B/B2G target).

export const SITE_TITLE = 'Kuras Buku';
export const SITE_ORG = 'Kuras Buku Enterprise Communications';
export const SITE_DESCRIPTION =
	'Program latihan komunikasi dan penerbitan untuk agensi kerajaan dan korporat. Bina kapasiti penulisan profesional, penerbitan korporat, dan komunikasi strategik di dalam organisasi anda.';
export const SITE_LANG = 'ms';
export const SITE_LOCALE = 'ms_MY';

// Corporate verification details (visible in footer per procurement requirements)
export const SSM_REGISTRATION = 'SSM XXXXXXXX-X (Kemaskini)';
export const SST_NUMBER = '';
export const BUSINESS_ADDRESS = 'Alamat akan dikemaskini';

// CTA destinations
export const PRIMARY_CTA_URL = '/hubungi';
export const PROPOSAL_CTA_URL = '/hubungi?intent=proposal';
export const INTAKE_FORM_ENDPOINT = '';

// Modules adapted for organizational positioning
export type ModuleKey = 'penulisan' | 'penerbitan' | 'strategik';

export const MODULES: Record<
	ModuleKey,
	{
		label: string;
		positioning: string;
		outcome: string;
		bullets: string[];
	}
> = {
	penulisan: {
		label: 'Penulisan Profesional & Dokumentasi',
		positioning:
			'Latihan intensif merangka kertas putih (white papers), dokumen dasar, dan laporan korporat. Ubah data yang kompleks menjadi naratif yang jelas, padat, dan memikat.',
		outcome:
			'Komunikasi organisasi yang jelas, bebas ralat, dan berstruktur tinggi.',
		bullets: [
			'Struktur kertas putih dan dokumen polisi',
			'Standard editorial untuk laporan kerajaan',
			'Templat dan workflow penulisan jabatan',
			'Editorial review framework',
		],
	},
	penerbitan: {
		label: 'Strategi Penerbitan Korporat',
		positioning:
			'Kuasai rantaian pengeluaran penerbitan dalaman. Dari surat berita hingga laporan tahunan, kami terapkan standard industri bagi memastikan hasil cetakan dan digital bertaraf premium.',
		outcome:
			'Kitaran produksi diperkemas dan kualiti visual serta editorial dipertingkatkan.',
		bullets: [
			'Workflow penerbitan end-to-end',
			'Annual report production standards',
			'Newsletter dan briefing pack templates',
			'Style guide dan brand voice manual',
		],
	},
	strategik: {
		label: 'Komunikasi Strategik',
		positioning:
			'Selaraskan suara pasukan, tangani media dengan taktikal, dan bina reputasi kebal. Komunikasi bukan sekadar melontar mesej, tetapi memastikan ia membumi dan memberi impak.',
		outcome:
			'Naratif awam yang padu dan penglibatan stakeholder yang lebih baik.',
		bullets: [
			'Messaging framework untuk eksekutif',
			'Media relations dan press handling',
			'Crisis communications playbook',
			'Stakeholder engagement strategy',
		],
	},
};

// Methodology steps (Assess -> Train -> Implement)
export const METHODOLOGY = [
	{
		num: '01',
		title: 'Penilaian',
		bm: '(Assess)',
		desc:
			'Kenal pasti kelompangan komunikasi sedia ada. Kami mengaudit aliran kerja dan sasaran mesej organisasi anda.',
	},
	{
		num: '02',
		title: 'Latihan',
		bm: '(Train)',
		desc:
			'Pemindahan ilmu secara taktikal. Latihan praktikal dirangka bagi merapatkan jurang kemahiran menerusi modul yang disesuaikan.',
	},
	{
		num: '03',
		title: 'Pelaksanaan',
		bm: '(Implement)',
		desc:
			'Merencana gerak kerja pasca-latihan. Kami bantu anda menterjemah setiap modul menjadi amalan harian yang nyata.',
	},
];

// Trust banner partner placeholders (replace dengan logo real bila tersedia)
export const TRUSTED_BY = [
	'Agensi A',
	'Kementerian B',
	'Korporat C',
	'GLC D',
	'Universiti E',
	'NGO F',
];

// Lead gen form options
export const PROGRAM_OPTIONS = [
	{ value: 'penulisan', label: 'Penulisan Profesional & Dokumentasi' },
	{ value: 'penerbitan', label: 'Strategi Penerbitan Korporat' },
	{ value: 'strategik', label: 'Komunikasi Strategik' },
	{ value: 'enterprise-publishing', label: 'Servis Penerbitan Enterprise' },
	{ value: 'custom', label: 'Custom Program (Bincang Lanjut)' },
];

export const PAX_OPTIONS = [
	{ value: '1-10', label: '1 – 10 peserta' },
	{ value: '11-25', label: '11 – 25 peserta' },
	{ value: '26-50', label: '26 – 50 peserta' },
	{ value: '50-plus', label: '50+ peserta' },
];

// Case study placeholders (metrics-led, B2B framing)
export const CASE_STUDIES = [
	{
		metric: '40%',
		label: 'Pengurangan masa editing',
		quote:
			'Latihan Kuras Buku menyusun semula proses pelaporan jabatan kami. Editing time turun 40% dan kualiti dokumen lebih konsisten.',
		attribution: 'Pengarah, Sebuah Agensi Kerajaan Persekutuan',
		module: 'penulisan',
	},
	{
		metric: '3X',
		label: 'Output newsletter dipertingkatkan',
		quote:
			'Sebelum program, newsletter kami terbit setiap suku. Selepas latihan strategi penerbitan, kami konsisten terbit setiap bulan tanpa tambah pasukan.',
		attribution: 'Head of Communications, GLC Tenaga',
		module: 'penerbitan',
	},
	{
		metric: '12 mins',
		label: 'Purata response time media',
		quote:
			'Crisis playbook yang dibangunkan dengan Kuras Buku tolong kami respons wartawan dalam 12 minit purata, dari sebelum ini berjam.',
		attribution: 'Director of Corporate Affairs, Korporat Tersenarai',
		module: 'strategik',
	},
];
