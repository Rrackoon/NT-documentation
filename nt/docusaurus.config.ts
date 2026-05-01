import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Redocusaurus from 'redocusaurus';
import simplePlantUML from '@akebifiky/remark-simple-plantuml';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'NutriTrack Docs',
  tagline: 'Техническая документация по продукту NutriTrack',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://Rrackoon.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/NT-documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Rrackoon',
  projectName: 'NT-documentation',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [simplePlantUML],
          editUrl:
            'https://github.com/Rrackoon/NT-documentation/tree/main/nt/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'openapi/nt-api.yaml',
            route: '/api/',
          },
        ],
        theme: {
          primaryColor: '#0f766e',
          options: {
            hideRequestPayloadSample: true,
            hideSingleRequestSampleTab: true,
            onlyRequiredInSamples: true,
            jsonSampleExpandLevel: 1,
          },
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],
  plugins: [['drawio', {}]],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'NutriTrack Docs',
      logo: {
        alt: 'NutriTrack Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Документация',
        },
        {to: '/api/', label: 'OpenAPI', position: 'left'},
        {
          href: 'https://github.com/Rrackoon/NT-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Введение',
              to: '/docs/intro',
            },
            {
              label: 'Архитектура',
              to: '/docs/architecture/overview',
            },
          ],
        },
        {
          title: 'Artifacts',
          items: [
            {
              label: 'OpenAPI',
              to: '/api/',
            },
            {
              label: 'BPMN и Event Storming',
              to: '/docs/architecture/bpmn',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Репозиторий',
              href: 'https://github.com/Rrackoon/NT-documentation',
            },
            {
              label: 'GitHub Pages',
              href: 'https://Rrackoon.github.io/NT-documentation/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NutriTrack. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
