const config = {
  app: {
    title: "Drop",
    titleSep: " | ",
    subtitle: "A magazine about computation.",
  },
  paths: {
    posts: "/posts",
    series: "/series",
    index: "/index",
  },
  contacts: {
    github: "https://github.com/wcho21",
    email: "mailto:contact@rooi.dev",
  },
} as const;
export default config;
