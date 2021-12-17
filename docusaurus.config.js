// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/johnsonchau-bulb/BULB-docs',
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
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/bulbappio',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/9NMDkGdetE',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/bulbappio/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/bulbappio/',
              },
              {
                label: 'Medium',
                href: 'https://bulbappio.medium.com/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/bulbappio/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BULB, All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
