import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Campaign 1",
    pageTitleSuffix: " — Campaign 1",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "henchamb.github.io/campaign",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Spectral",
        body: "Spectral",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f4efe2",
          lightgray: "#e0d7c0",
          gray: "#8a7f63",
          darkgray: "#2e2818",
          dark: "#14110a",
          secondary: "#b87a2a",
          tertiary: "#7a5530",
          highlight: "rgba(184, 122, 42, 0.11)",
          textHighlight: "#b87a2a44",
        },
        darkMode: {
          light: "#1b1812",
          lightgray: "#2e2a20",
          gray: "#6f6450",
          darkgray: "#d6cdb8",
          dark: "#f0e9d6",
          secondary: "#c8954a",
          tertiary: "#d8b06a",
          highlight: "rgba(184, 122, 42, 0.15)",
          textHighlight: "#b87a2a44",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
