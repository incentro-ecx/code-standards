import { themes as prismThemes } from "prism-react-renderer";
import remarkGithubAdmonitionsToDirectives from "remark-github-admonitions-to-directives";
import type { Config } from "./config.type.js";
import type { PresetConfig } from "./preset-config.type.js";

export function createConfig(
  config: Config,
  presetConfig: PresetConfig,
): Config {
  const presets = [
    [
      "@docusaurus/preset-classic",
      {
        ...presetConfig,
        docs: {
          beforeDefaultRemarkPlugins: [remarkGithubAdmonitionsToDirectives],
          ...(presetConfig.docs ?? {}),
        },
      },
    ],
  ];

  return {
    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    organizationName: "incentro-dc",

    ...config,

    i18n: {
      defaultLocale: "en",
      locales: ["en"],

      ...config.i18n,
    },

    presets: [...presets, ...(config.presets ?? [])],

    themeConfig: {
      ...config.themeConfig,

      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Incentro B.V.`,

        ...(config.themeConfig?.footer ?? {}),
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,

        ...(config.themeConfig?.prism ?? {}),
      },
    },

    plugins: ["docusaurus-plugin-includes", ...(config.plugins ?? [])],

    webpack: {
      jsLoader: (isServer) => ({
        // This gets downcompiled to CommonJS, so this will be available
        /* eslint-disable-next-line unicorn/prefer-module */
        loader: require.resolve("swc-loader"),

        options: {
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
            },
            target: "es2017",
            transform: {
              react: {
                runtime: "automatic",
              },
            },
          },
          module: {
            type: isServer ? "commonjs" : "es6",
          },
        },
      }),

      ...config.webpack,
    },
  };
}
