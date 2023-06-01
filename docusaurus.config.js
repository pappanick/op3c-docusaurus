// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'OP3C Algorithm',
	tagline: 'brought  to you by Planetek',
	url: 'https://op3c-algo-docusaurus.netlify.app',
	//url: 'https://pappanick.github.io/OP3C/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'pappanick', // Usually your GitHub org/user name.
	projectName: 'op3c-docusaurus', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'gr'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: false,
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'OP3C Index',
				logo: {
					alt: 'OP3C Algorithm logo',
					src: 'img/OP3C.png',
				},
			},
			footer: {
				style: 'dark',
				logo: {
					alt: 'Financing from the European Union, European Regional Development Fund, EPANEK 2014-2020, Operational Program Competitiveness, Entrepreneurship Innovation, General Secretariat for Research and Innovation, ESPA 2014-2020, development - work - solidarity',
					// alt: 'Συγχρηματοδότηση Ευρωπαϊκής Ένωσης, Ευρωπαϊκό Ταμείο Περιφερειακής Ανάπτυξης, ΕΠΑνΕΚ 2014-2020, Επιχειρησιακό Πρόγραμμα Ανταγωνιστικότητα, Επιχειρηματικότητα Καινοτομία, Γενική Γραμματεία Έρευνας και Καινοτομίας, ΕΣΠΑ 2014-2020, ανάπτυξη -εργασία- αλληλεγγύη',
					src: 'img/ΕΣΠΑ.png',
					width: 1862,
					height: 155,
				},
				links: [
					{
						title: 'Contact us',
						items: [
							{
								label: 'Planetek Website',
								href: 'https://www.planetek.gr/',
							},
						],
					},
					{
						title: 'LinkedIn',
						items: [
							{
								label: 'LinkedIn',
								href: 'https://linkedin.com/company/planetek-hellas/',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Planetek built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
