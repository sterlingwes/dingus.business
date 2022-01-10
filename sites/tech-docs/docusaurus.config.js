// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tech Docs",
  tagline: "Javascript ecosystem overview for mobile folks",
  url: "https://dingus.business/tech-docs",
  baseUrl: "/tech-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "sterlingwes", // Usually your GitHub org/user name.
  projectName: "dingus.business", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/sterlingwes/dingus.business/tree/main/sites/tech-docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/sterlingwes/dingus.business/tree/main/sites/tech-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-P8ZQYRQ8KQ",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Tech Docs",
        logo: {
          alt: "Tech Docs Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "javascript",
            position: "left",
            label: "Frontend",
          },
          {
            type: "doc",
            docId: "node-js",
            position: "left",
            sidebarId: "backend",
            label: "Backend",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/sterlingwes/dingus.business/tree/main/sites/tech-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Tutorial",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/sterlingwes/dingus.business/tree/main/sites/tech-docs",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
