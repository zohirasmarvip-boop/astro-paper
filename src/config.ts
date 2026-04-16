export const SITE = {
  website: "https://Liorbx.com/", // replace this with your deployed domain
  author: "Zouhair.B",
  profile: "https://satnaing.dev/",
  desc: "Get the latest gaming news, patch updates, and feature deep-dives at LIORBX. Your daily destination for everything gaming. Keep your game updated and your knowledge sharp.",
  title: "LIORBX",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
