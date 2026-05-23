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
    ignorePatterns: ["private", "templates", ".obsidian", "SESSION RECAPS"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cinzel",
        body: "EB Garamond",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f0e8",
          lightgray: "#ddd5c3",
          gray: "#a89880",
          darkgray: "#3a3020",
          dark: "#19160f",
          secondary: "#b8892a",
          tertiary: "#8a6820",
          highlight: "rgba(184, 137, 42, 0.12)",
          textHighlight: "#b8892a44",
        },
        darkMode: {
          light: "#19160f",
          lightgray: "#2e2a22",
          gray: "#6b5f4e",
          darkgray: "#c8bfaf",
          dark: "#ddd5c3",
          secondary: "#b8892a",
          tertiary: "#d4a84b",
          highlight: "rgba(184, 137, 42, 0.15)",
          textHighlight: "#b8892a44",
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
