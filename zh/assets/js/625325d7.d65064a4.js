"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[208],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,u=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),l=p(n),d=i,g=l["".concat(u,".").concat(d)]||l[d]||k[d]||a;return n?r.createElement(g,o(o({ref:e},s),{},{components:n})):r.createElement(g,o({ref:e},s))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=l;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1445:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return k}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:1},u="SDK\u5bfc\u5165",p={unversionedId:"tkg-integration/sdk-basic/sdk-import",id:"tkg-integration/sdk-basic/sdk-import",title:"SDK\u5bfc\u5165",description:"\u8bf7\u5c06\u4e0b\u8f7d\u540e\u7684unitypackage\u5305\u5bfc\u5165\u5de5\u7a0b:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tkg-integration/sdk-basic/sdk-import.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-import",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-import",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-prepare"},next:{title:"SDK\u53c2\u6570\u914d\u7f6e",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-config"}},s={},k=[{value:"ToukaSDK.unitypackage",id:"toukasdkunitypackage",level:3},{value:"Touka_AndroidPlugins.unitypackage",id:"touka_androidpluginsunitypackage",level:3},{value:"Touka_iOSAnalythics.unitypackage",id:"touka_iosanalythicsunitypackage",level:3},{value:"Touka_iOSAds.unitypackage",id:"touka_iosadsunitypackage",level:3}],l={toc:k};function d(t){var e=t.components,c=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,c,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sdk\u5bfc\u5165"},"SDK\u5bfc\u5165"),(0,a.kt)("p",null,"\u8bf7\u5c06\u4e0b\u8f7d\u540e\u7684unitypackage\u5305\u5bfc\u5165\u5de5\u7a0b:"),(0,a.kt)("h3",{id:"toukasdkunitypackage"},"ToukaSDK.unitypackage"),(0,a.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"import01",src:n(9476).Z,width:"300",height:"690"})),(0,a.kt)("h3",{id:"touka_androidpluginsunitypackage"},"Touka_AndroidPlugins.unitypackage"),(0,a.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"import02",src:n(1929).Z,width:"300",height:"420"})),(0,a.kt)("h3",{id:"touka_iosanalythicsunitypackage"},"Touka_iOSAnalythics.unitypackage"),(0,a.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"import03",src:n(7469).Z,width:"300",height:"461"})),(0,a.kt)("h3",{id:"touka_iosadsunitypackage"},"Touka_iOSAds.unitypackage"),(0,a.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"import04",src:n(1053).Z,width:"300",height:"461"})))}d.isMDXComponent=!0},9476:function(t,e,n){e.Z=n.p+"assets/images/import01-cbab997563cf72847e4bd41b45bc06b9.jpg"},1929:function(t,e,n){e.Z=n.p+"assets/images/import02-8ac17383f8591ee380269e4c4f39680b.jpg"},7469:function(t,e,n){e.Z=n.p+"assets/images/import03-5c5ca6a4dfeb9ee09d72060a8031b7d8.jpeg"},1053:function(t,e,n){e.Z=n.p+"assets/images/import04-cb1b869a01d10b713bc2b29b5b434683.jpeg"}}]);