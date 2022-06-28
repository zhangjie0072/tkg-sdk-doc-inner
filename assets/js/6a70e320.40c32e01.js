"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7011],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),g=i,f=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},639:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={title:"FAQ",sidebar_label:"FAQ",description:"",sidebar_position:96},l=void 0,d={unversionedId:"faq",id:"version-2.2.0/faq",title:"FAQ",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.2.0/faq.md",sourceDirName:".",slug:"/faq",permalink:"/tkg-sdk-doc-inner/faq",tags:[],version:"2.2.0",sidebarPosition:96,frontMatter:{title:"FAQ",sidebar_label:"FAQ",description:"",sidebar_position:96},sidebar:"tutorialSidebar",previous:{title:"Release",permalink:"/tkg-sdk-doc-inner/tkg-integration/sdk-package"}},c={},u=[{value:"iOS",id:"ios",level:2},{value:"1. Legacy Build System Error on Xcode",id:"1-legacy-build-system-error-on-xcode",level:3},{value:"2. Library not loaded:  ....KSAdSDK....  Error on Xcode",id:"2-library-not-loaded--ksadsdk--error-on-xcode",level:3},{value:"3. Required parameter is empty",id:"3-required-parameter-is-empty",level:3},{value:"4. Cannot use &#39;@try&#39; with Objective-C exceptions disabled",id:"4-cannot-use-try-with-objective-c-exceptions-disabled",level:3},{value:"Error\uff1a",id:"error",level:4},{value:"Solutions\uff1a",id:"solutions",level:4},{value:"Android",id:"android",level:2},{value:"Target API Level Error",id:"target-api-level-error",level:3}],p={toc:u};function g(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("h3",{id:"1-legacy-build-system-error-on-xcode"},"1. Legacy Build System Error on Xcode"),(0,o.kt)("p",null,'When exporting the project to Xcode, if you see a building error saying, "The Legacy Build System will be removed in a future release. You can configure the selected build system and this deprecation message in File > Project Settings" please do the following to resolve this issue.   '),(0,o.kt)("p",null,"Step1. Navigate to File, then select Project Settings  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iOS Symbols",src:r(6382).Z,width:"200",height:"491"})," "),(0,o.kt)("p",null,"Step2. Under Shared Project Settings, change the Build System settings to New Build System  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iOS Symbols",src:r(5497).Z,width:"1072",height:"944"})),(0,o.kt)("h3",{id:"2-library-not-loaded--ksadsdk--error-on-xcode"},"2. Library not loaded:  ....KSAdSDK....  Error on Xcode"),(0,o.kt)("p",null,"If you see a building error about KSAdSDK similar to the screenshot below. Please do the ",(0,o.kt)("a",{parentName:"p",href:"/tkg-sdk-doc-inner/tkg-integration/sdk-projectsettings/sdk-projectsettings-ios"},"Add dynamic library for ads sdk")," steps to resolve this issue.\n",(0,o.kt)("img",{alt:"ks_01_error",src:r(9171).Z,width:"1280",height:"471"})),(0,o.kt)("h3",{id:"3-required-parameter-is-empty"},"3. Required parameter is empty"),(0,o.kt)("p",null,"InitSDK will check the necessary parameters. If the following error is reported, please ",(0,o.kt)("a",{parentName:"p",href:"/tkg-sdk-doc-inner/tkg-integration/sdk-basic/sdk-config"},"check the parameter configuration"),".  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"check_config",src:r(9032).Z,width:"600",height:"132"})),(0,o.kt)("h3",{id:"4-cannot-use-try-with-objective-c-exceptions-disabled"},"4. Cannot use '@try' with Objective-C exceptions disabled"),(0,o.kt)("h4",{id:"error"},"Error\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(450).Z,width:"1124",height:"296"})),(0,o.kt)("h4",{id:"solutions"},"Solutions\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(4234).Z,width:"2586",height:"522"})),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("h3",{id:"target-api-level-error"},"Target API Level Error"),(0,o.kt)("p",null,"Please Build Package -> For Android ->",(0,o.kt)("a",{parentName:"p",href:"/tkg-sdk-doc-inner/tkg-integration/sdk-projectsettings/sdk-projectsettings-android"},"Minimun API Level : API Level 22")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Target API Level Error",src:r(2350).Z,width:"2648",height:"538"})))}g.isMDXComponent=!0},9032:function(e,t,r){t.Z=r.p+"assets/images/checkConfig-a987e75c919050260799b183c7711cc2.jpeg"},2350:function(e,t,r){t.Z=r.p+"assets/images/androidtargetapi-b6e3e00af04c9f7886f2c017a5a341bf.jpg"},450:function(e,t,r){t.Z=r.p+"assets/images/errorTry-beff95745f71e5db0208cf93c820a30d.jpg"},4234:function(e,t,r){t.Z=r.p+"assets/images/errorTrySolu-c2654d2926f208b3ba2d0ac47d00fdb5.jpg"},6382:function(e,t,r){t.Z=r.p+"assets/images/legal01-d1dd5d59ea34cbd606b38daf45055566.png"},5497:function(e,t,r){t.Z=r.p+"assets/images/legal02-302b09cdf646929738816eee4076d803.png"},9171:function(e,t,r){t.Z=r.p+"assets/images/ks_01_error-73b0f3df916363731951cddd9d6dbaad.png"}}]);