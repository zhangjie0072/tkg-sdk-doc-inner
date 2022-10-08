"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1820],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=i.createContext({}),s=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return i.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(n),k=r,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||a;return n?i.createElement(m,o(o({ref:e},u),{},{components:n})):i.createElement(m,o({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1113:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},c="Initializing the SDK",s={unversionedId:"tkg-integration/sdk-basic/sdk-func-init",id:"version-2.1.0/tkg-integration/sdk-basic/sdk-func-init",title:"Initializing the SDK",description:"- The interface of the SDK is mainly in the class TKGSDKManager, and you can call through TKGSDKManager.Instance.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.1.0/tkg-integration/sdk-basic/sdk-func-init.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-init",permalink:"/tkg-sdk-doc-inner/2.1.0/tkg-integration/sdk-basic/sdk-func-init",tags:[],version:"2.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration SDK",permalink:"/tkg-sdk-doc-inner/2.1.0/tkg-integration/sdk-basic/sdk-config"},next:{title:"Privacy Compliance",permalink:"/tkg-sdk-doc-inner/2.1.0/tkg-integration/sdk-basic/sdk-func-privacy"}},u={},d=[{value:"InitSDK",id:"initsdk",level:2},{value:"SDK Debug Log",id:"sdk-debug-log",level:2}],p={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"initializing-the-sdk"},"Initializing the SDK"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"The interface of the SDK is mainly in the class TKGSDKManager, and you can call through ",(0,a.kt)("inlineCode",{parentName:"li"},"TKGSDKManager.Instance"),"."),(0,a.kt)("li",{parentName:"ul"},"Some auxiliary interfaces are static interfaces in the TKGUtils class."),(0,a.kt)("li",{parentName:"ul"},"No need to care and call others.  ")))),(0,a.kt)("h2",{id:"initsdk"},"InitSDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.InitSDK();\n")),(0,a.kt)("p",null,"You need to manually initialize ToukaSDK in the program entry method and ",(0,a.kt)("font",{color:"ff0000"},"only call it once"),"."),(0,a.kt)("p",null,"InitSDK method also automatically initialization of the following components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Privacy Policy"),(0,a.kt)("li",{parentName:"ul"},"Real-name Verification & Anti-Addiction"),(0,a.kt)("li",{parentName:"ul"},"Event tracking"),(0,a.kt)("li",{parentName:"ul"},"Ad networks")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void InitSDK(Action _initCallback = null) \n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_initCallback"),(0,a.kt)("td",null,"N"),(0,a.kt)("td",null,"Action"),(0,a.kt)("td",null,"Initialization finished callback."))),(0,a.kt)("h2",{id:"sdk-debug-log"},"SDK Debug Log"),(0,a.kt)("p",null,"Set SDK Debug log.   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TKGSDKManager.Instance.SetLogEnable(true);\n")))}k.isMDXComponent=!0}}]);