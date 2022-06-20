"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[856],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),i=n(2389),o=n(5979),l=n(6010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=b[0])?void 0:i.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),y=h.tabGroupChoices,_=h.setTabGroupChoices,N=(0,r.useState)(v),w=N[0],T=N[1],O=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=y[m];null!=S&&S!==w&&g.some((function(e){return e.value===S}))&&T(S)}var x=function(e){var t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==w&&(D(t),T(a),null!=m&&_(m,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},9991:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(9877),l=n(8215),u=["components"],s={sidebar_position:1},c="Installing the SDK",p={unversionedId:"tkg-integration/sdk-basic/sdk-import",id:"version-2.2.0/tkg-integration/sdk-basic/sdk-import",title:"Installing the SDK",description:"Please import the unitypackage to the project.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2.0/tkg-integration/sdk-basic/sdk-import.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-import",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-import",tags:[],version:"2.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Preparation",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-prepare"},next:{title:"Configuration SDK",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-config"}},d={},m=[{value:"CN iOS &amp; Android",id:"cn-ios--android",level:2},{value:"ToukaSDK.unitypackage\uff08generic\uff09",id:"toukasdkunitypackagegeneric",level:3},{value:"Touka_AndroidLibs_CN.unitypackage",id:"touka_androidlibs_cnunitypackage",level:3},{value:"Touka_iOSLibs_CN.unitypackage",id:"touka_ioslibs_cnunitypackage",level:3},{value:"Global iOS &amp; Android",id:"global-ios--android",level:2},{value:"ToukaSDK.unitypackage\uff08generic\uff09",id:"toukasdkunitypackagegeneric-1",level:3},{value:"Touka_AndroidLibs_GB.unitypackage",id:"touka_androidlibs_gbunitypackage",level:3},{value:"Touka_iOSLibs_GB.unitypackage",id:"touka_ioslibs_gbunitypackage",level:3}],k={toc:m};function b(e){var t=e.components,s=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-the-sdk"},"Installing the SDK"),(0,i.kt)("p",null,"Please import the unitypackage to the project."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"SDK Demo: ",(0,i.kt)("inlineCode",{parentName:"li"},"Assets/TKGSDK/Demo/ToukaSDKDemo")),(0,i.kt)("li",{parentName:"ul"},"For the same platform, CN SDK and Global SDK related libraries cannot coexist.")))),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"CN SDK",label:"CN SDK",default:!0,mdxType:"TabItem"},(0,i.kt)("h2",{id:"cn-ios--android"},"CN iOS & Android"),(0,i.kt)("h3",{id:"toukasdkunitypackagegeneric"},"ToukaSDK.unitypackage\uff08generic\uff09"),(0,i.kt)("p",null,"example:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import01",src:n(6980).Z,width:"400",height:"510"})),(0,i.kt)("h3",{id:"touka_androidlibs_cnunitypackage"},"Touka_AndroidLibs_CN.unitypackage"),(0,i.kt)("p",null,"example:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import02",src:n(1647).Z,width:"400",height:"508"})),(0,i.kt)("h3",{id:"touka_ioslibs_cnunitypackage"},"Touka_iOSLibs_CN.unitypackage"),(0,i.kt)("p",null,"example:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import03",src:n(1338).Z,width:"400",height:"414"}))),(0,i.kt)(l.Z,{value:"Global SDK",label:"Global SDK\uff08Open soon\uff09",mdxType:"TabItem"},(0,i.kt)("h2",{id:"global-ios--android"},"Global iOS & Android"),(0,i.kt)("h3",{id:"toukasdkunitypackagegeneric-1"},"ToukaSDK.unitypackage\uff08generic\uff09"),(0,i.kt)("p",null,"example:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import01",src:n(5464).Z,width:"300",height:"477"})),(0,i.kt)("h3",{id:"touka_androidlibs_gbunitypackage"},"Touka_AndroidLibs_GB.unitypackage"),(0,i.kt)("p",null,"example:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import04",src:n(1802).Z,width:"300",height:"461"})),(0,i.kt)("h3",{id:"touka_ioslibs_gbunitypackage"},"Touka_iOSLibs_GB.unitypackage"),(0,i.kt)("p",null,"example:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import04",src:n(6627).Z,width:"300",height:"461"})))))}b.isMDXComponent=!0},5464:function(e,t,n){t.Z=n.p+"assets/images/import01-e699c91f116615b96f2a31d00f47853a.jpg"},1802:function(e,t,n){t.Z=n.p+"assets/images/import03-5c5ca6a4dfeb9ee09d72060a8031b7d8.jpeg"},6627:function(e,t,n){t.Z=n.p+"assets/images/import04-cb1b869a01d10b713bc2b29b5b434683.jpeg"},6980:function(e,t,n){t.Z=n.p+"assets/images/import_2.1.0_01-417efc0b162094b9dc0f397ead7954cb.jpg"},1647:function(e,t,n){t.Z=n.p+"assets/images/import_2.1.0_02-bbe9364454c2843ea3dc1837d3ed08e8.jpg"},1338:function(e,t,n){t.Z=n.p+"assets/images/import_2.1.0_03-ce7b40cbaf46de291a5524dbe3c26e2e.jpg"}}]);