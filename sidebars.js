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
      items: ['Overview/what', 'Overview/team', 'Overview/security', 'Overview/find-us'],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Tokenomics',
      items: ['Tokenomics/token', 'Tokenomics/token-faq'],
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
