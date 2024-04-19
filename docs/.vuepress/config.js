module.exports = {
  theme:"vuepress-theme-antdocs",
  title: "天空我的世界(Minecraft)导航",
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
    ["meta",{ rel: "keywords",content: "Minecraft,我的世界,粘液科技,Slimefun,Pojav,MC,我的世界论坛,MCBBS,创世神,我的世界中文论坛,worldedit" }]
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
