module.exports = {
  theme:"vuepress-theme-antdocs",
  title: "天空导航",
  description: "欢迎来到天空导航",
  base: "/",
  additionalPages: [
    {
       path: '/minecraft',
       frontmatter: {
          layout: 'mc'
       }
    }
  ],
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    sidebar: 'auto',
    search: false,
    lastUpdated: "最后更新",
    repo: "CuteLittleSky/tiankongdaohang",
    docsDir: 'docs',
    docsBranch: 'master',
    smoothScroll: true,
    editLinks: true,
    editLinkText: '帮助我们完善天空导航',
    }
  },
};
