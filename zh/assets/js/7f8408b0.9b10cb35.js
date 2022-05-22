"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[641],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=d(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||l[f]||a;return n?r.createElement(m,o(o({ref:e},p),{},{components:n})):r.createElement(m,o({ref:e},p))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7509:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},c="Android Integration Verification",d={unversionedId:"tkg-integration/sdk-test/sdk-test-android",id:"version-2.0.1/tkg-integration/sdk-test/sdk-test-android",title:"Android Integration Verification",description:"---",source:"@site/versioned_docs/version-2.0.1/tkg-integration/sdk-test/sdk-test-android.md",sourceDirName:"tkg-integration/sdk-test",slug:"/tkg-integration/sdk-test/sdk-test-android",permalink:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-test/sdk-test-android",tags:[],version:"2.0.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"For iOS",permalink:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-projectsettings/sdk-projectsettings-ios"},next:{title:"iOS Integration Verification",permalink:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-test/sdk-test-iOS"}},p={},l=[],u={toc:l};function f(t){var e=t.components,s=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"android-integration-verification"},"Android Integration Verification"),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please make sure your game works on Android and they can get the award after the Reward video."))),(0,a.kt)("p",null,"After you finish integration. You will see the pop-up tips when you visit interface. Such as can get the award after the Reward video. The sample as.    "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Initialize interface",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("img",{alt:"tips03",src:n(5182).Z,width:"300",height:"650"})),(0,a.kt)("li",{parentName:"ol"},"Get the award after the Reward video",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("img",{alt:"tips01",src:n(3989).Z,width:"300",height:"650"}))))}f.isMDXComponent=!0},3989:function(t,e,n){e.Z=n.p+"assets/images/tips01-4551b1c6db6a78c88fda5e5af78f592f.jpg"},5182:function(t,e,n){e.Z=n.p+"assets/images/tips03-8a986c1453a24d23a7befa9a2736a56b.jpg"}}]);