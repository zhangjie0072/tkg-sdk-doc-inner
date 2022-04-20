"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[894],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),k=u(n),d=i,f=k["".concat(l,".").concat(d)]||k[d]||p[d]||o;return n?r.createElement(f,a(a({ref:e},s),{},{components:n})):r.createElement(f,a({ref:e},s))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=k;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9627:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:3},l="\u521d\u59cb\u5316",u={unversionedId:"tkg-integration/sdk-basic/sdk-func-init",id:"tkg-integration/sdk-basic/sdk-func-init",title:"\u521d\u59cb\u5316",description:"\u4f60\u9700\u8981\u5728\u7a0b\u5e8f\u7684\u5165\u53e3\u65b9\u6cd5\u4e2d\u624b\u52a8\u8c03\u7528ToukaSDK\u7684\u521d\u59cb\u5316\u65b9\u6cd5\u4e14\u521d\u59cb\u5316\u65b9\u6cd5\u53ea\u80fd\u8c03\u7528\u4e00\u6b21\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tkg-integration/sdk-basic/sdk-func-init.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-init",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-func-init",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"SDK\u53c2\u6570\u914d\u7f6e",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-config"},next:{title:"\u5408\u89c4\u63a5\u53e3",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-func-privacy"}},s={},p=[],k={toc:p};function d(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u4f60\u9700\u8981\u5728\u7a0b\u5e8f\u7684\u5165\u53e3\u65b9\u6cd5\u4e2d\u624b\u52a8\u8c03\u7528ToukaSDK\u7684\u521d\u59cb\u5316\u65b9\u6cd5\u4e14",(0,o.kt)("font",{color:"ff0000"},"\u521d\u59cb\u5316\u65b9\u6cd5\u53ea\u80fd\u8c03\u7528\u4e00\u6b21"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.InitSDK();\n")),(0,o.kt)("p",null,"\u521d\u59cb\u5316\u65b9\u6cd5\u4f1a\u81ea\u52a8\u521d\u59cb\u5316\u4ee5\u4e0b\u90e8\u5206\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7528\u6237\u534f\u8bae"),(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u540d\u8ba4\u8bc1&\u9632\u6c89\u8ff7"),(0,o.kt)("li",{parentName:"ul"},"\u7edf\u8ba1"),(0,o.kt)("li",{parentName:"ul"},"\u5e7f\u544a")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"void InitSDK(Action _initCallback = null) \n")),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"\u53c2\u6570"),(0,o.kt)("td",null,"\u662f\u5426\u5fc5\u987b"),(0,o.kt)("td",null,"\u7c7b\u578b"),(0,o.kt)("td",null,"\u63cf\u8ff0")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"_initCallback"),(0,o.kt)("td",null,"N"),(0,o.kt)("td",null,"Action"),(0,o.kt)("td",null,"\u521d\u59cb\u5316\u7ed3\u675f\u540e\u56de\u8c03\u3002"))))}d.isMDXComponent=!0}}]);