// Global site metadata for V2 (B2B/B2G target).

export const SITE_TITLE = 'Kuras Buku';
export const SITE_ORG = 'Penerbitan Kuras Buku';
export const SITE_DESCRIPTION =
	'Program latihan komunikasi dan penyampaian untuk individu, profesional, dan organisasi. Bina persona, kuasai kamera dan pentas, dan sampaikan idea anda dengan penuh yakin.';
export const SITE_LANG = 'ms';
export const SITE_LOCALE = 'ms_MY';

// Corporate verification details (visible in footer per procurement requirements)
export const SSM_REGISTRATION = 'SSM XXXXXXXX-X (Kemaskini)';
export const SST_NUMBER = '';
export const BUSINESS_ADDRESS =
	'18-1, Jalan Puteri 3A/5, Bandar Puteri Bangi, 43000 Kajang, Selangor, Malaysia';

// Structured-address parts for schema.org PostalAddress
export const BUSINESS_ADDRESS_PARTS = {
	streetAddress: '18-1, Jalan Puteri 3A/5, Bandar Puteri Bangi',
	addressLocality: 'Kajang',
	addressRegion: 'Selangor',
	postalCode: '43000',
	addressCountry: 'MY',
};

// CTA destinations
export const PRIMARY_CTA_URL = '/hubungi';
export const PROPOSAL_CTA_URL = '/hubungi?intent=proposal';
export const INTAKE_FORM_ENDPOINT = '';

// Modules adapted for organizational positioning
export type ModuleKey =
	| 'persona'
	| 'pempengaruh'
	| 'resensi'
	| 'kamera'
	| 'moderator'
	| 'pentas';

// Program latihan teras (6). Field `description` + `hasil` (outcome).
export const MODULES: Record<
	ModuleKey,
	{
		label: string;
		description: string;
		hasil: string;
	}
> = {
	persona: {
		label: 'Bina Persona @ Media Sosial',
		description:
			'Bentuk identiti digital yang konsisten dan dipercayai. Anda belajar merangka persona yang autentik, menarik pengikut yang tepat, dan mengubah kehadiran maya menjadi pengaruh yang bernilai.',
		hasil: 'Persona digital yang jelas dan pengikut yang terarah.',
	},
	pempengaruh: {
		label: 'Jana Pendapatan sebagai Pempengaruh Buku',
		description:
			'Tukar minat membaca menjadi kerjaya. Pelajari cara memonetisasi pengaruh anda, dari kerjasama jenama hingga kandungan berbayar, tanpa menggadai kredibiliti.',
		hasil: 'Strategi pendapatan yang mampan sebagai pempengaruh buku.',
	},
	resensi: {
		label: 'Bengkel Bicara & Resensi Buku',
		description:
			'Kuasai seni mengulas yang tajam dan berwibawa. Anda dilatih menganalisis, menilai, dan menyampaikan resensi yang dihormati pembaca, penulis, dan penerbit.',
		hasil: 'Keupayaan mengulas yang kritis dan dipercayai.',
	},
	kamera: {
		label: 'Cakap Depan Kamera',
		description:
			'Hilangkan kekok, kuasai lensa. Teknik praktikal untuk menyampaikan mesej dengan tenang, jelas, dan meyakinkan dalam setiap rakaman.',
		hasil: 'Keyakinan menyampaikan depan kamera tanpa skrip.',
	},
	moderator: {
		label: 'Seni Menjadi Moderator Interaktif',
		description:
			'Pandu perbualan, hidupkan majlis. Belajar mengemudi sesi, mencungkil jawapan bernas, dan mengekalkan tumpuan audiens dari patah pertama hingga noktah terakhir.',
		hasil: 'Kawalan penuh sebagai moderator yang interaktif.',
	},
	pentas: {
		label: 'Yakin di Kertas, Gigil di Pentas',
		description:
			'Untuk yang lancar berkarya tetapi kaku berbicara. Program ini merapatkan jurang antara pena dan pentas, membina keyakinan menyampaikan idea dengan suara anda sendiri.',
		hasil: 'Keberanian membentangkan idea di hadapan khalayak.',
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
	{ value: 'persona', label: 'Bina Persona @ Media Sosial' },
	{ value: 'pempengaruh', label: 'Jana Pendapatan sebagai Pempengaruh Buku' },
	{ value: 'resensi', label: 'Bengkel Bicara & Resensi Buku' },
	{ value: 'kamera', label: 'Cakap Depan Kamera' },
	{ value: 'moderator', label: 'Seni Menjadi Moderator Interaktif' },
	{ value: 'pentas', label: 'Yakin di Kertas, Gigil di Pentas' },
	{ value: 'enterprise-publishing', label: 'Servis Penerbitan Enterprise' },
	{ value: 'custom', label: 'Program Khusus (Bincang Lanjut)' },
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
		tag: 'Latihan Penulisan',
	},
	{
		metric: '3X',
		label: 'Output newsletter dipertingkatkan',
		quote:
			'Sebelum program, newsletter kami terbit setiap suku. Selepas latihan strategi penerbitan, kami konsisten terbit setiap bulan tanpa tambah pasukan.',
		attribution: 'Head of Communications, GLC Tenaga',
		tag: 'Strategi Penerbitan',
	},
	{
		metric: '12 mins',
		label: 'Purata response time media',
		quote:
			'Crisis playbook yang dibangunkan dengan Kuras Buku tolong kami respons wartawan dalam 12 minit purata, dari sebelum ini berjam.',
		attribution: 'Director of Corporate Affairs, Korporat Tersenarai',
		tag: 'Komunikasi Strategik',
	},
];
