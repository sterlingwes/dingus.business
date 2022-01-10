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
  frontend: [
    "javascript",
    {
      type: "category",
      label: "Build Tools",
      link: {
        type: "doc",
        id: "build-tools",
      },
      collapsed: false,
      items: ["build-tools/babel", "build-tools/typescript"],
    },
    {
      type: "category",
      label: "Frontend Frameworks",
      link: {
        type: "doc",
        id: "frontend-frameworks",
      },
      collapsed: false,
      items: [
        "frontend-frameworks/react",
        "frontend-frameworks/react-native",
        {
          type: "category",
          label: "APIs & State Management",
          collapsed: true,
          link: { type: "doc", id: "frontend-frameworks/apis-and-state" },
          items: [
            "frontend-frameworks/apis-and-state/apollo",
            "frontend-frameworks/apis-and-state/redux",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Distribution",
      link: {
        type: "doc",
        id: "distribution",
      },
      collapsed: false,
      items: [
        "distribution/modules",
        "distribution/node-modules-npm",
        "distribution/bundlers",
      ],
    },
    "test-tools",
  ],
  backend: ["node-js", "containers", "graphql", "postgres"],
};

module.exports = sidebars;
