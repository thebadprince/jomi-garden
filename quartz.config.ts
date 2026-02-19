import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Jomi's Digital Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Boldonse",
        body: "Public Sans",
        code: "IBM Plex Mono",
      },
      colors: {
  lightMode: {
    // Background + surfaces
    light: "#FEFCFB",        // page background
    lightgray: "#E9EEF2",    // subtle borders / cards
    gray: "#A9B7C3",         // muted UI text
    darkgray: "#034078",     // headings / strong UI text
    dark: "#0A1128",         // main body text

    // Accents
    secondary: "#1282A2",    // links / primary accent
    tertiary: "#034078",     // secondary accent (hover / visited / subtle emphasis)

    // Highlights
    highlight: "rgba(18, 130, 162, 0.12)",   // soft blue wash
    textHighlight: "rgba(255, 242, 54, 0.45)", // keep your existing yellow-ish highlight vibe
  },

  darkMode: {
    // Background + surfaces
    light: "#0A1128",        // page background
    lightgray: "#001F54",    // surfaces / borders
    gray: "#6F89A3",         // muted UI text (blue-gray that fits palette)
    darkgray: "#DDE6EE",     // headings / bright UI text
    dark: "#FEFCFB",         // main body text

    // Accents
    secondary: "#1282A2",    // links / primary accent
    tertiary: "#034078",     // secondary accent (used sparingly on dark)

    // Highlights
    highlight: "rgba(18, 130, 162, 0.18)",
    textHighlight: "rgba(255, 242, 54, 0.30)",
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
