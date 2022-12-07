import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "蔡文学的个人知识库",
      description: "蔡文学的个人知识库",
    },
  },

  theme,

  shouldPrefetch: false,
});
