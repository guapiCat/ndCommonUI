// docs/.vuepress/config.js
import { defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { containerPlugin } from "@vuepress/plugin-container";
import "vuepress-plugin-demo-code";
import { getDirname, path } from "@vuepress/utils";
var __vite_injected_original_import_meta_url = "file:///D:/work%20test/newdim-font%E4%BB%A3%E7%A0%81%E5%90%88%E5%B9%B6/frontcommon/docs/.vuepress/config.js";
var __dirname = getDirname(__vite_injected_original_import_meta_url);
var config_default = {
  port: 9527,
  base: "/docs/",
  lang: "zh-CN",
  title: "\u524D\u7AEF\u516C\u5171\u5185\u5BB9\u8BF4\u660E\u4E0E\u64CD\u4F5C\u6587\u6863",
  description: "\u7AD9\u70B9\u914D\u7F6E",
  theme: defaultTheme(
    {
      lastUpdated: false,
      contributors: false,
      navbar: [
        {
          text: "\u7EC4\u4EF6\u5E93",
          link: "/componentMD/"
        },
        {
          text: "\u63D2\u4EF6\u96C6",
          link: "/pluginsMD/"
        },
        {
          text: "\u89C4\u8303",
          link: "/standardMD/"
        }
      ],
      sidebar: {
        "/componentMD/": getCompSideBar(),
        "/uiMD/": getUiSideBar(),
        "/pluginsMD/": getPluginSideBar(),
        "/standardMD/": getStandard(),
        "/": [""]
      }
    }
  ),
  plugins: [
    "demo-code",
    containerPlugin({}),
    nprogressPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components")
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "\u641C\u7D22"
        },
        "/zh/": {
          placeholder: "\u641C\u7D22"
        }
      }
    })
  ]
};
function getCompSideBar() {
  return [
    { text: "", children: ["\u8868\u683C"], collapsible: false },
    { text: "", children: ["\u5206\u9875"], collapsible: false },
    { text: "", children: ["\u5F00\u5173"], collapsible: false },
    { text: "", children: ["\u8F93\u5165\u6846"], collapsible: false },
    { text: "", children: ["\u9009\u62E9\u5668"], collapsible: false },
    { text: "", children: ["\u5355\u9009\u6846"], collapsible: false },
    { text: "", children: ["\u6570\u5B57\u8F93\u5165\u6846"], collapsible: false },
    { text: "", children: ["\u5361\u7247"], collapsible: false },
    { text: "", children: ["\u6807\u7B7E"], collapsible: false },
    { text: "", children: ["\u63CF\u8FF0\u5217\u8868"], collapsible: false },
    { text: "", children: ["\u8D70\u9A6C\u706F"], collapsible: false },
    { text: "", children: ["\u65E5\u5386"], collapsible: false },
    { text: "", children: ["\u6298\u53E0\u9762\u677F"], collapsible: false },
    { text: "", children: ["\u6ED1\u5757"], collapsible: false },
    { text: "", children: ["\u6587\u5B57\u63D0\u793A"], collapsible: false },
    { text: "", children: ["Alert\u8B66\u544A"], collapsible: false },
    { text: "", children: ["Dialog\u5BF9\u8BDD\u6846"], collapsible: false },
    { text: "", children: ["\u62BD\u5C49"], collapsible: false },
    { text: "", children: ["\u6C14\u6CE1\u786E\u8BA4\u6846"], collapsible: false },
    { text: "", children: ["\u65F6\u95F4\u7EBF"], collapsible: false },
    { text: "", children: ["\u6B65\u9AA4\u6761"], collapsible: false }
  ];
}
function getStandard() {
  return [
    { text: "", children: ["\u7EC4\u4EF6\u5E93\u7F16\u5199\u89C4\u8303"], collapsible: false },
    { text: "", children: ["\u4E3B\u914D\u7F6E\u6587\u4EF6\u4F9D\u8D56\u8BF4\u660E\u6587\u6863"], collapsible: false }
  ];
}
function getPluginSideBar() {
  return [
    {
      text: "\u57FA\u7840\u5DE5\u5177\u5305",
      children: ["common"],
      collapsible: false
    },
    {
      text: "\u6570\u7EC4\u64CD\u4F5C",
      link: "/pluginsMD/array.md",
      children: ["array"],
      collapsible: false
    },
    {
      text: "\u6B63\u5219\u64CD\u4F5C",
      link: "/pluginsMD/pattern.md",
      children: ["pattern"]
    },
    {
      text: "\u4E1A\u52A1\u64CD\u4F5C",
      link: "/pluginsMD/business.md",
      children: ["business"]
    },
    {
      text: "\u6570\u636E\u7ED3\u6784",
      link: "/pluginsMD/dataStruct.md",
      children: ["dataStruct"]
    }
  ];
}
function getUiSideBar() {
  return [
    {
      text: "\u57FA\u7840\u63A7\u4EF6"
    },
    {
      text: "\u63D0\u793A\u63A7\u4EF6",
      children: [
        {
          text: "\u5F39\u6846",
          link: "/uiMD/confirm.md"
        },
        {
          text: "\u8F7B\u63D0\u793A",
          link: "/uiMD/message.md"
        }
      ]
    },
    {
      text: "\u4E1A\u52A1\u7EC4\u4EF6",
      children: [
        {
          text: "\u5171\u7528\u9009\u4EBA\u9009\u90E8\u95E8",
          link: "/uiMD/selectMember.md"
        },
        {
          text: "\u4E8C\u7EF4\u7801\u751F\u6210\u3001\u4E0B\u8F7D\u3001\u52A8\u6001\u6E32\u67D3\u5E95\u90E8\u6587\u672C",
          link: "/uiMD/qrcode.md"
        }
      ]
    }
  ];
}
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovd29yayB0ZXN0L25ld2RpbS1mb250XHU0RUUzXHU3ODAxXHU1NDA4XHU1RTc2L2Zyb250Y29tbW9uL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3b3JrIHRlc3RcXFxcbmV3ZGltLWZvbnRcdTRFRTNcdTc4MDFcdTU0MDhcdTVFNzZcXFxcZnJvbnRjb21tb25cXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93b3JrJTIwdGVzdC9uZXdkaW0tZm9udCVFNCVCQiVBMyVFNyVBMCU4MSVFNSU5MCU4OCVFNSVCOSVCNi9mcm9udGNvbW1vbi9kb2NzLy52dWVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tICd2dWVwcmVzcydcclxuaW1wb3J0IHsgc2VhcmNoUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1zZWFyY2gnO1xyXG5pbXBvcnQgeyBkb2NzZWFyY2hQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLWRvY3NlYXJjaCc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyQ29tcG9uZW50c1BsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tcmVnaXN0ZXItY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG5wcm9ncmVzc1BsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tbnByb2dyZXNzJztcclxuaW1wb3J0IHsgY29udGFpbmVyUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1jb250YWluZXInO1xyXG5pbXBvcnQgJ3Z1ZXByZXNzLXBsdWdpbi1kZW1vLWNvZGUnO1xyXG5cclxuaW1wb3J0IHsgZ2V0RGlybmFtZSwgcGF0aCB9IGZyb20gJ0B2dWVwcmVzcy91dGlscyc7XHJcbmNvbnN0IF9fZGlybmFtZSA9IGdldERpcm5hbWUoaW1wb3J0Lm1ldGEudXJsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHBvcnQ6IDk1MjcsXHJcbiAgICBiYXNlOiAnL2RvY3MvJyxcclxuICAgIC8vIFx1N0FEOVx1NzBCOVx1OTE0RFx1N0Y2RVxyXG4gICAgbGFuZzogJ3poLUNOJyxcclxuICAgIHRpdGxlOiAnXHU1MjREXHU3QUVGXHU1MTZDXHU1MTcxXHU1MTg1XHU1QkI5XHU4QkY0XHU2NjBFXHU0RTBFXHU2NENEXHU0RjVDXHU2NTg3XHU2ODYzJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnXHU3QUQ5XHU3MEI5XHU5MTREXHU3RjZFJyxcclxuICAgIHRoZW1lOiBkZWZhdWx0VGhlbWUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRyaWJ1dG9yczogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdmJhcjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTdFQzRcdTRFRjZcdTVFOTMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvY29tcG9uZW50TUQvJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU2M0QyXHU0RUY2XHU5NkM2JyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3BsdWdpbnNNRC8nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3N0YW5kYXJkTUQvJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBzaWRlYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAnL2NvbXBvbmVudE1ELyc6IGdldENvbXBTaWRlQmFyKCksXHJcbiAgICAgICAgICAgICAgICAnL3VpTUQvJzogZ2V0VWlTaWRlQmFyKCksXHJcbiAgICAgICAgICAgICAgICAnL3BsdWdpbnNNRC8nOiBnZXRQbHVnaW5TaWRlQmFyKCksXHJcbiAgICAgICAgICAgICAgICAnL3N0YW5kYXJkTUQvJzogZ2V0U3RhbmRhcmQoKSxcclxuICAgICAgICAgICAgICAgICcvJzogWycnXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICApLFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgICdkZW1vLWNvZGUnLFxyXG4gICAgICAgIGNvbnRhaW5lclBsdWdpbih7fSksXHJcbiAgICAgICAgbnByb2dyZXNzUGx1Z2luKCksXHJcbiAgICAgICAgcmVnaXN0ZXJDb21wb25lbnRzUGx1Z2luKHtcclxuICAgICAgICAgICAgY29tcG9uZW50c0RpcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vY29tcG9uZW50cycpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHNlYXJjaFBsdWdpbih7XHJcbiAgICAgICAgICAgIGxvY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgICcvJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnXHU2NDFDXHU3RDIyJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnL3poLyc6IHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1x1NjQxQ1x1N0QyMicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gZG9jc2VhcmNoUGx1Z2luKHtcclxuICAgICAgICAvLyAgICAgcGxhY2Vob2xkZXI6ICdcdTY0MUNcdTdEMjInLFxyXG4gICAgICAgIC8vIH0pXHJcbiAgICBdLFxyXG4gICAgLy8gY2hhaW5XZWJwYWNrKGNvbmZpZywgaXNTZXJ2ZXIsIGlzQnVpbGQpIHtcclxuICAgIC8vICAgICBjb25maWcucmVzb2x2ZS5leHRlbnNpb25zLmFkZCgnLm1qcycpXHJcblxyXG4gICAgLy8gICAgIGNvbmZpZy5tb2R1bGVcclxuICAgIC8vICAgICAgICAgLnJ1bGUoJ2VzbScpXHJcbiAgICAvLyAgICAgICAgIC50ZXN0KC9cXC5tP2pzeD8kLylcclxuICAgIC8vICAgICAgICAgLnJlc29sdmUuc2V0KCdmdWxseVNwZWNpZmllZCcsIGZhbHNlKVxyXG4gICAgLy8gICAgICAgICAuZW5kKClcclxuICAgIC8vICAgICAgICAgLnR5cGUoJ2phdmFzY3JpcHQvYXV0bycpXHJcbiAgICAvLyB9LFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb21wU2lkZUJhcigpIHsgICAgICAgICAgICAgLy8gXHU3RUM0XHU0RUY2XHU1RTkzXHU2NTg3XHU2ODYzXHU5NkM2XHU1NDA4XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU4ODY4XHU2ODNDJ10sIGNvbGxhcHNpYmxlOiBmYWxzZSx9LFxyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU1MjA2XHU5ODc1J10sIGNvbGxhcHNpYmxlOiBmYWxzZSx9LFxyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU1RjAwXHU1MTczJ10sIGNvbGxhcHNpYmxlOiBmYWxzZSx9LFxyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU4RjkzXHU1MTY1XHU2ODQ2J10sIGNvbGxhcHNpYmxlOiBmYWxzZSx9LFxyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU5MDA5XHU2MkU5XHU1NjY4J10sIGNvbGxhcHNpYmxlOiBmYWxzZSx9LFxyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU1MzU1XHU5MDA5XHU2ODQ2J10sIGNvbGxhcHNpYmxlOiBmYWxzZSx9LFxyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU2NTcwXHU1QjU3XHU4RjkzXHU1MTY1XHU2ODQ2J10sIGNvbGxhcHNpYmxlOiBmYWxzZSx9LFxyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU1MzYxXHU3MjQ3J10sIGNvbGxhcHNpYmxlOiBmYWxzZSx9LFxyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU2ODA3XHU3QjdFJ10sIGNvbGxhcHNpYmxlOiBmYWxzZSx9LFxyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU2M0NGXHU4RkYwXHU1MjE3XHU4ODY4J10sIGNvbGxhcHNpYmxlOiBmYWxzZSx9LCAgICAgICAgXHJcbiAgICAgICAge3RleHQ6ICcnLCBjaGlsZHJlbjogWydcdThENzBcdTlBNkNcdTcwNkYnXSwgY29sbGFwc2libGU6IGZhbHNlLCB9LFxyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU2NUU1XHU1Mzg2J10sIGNvbGxhcHNpYmxlOiBmYWxzZSwgfSxcclxuICAgICAgICB7dGV4dDogJycsIGNoaWxkcmVuOiBbJ1x1NjI5OFx1NTNFMFx1OTc2Mlx1Njc3RiddLCBjb2xsYXBzaWJsZTogZmFsc2UsIH0sXHJcbiAgICAgICAge3RleHQ6ICcnLCBjaGlsZHJlbjogWydcdTZFRDFcdTU3NTcnXSwgY29sbGFwc2libGU6IGZhbHNlLCB9LFxyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU2NTg3XHU1QjU3XHU2M0QwXHU3OTNBJ10sIGNvbGxhcHNpYmxlOiBmYWxzZSwgfSxcclxuICAgICAgICB7dGV4dDogJycsIGNoaWxkcmVuOiBbJ0FsZXJ0XHU4QjY2XHU1NDRBJ10sIGNvbGxhcHNpYmxlOiBmYWxzZSwgfSxcclxuICAgICAgICB7dGV4dDogJycsIGNoaWxkcmVuOiBbJ0RpYWxvZ1x1NUJGOVx1OEJERFx1Njg0NiddLCBjb2xsYXBzaWJsZTogZmFsc2UsIH0sXHJcbiAgICAgICAge3RleHQ6ICcnLCBjaGlsZHJlbjogWydcdTYyQkRcdTVDNDknXSwgY29sbGFwc2libGU6IGZhbHNlLCB9LFxyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU2QzE0XHU2Q0UxXHU3ODZFXHU4QkE0XHU2ODQ2J10sIGNvbGxhcHNpYmxlOiBmYWxzZSwgfSxcclxuICAgICAgICB7dGV4dDogJycsIGNoaWxkcmVuOiBbJ1x1NjVGNlx1OTVGNFx1N0VCRiddLCBjb2xsYXBzaWJsZTogZmFsc2UsIH0sXHJcbiAgICAgICAge3RleHQ6ICcnLCBjaGlsZHJlbjogWydcdTZCNjVcdTlBQTRcdTY3NjEnXSwgY29sbGFwc2libGU6IGZhbHNlLCB9LFxyXG4gICAgXVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdGFuZGFyZCgpIHsgICAgICAgICAgICAgICAgLy8gXHU4OUM0XHU4MzAzXHU2NTg3XHU2ODYzXHU5NkM2XHU1NDA4XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU3RUM0XHU0RUY2XHU1RTkzXHU3RjE2XHU1MTk5XHU4OUM0XHU4MzAzJ10sIGNvbGxhcHNpYmxlOiBmYWxzZSx9LFxyXG4gICAgICAgIHt0ZXh0OiAnJywgY2hpbGRyZW46IFsnXHU0RTNCXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU0RjlEXHU4RDU2XHU4QkY0XHU2NjBFXHU2NTg3XHU2ODYzJ10sIGNvbGxhcHNpYmxlOiBmYWxzZSx9LFxyXG4gICAgXVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQbHVnaW5TaWRlQmFyKCkgeyAgICAgICAgICAgLy8gXHU2M0QyXHU0RUY2XHU5NkM2XHU1NDA4XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1NTdGQVx1Nzg0MFx1NURFNVx1NTE3N1x1NTMwNScsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbJ2NvbW1vbiddLFxyXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTY1NzBcdTdFQzRcdTY0Q0RcdTRGNUMnLFxyXG4gICAgICAgICAgICBsaW5rOiAnL3BsdWdpbnNNRC9hcnJheS5tZCcsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbJ2FycmF5J10sXHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1NkI2M1x1NTIxOVx1NjRDRFx1NEY1QycsXHJcbiAgICAgICAgICAgIGxpbms6ICcvcGx1Z2luc01EL3BhdHRlcm4ubWQnLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogWydwYXR0ZXJuJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTRFMUFcdTUyQTFcdTY0Q0RcdTRGNUMnLFxyXG4gICAgICAgICAgICBsaW5rOiAnL3BsdWdpbnNNRC9idXNpbmVzcy5tZCcsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbJ2J1c2luZXNzJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODQnLFxyXG4gICAgICAgICAgICBsaW5rOiAnL3BsdWdpbnNNRC9kYXRhU3RydWN0Lm1kJyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFsnZGF0YVN0cnVjdCddLFxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VWlTaWRlQmFyKCkgeyAgICAgICAgICAgICAgIC8vIHVpXHU3RUM0XHU0RUY2XHU1RTkzXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1NTdGQVx1Nzg0MFx1NjNBN1x1NEVGNicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTYzRDBcdTc5M0FcdTYzQTdcdTRFRjYnLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTVGMzlcdTY4NDYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvdWlNRC9jb25maXJtLm1kJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1OEY3Qlx1NjNEMFx1NzkzQScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy91aU1EL21lc3NhZ2UubWQnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1x1NEUxQVx1NTJBMVx1N0VDNFx1NEVGNicsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1NTE3MVx1NzUyOFx1OTAwOVx1NEVCQVx1OTAwOVx1OTBFOFx1OTVFOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy91aU1EL3NlbGVjdE1lbWJlci5tZCcsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTRFOENcdTdFRjRcdTc4MDFcdTc1MUZcdTYyMTBcdTMwMDFcdTRFMEJcdThGN0RcdTMwMDFcdTUyQThcdTYwMDFcdTZFMzJcdTY3RDNcdTVFOTVcdTkwRThcdTY1ODdcdTY3MkMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvdWlNRC9xcmNvZGUubWQnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1gsU0FBUyxvQkFBb0I7QUFDblosU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyxnQ0FBZ0M7QUFDekMsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyx1QkFBdUI7QUFDaEMsT0FBTztBQUVQLFNBQVMsWUFBWSxZQUFZO0FBUnNMLElBQU0sMkNBQTJDO0FBU3hRLElBQU0sWUFBWSxXQUFXLHdDQUFlO0FBRTVDLElBQU8saUJBQVE7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUVOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE9BQU87QUFBQSxJQUNIO0FBQUEsTUFDSSxhQUFhO0FBQUEsTUFDYixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsUUFDSjtBQUFBLFVBQ0ksTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNJLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNWO0FBQUEsTUFFSjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ0wsaUJBQWlCLGVBQWU7QUFBQSxRQUNoQyxVQUFVLGFBQWE7QUFBQSxRQUN2QixlQUFlLGlCQUFpQjtBQUFBLFFBQ2hDLGdCQUFnQixZQUFZO0FBQUEsUUFDNUIsS0FBSyxDQUFDLEVBQUU7QUFBQSxNQUNaO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQUEsSUFDbEIsZ0JBQWdCO0FBQUEsSUFDaEIseUJBQXlCO0FBQUEsTUFDckIsZUFBZSxLQUFL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