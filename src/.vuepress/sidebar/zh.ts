import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/demo/": [
    "",
    {
      icon: "discover",
      text: "案例",
      prefix: "/demo/",
      children: [
        {
          text: "显示信息",
          icon: "write",
          link: "markdown.md",
        },
      ],
    },
  ],
  "/know/":[
    {
      text: "powerbi",
      icon: "discover",
      collapsible: true,
      prefix: "/know/powerbi/",
      children: [
        {
          text: "（一）课程介绍",
          link: "1课程介绍.md",
        },
        {
        text: "（二）相关概念介绍",
        link:"2数据分析相关概念介绍.md",
        },
        {
        text: "（三）厂商介绍",
        collapsible: true,
        children:["3.1Gartner 2022年分析与BI平台魔力象限.md","3.2阿里云-DataWorks.md","3.3奇点云.md","3.4浪潮.md"],
        },
        {
          text: "（四）powerbi",
          collapsible: true,
          children:["4.1产品介绍.md","4.2样例数据库介绍.md","4.3集成.md","4.4建模（开发治理）.md","4.5数据分析（可视化）.md","4.6服务发布.md"],
          },
      ],
    },
  ],
});
