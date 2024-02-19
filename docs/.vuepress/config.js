module.exports = {
  theme:"vuepress-theme-antdocs",
  title: "天空我的世界(Minecraft)导航",
  description: "天空我的世界(Minecraft)导航,粘液科技,Pojav启动器,Worldedit创始神,天空基础整合",
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
    ["link",{ rel: "icon",href: "/assets/logo.png" }],
    ["meta",{ rel: "keywords",content: "Minecraft" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "最后更新",
    repo: "CuteLittleSky/tiankongdaohang",
    docsDir: 'docs',
    docsBranch: 'main',
    smoothScroll: true,
    editLinks: true,
    editLinkText: '帮助我们完善天空导航',
  },
};
