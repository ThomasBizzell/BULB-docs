/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'welcome',
    {
      type: 'category',
      collapsed: false,
      label: 'Overview',
      items: ['Overview/what', 'Overview/roadmap', 'Overview/team', 'Overview/security', 'Overview/find-us'],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Tokenomics',
      items: ['Tokenomics/token', 'Tokenomics/token-faq'],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'BULB Explained',
      items: ['BULB Explained/bulbmojis', 'BULB Explained/how-to-earn-bulb-tokens', 'BULB Explained/how-to-spend-bulb-tokens',
      , 'BULB Explained/user-faq'],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'General',
      items: ['General/wallet', 'General/faq'],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Legal',
      items: ['Legal/privacy', 'Legal/terms', 'Legal/disclaimer'],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Socials',
      items: [
        {
          type: 'link',
          label: 'Website',
          href: 'https://www.bulbapp.io',
        },
        {
          type: 'link',
          label: 'Discord',
          href: 'https://discord.gg/D5gQmvC5Gu',
        },
        {
          type: 'link',
          label: 'Reddit',
          href: 'https://www.reddit.com/r/bulbappio/',
        },
        {
          type: 'link',
          label: 'Twitter',
          href: 'https://twitter.com/bulbappio',
        },
        {
          type: 'link',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/bulbappio',
        },
        {
          type: 'link',
          label: 'Instagram',
          href: 'https://www.instagram.com/bulbappio/',
        },
        {
          type: 'link',
          label: 'Medium',
          href: 'https://bulbappio.medium.com/',
        },
      ],
    },
    
  ],
};

module.exports = sidebars;
