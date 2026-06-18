// Global site metadata for V2 (B2B/B2G target).

export const SITE_TITLE = 'Penerbitan Kuras Buku';
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

// Program latihan teras (6). Butiran modul + takeaways drafted; SAHKAN dengan klien.
export type ProgramModule = { title: string; desc: string };
export const MODULES: Record<
	ModuleKey,
	{
		label: string;
		description: string;
		hasil: string;
		untukSiapa: string;
		format: string;
		modules: ProgramModule[];
		takeaways: string[];
	}
> = {
	persona: {
		label: 'Bina Persona @ Media Sosial',
		description:
			'Bentuk identiti digital yang konsisten dan dipercayai. Anda belajar merangka persona yang autentik, menarik pengikut yang tepat, dan mengubah kehadiran maya menjadi pengaruh yang bernilai.',
		hasil: 'Persona digital yang jelas dan pengikut yang terarah.',
		untukSiapa: 'Penulis, kreator, dan profesional yang mahu membina kehadiran digital yang berwibawa.',
		format: 'Bengkel praktikal, fizikal atau hybrid.',
		modules: [
			{ title: 'Asas Persona Digital', desc: 'Kenal pasti nilai teras, niche, dan suara unik anda. Bezakan persona yang autentik daripada tiruan yang mudah dilupakan.' },
			{ title: 'Strategi Kandungan & Konsistensi', desc: 'Rangka content pillar, kalendar penerbitan, dan gaya visual yang konsisten merentas platform.' },
			{ title: 'Membina Engagement Sebenar', desc: 'Teknik menarik dan mengekalkan pengikut yang relevan, bukan sekadar mengejar nombor.' },
			{ title: 'Pengurusan Reputasi Maya', desc: 'Mengendali kritik, mengawal naratif, dan menjaga imej dalam jangka panjang.' },
		],
		takeaways: [
			'Satu pernyataan persona yang jelas dan boleh dipertahankan',
			'Content pillar dan kalendar kandungan 90 hari',
			'Panduan gaya visual dan nada peribadi',
			'Strategi pertumbuhan pengikut secara organik',
		],
	},
	pempengaruh: {
		label: 'Jana Pendapatan sebagai Pempengaruh Buku',
		description:
			'Tukar minat membaca menjadi kerjaya. Pelajari cara memonetisasi pengaruh anda, dari kerjasama jenama hingga kandungan berbayar, tanpa menggadai kredibiliti.',
		hasil: 'Strategi pendapatan yang mampan sebagai pempengaruh buku.',
		untukSiapa: 'Pembaca tegar, bookstagrammer, dan pencipta kandungan buku yang mahu menjana pendapatan.',
		format: 'Bengkel praktikal dengan kajian kes sebenar.',
		modules: [
			{ title: 'Ekosistem Pempengaruh Buku', desc: 'Memahami pasaran, jenis kerjasama, dan peluang pendapatan dalam dunia buku tempatan dan antarabangsa.' },
			{ title: 'Membina Media Kit', desc: 'Rangka media kit profesional yang menarik perhatian jenama dan penerbit.' },
			{ title: 'Strategi Monetisasi', desc: 'Affiliate, sponsored content, jualan langsung, dan produk sendiri tanpa menggadai kepercayaan audiens.' },
			{ title: 'Rundingan & Penetapan Harga', desc: 'Cara menilai nilai diri, berunding kadar, dan menguruskan kontrak dengan yakin.' },
		],
		takeaways: [
			'Media kit peribadi yang siap digunakan',
			'Pelan monetisasi pelbagai aliran pendapatan',
			'Templat kadar dan cadangan kerjasama',
			'Strategi mengekalkan kepercayaan audiens',
		],
	},
	resensi: {
		label: 'Bengkel Bicara & Resensi Buku',
		description:
			'Kuasai seni mengulas yang tajam dan berwibawa. Anda dilatih menganalisis, menilai, dan menyampaikan resensi yang dihormati pembaca, penulis, dan penerbit.',
		hasil: 'Keupayaan mengulas yang kritis dan dipercayai.',
		untukSiapa: 'Peminat buku, penulis, dan bakal pengkritik yang mahu mengulas dengan berwibawa.',
		format: 'Bengkel analisis dan latihan menulis.',
		modules: [
			{ title: 'Seni Membaca Secara Kritis', desc: 'Teknik membaca untuk menganalisis struktur, tema, dan kekuatan sesebuah karya, bukan sekadar menikmati.' },
			{ title: 'Struktur Resensi Berkesan', desc: 'Rangka ulasan yang seimbang, berhujah, dan menarik untuk dibaca.' },
			{ title: 'Bicara Buku di Khalayak', desc: 'Menyampaikan resensi secara lisan dengan yakin di majlis, podcast, atau video.' },
			{ title: 'Etika & Integriti Pengulas', desc: 'Kekal jujur, adil, dan dihormati oleh penulis serta industri.' },
		],
		takeaways: [
			'Kerangka resensi yang boleh diguna berulang',
			'Portfolio ulasan pertama anda',
			'Teknik penyampaian bicara buku',
			'Kredibiliti sebagai pengulas yang dipercayai',
		],
	},
	kamera: {
		label: 'Cakap Depan Kamera',
		description:
			'Hilangkan kekok, kuasai lensa. Teknik praktikal untuk menyampaikan mesej dengan tenang, jelas, dan meyakinkan dalam setiap rakaman.',
		hasil: 'Keyakinan menyampaikan depan kamera tanpa skrip.',
		untukSiapa: 'Sesiapa yang perlu tampil dalam video, dari kreator hingga jurucakap organisasi.',
		format: 'Bengkel hands-on dengan sesi rakaman.',
		modules: [
			{ title: 'Mengatasi Kekok Depan Lensa', desc: 'Psikologi keyakinan dan teknik menenangkan diri sebelum dan semasa rakaman.' },
			{ title: 'Bahasa Badan & Suara', desc: 'Postur, kontak mata, intonasi, dan tempo yang sesuai untuk skrin.' },
			{ title: 'Struktur Mesej yang Jelas', desc: 'Merangka poin utama dan aliran cerita yang mudah difahami audiens.' },
			{ title: 'Teknikal Asas Rakaman', desc: 'Pencahayaan, audio, dan framing untuk menghasilkan kandungan solo yang kemas.' },
		],
		takeaways: [
			'Keyakinan merakam tanpa bergantung pada skrip',
			'Teknik penyampaian yang jelas dan tenang',
			'Setup rakaman minimum yang berkesan',
			'Rakaman showreel peribadi pertama anda',
		],
	},
	moderator: {
		label: 'Seni Menjadi Moderator Interaktif',
		description:
			'Pandu perbualan, hidupkan majlis. Belajar mengemudi sesi, mencungkil jawapan bernas, dan mengekalkan tumpuan audiens dari patah pertama hingga noktah terakhir.',
		hasil: 'Kawalan penuh sebagai moderator yang interaktif.',
		untukSiapa: 'Pengacara majlis, fasilitator, dan pemimpin sesi perbincangan atau panel.',
		format: 'Bengkel praktikal dengan simulasi panel.',
		modules: [
			{ title: 'Peranan & Persediaan Moderator', desc: 'Memahami tanggungjawab, membuat riset, dan bersedia sebelum majlis.' },
			{ title: 'Seni Bertanya', desc: 'Merangka soalan yang mencungkil jawapan bernas dan menghidupkan perbualan.' },
			{ title: 'Mengurus Dinamik Majlis', desc: 'Mengawal masa, mengendali panel, dan menangani situasi yang tidak dijangka.' },
			{ title: 'Penglibatan Audiens', desc: 'Teknik melibatkan hadirin dan mengekalkan tumpuan sepanjang sesi.' },
		],
		takeaways: [
			'Kerangka persediaan moderator',
			'Bank soalan dan teknik susulan',
			'Keyakinan mengendali panel dan forum',
			'Strategi penglibatan audiens',
		],
	},
	pentas: {
		label: 'Yakin di Kertas, Gigil di Pentas',
		description:
			'Untuk yang lancar berkarya tetapi kaku berbicara. Program ini merapatkan jurang antara pena dan pentas, membina keyakinan menyampaikan idea dengan suara anda sendiri.',
		hasil: 'Keberanian membentangkan idea di hadapan khalayak.',
		untukSiapa: 'Penulis dan profesional yang mahu mengatasi gementar berucap di khalayak.',
		format: 'Bengkel intensif dengan latihan pentas.',
		modules: [
			{ title: 'Memahami Ketakutan Pentas', desc: 'Mengenal punca gementar dan teknik praktikal untuk menguruskannya.' },
			{ title: 'Dari Tulisan ke Ucapan', desc: 'Menukar idea bertulis menjadi penyampaian lisan yang hidup dan tersusun.' },
			{ title: 'Penyampaian & Kehadiran', desc: 'Suara, gerak badan, dan cara membina hubungan dengan audiens.' },
			{ title: 'Latihan & Maklum Balas', desc: 'Sesi praktikal membentang dengan bimbingan dan penambahbaikan terus.' },
		],
		takeaways: [
			'Teknik menguruskan gementar pentas',
			'Keupayaan menukar tulisan menjadi ucapan',
			'Penyampaian yang yakin dan berkesan',
			'Pengalaman membentang dengan maklum balas',
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
			'Latihan Penerbitan Kuras Buku menyusun semula proses pelaporan jabatan kami. Editing time turun 40% dan kualiti dokumen lebih konsisten.',
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
			'Crisis playbook yang dibangunkan dengan Penerbitan Kuras Buku tolong kami respons wartawan dalam 12 minit purata, dari sebelum ini berjam.',
		attribution: 'Director of Corporate Affairs, Korporat Tersenarai',
		tag: 'Komunikasi Strategik',
	},
];
