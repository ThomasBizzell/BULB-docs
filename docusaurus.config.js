// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BULB',
  tagline: 'Write to earn. Read to earn',
  url: 'https://docs.bulbapp.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/bulb_logo_simple.png',
  organizationName: 'BULB', // Usually your GitHub org/user name.
  projectName: 'BULB-docs', // Usually your repo name.
  staticDirectories: ['public', 'static'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/johnsonchau-bulb/BULB-docs/blob/master/',
          routeBasePath: '/'
        },
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
        title: '',
        logo: {
          alt: 'BULB',
          src: 'img/bulb_logo.png',
        },
        items: [
          {
            href: 'https://www.bulbapp.io/',
            label: 'More',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} BULB Labs PTY LTD, All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      require.resolve('docusaurus-lunr-search'),
      [
        '@docusaurus/plugin-google-analytics',
        {
          trackingID: process.env.ANALYTICS_ID,
          anonymizeIP: true,
        },
      ],
  ],
};

module.exports = config;
