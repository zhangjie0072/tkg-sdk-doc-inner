"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6814],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(l,".").concat(k)]||d[k]||p[k]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),i=n(2389),o=n(5979),u=n(6010),l="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,k=e.groupId,m=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=b[0])?void 0:i.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),y=h.tabGroupChoices,w=h.setTabGroupChoices,T=(0,r.useState)(v),_=T[0],N=T[1],O=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var S=y[k];null!=S&&S!==_&&f.some((function(e){return e.value===S}))&&N(S)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==_&&(D(t),N(a),null!=k&&w(k,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},m)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return O.push(e)},onKeyDown:Z,onFocus:E,onClick:E},i,{className:(0,u.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(b.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function c(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},138:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return k}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(9877),u=n(8215),l=["components"],s={sidebar_position:1},c="SDK\u5bfc\u5165",p={unversionedId:"tkg-integration/sdk-basic/sdk-import",id:"version-2.1.0/tkg-integration/sdk-basic/sdk-import",title:"SDK\u5bfc\u5165",description:"\u8bf7\u5c06\u4e0b\u8f7d\u540e\u7684unitypackage\u5305\u5bfc\u5165\u5de5\u7a0b:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1.0/tkg-integration/sdk-basic/sdk-import.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-import",permalink:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-basic/sdk-import",tags:[],version:"2.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-prepare"},next:{title:"SDK\u53c2\u6570\u914d\u7f6e",permalink:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-basic/sdk-config"}},d={},k=[{value:"\u56fd\u5185 iOS &amp; Android",id:"\u56fd\u5185-ios--android",level:2},{value:"ToukaSDK.unitypackage\uff08\u5171\u7528\uff09",id:"toukasdkunitypackage\u5171\u7528",level:3},{value:"Touka_AndroidLibs_CN.unitypackage",id:"touka_androidlibs_cnunitypackage",level:3},{value:"Touka_iOSLibs_CN.unitypackage",id:"touka_ioslibs_cnunitypackage",level:3},{value:"\u6d77\u5916 iOS &amp; Android",id:"\u6d77\u5916-ios--android",level:2},{value:"ToukaSDK.unitypackage\uff08\u5171\u7528\uff09",id:"toukasdkunitypackage\u5171\u7528-1",level:3},{value:"Touka_AndroidLibs_GB.unitypackage",id:"touka_androidlibs_gbunitypackage",level:3},{value:"Touka_iOSLibs_GB.unitypackage",id:"touka_ioslibs_gbunitypackage",level:3}],m={toc:k};function b(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sdk\u5bfc\u5165"},"SDK\u5bfc\u5165"),(0,i.kt)("p",null,"\u8bf7\u5c06\u4e0b\u8f7d\u540e\u7684unitypackage\u5305\u5bfc\u5165\u5de5\u7a0b:    "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"SDK Demo: ",(0,i.kt)("inlineCode",{parentName:"li"},"Assets/TKGSDK/Demo/ToukaSDKDemo")),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u540c\u4e00\u4e2a\u5e73\u53f0\uff0c\u56fd\u5185\u7248\u672cSDK\u548c\u6d77\u5916\u7248\u672cSDK\u76f8\u5173\u5e93\u4e0d\u53ef\u540c\u5171\u5b58\u3002")))),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"\u56fd\u5185\u7248\u672c",label:"\u56fd\u5185\u7248\u672c",default:!0,mdxType:"TabItem"},(0,i.kt)("h2",{id:"\u56fd\u5185-ios--android"},"\u56fd\u5185 iOS & Android"),(0,i.kt)("h3",{id:"toukasdkunitypackage\u5171\u7528"},"ToukaSDK.unitypackage\uff08\u5171\u7528\uff09"),(0,i.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import01",src:n(5464).Z,width:"300",height:"477"})),(0,i.kt)("h3",{id:"touka_androidlibs_cnunitypackage"},"Touka_AndroidLibs_CN.unitypackage"),(0,i.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import02",src:n(1371).Z,width:"300",height:"420"})),(0,i.kt)("h3",{id:"touka_ioslibs_cnunitypackage"},"Touka_iOSLibs_CN.unitypackage"),(0,i.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import03",src:n(1802).Z,width:"300",height:"461"}))),(0,i.kt)(u.Z,{value:"\u6d77\u5916\u7248\u672c",label:"\u6d77\u5916\u7248\u672c\uff08\u5373\u5c06\u5f00\u653e\uff09",mdxType:"TabItem"},(0,i.kt)("h2",{id:"\u6d77\u5916-ios--android"},"\u6d77\u5916 iOS & Android"),(0,i.kt)("h3",{id:"toukasdkunitypackage\u5171\u7528-1"},"ToukaSDK.unitypackage\uff08\u5171\u7528\uff09"),(0,i.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import01",src:n(5464).Z,width:"300",height:"477"})),(0,i.kt)("h3",{id:"touka_androidlibs_gbunitypackage"},"Touka_AndroidLibs_GB.unitypackage"),(0,i.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import04",src:n(6627).Z,width:"300",height:"461"})),(0,i.kt)("h3",{id:"touka_ioslibs_gbunitypackage"},"Touka_iOSLibs_GB.unitypackage"),(0,i.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import04",src:n(6627).Z,width:"300",height:"461"})))))}b.isMDXComponent=!0},5464:function(e,t,n){t.Z=n.p+"assets/images/import01-e699c91f116615b96f2a31d00f47853a.jpg"},1371:function(e,t,n){t.Z=n.p+"assets/images/import02-8ac17383f8591ee380269e4c4f39680b.jpg"},1802:function(e,t,n){t.Z=n.p+"assets/images/import03-5c5ca6a4dfeb9ee09d72060a8031b7d8.jpeg"},6627:function(e,t,n){t.Z=n.p+"assets/images/import04-cb1b869a01d10b713bc2b29b5b434683.jpeg"}}]);