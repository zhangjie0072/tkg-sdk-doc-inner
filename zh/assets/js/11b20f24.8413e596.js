"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4185],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),f=s(n),p=a,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||l;return n?r.createElement(m,i(i({ref:e},c),{},{components:n})):r.createElement(m,i({ref:e},c))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(7294);function a(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(7462),a=n(7294),l=n(2389),i=n(5979),o=n(6010),u="tabItem_LplD";function s(t){var e,n,l,s=t.lazy,c=t.block,d=t.defaultValue,f=t.values,p=t.groupId,m=t.className,k=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:k.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),b=(0,i.lx)(g,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(e=null!=d?d:null==(n=k.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=k[0])?void 0:l.props.value;if(null!==v&&!g.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),y=h.tabGroupChoices,N=h.setTabGroupChoices,w=(0,a.useState)(v),S=w[0],O=w[1],C=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var D=y[p];null!=D&&D!==S&&g.some((function(t){return t.value===D}))&&O(D)}var j=function(t){var e=t.currentTarget,n=C.indexOf(e),r=g[n].value;r!==S&&(T(e),O(r),null!=p&&N(p,r))},Z=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r=C.indexOf(t.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(t.currentTarget)-1;n=C[a]||C[C.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},m)},g.map((function(t){var e=t.value,n=t.label,l=t.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===e?0:-1,"aria-selected":S===e,key:e,ref:function(t){return C.push(t)},onKeyDown:Z,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":S===e})}),null!=n?n:e)}))),s?(0,a.cloneElement)(k.filter((function(t){return t.props.value===S}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==S})}))))}function c(t){var e=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(e)},t))}},3216:function(t,e,n){n.r(e),n.d(e,{assets:function(){return f},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(9877),o=n(8215),u=["components"],s={sidebar_position:2},c="Configuration SDK",d={unversionedId:"tkg-integration/sdk-basic/sdk-config",id:"version-2.2.0/tkg-integration/sdk-basic/sdk-config",title:"Configuration SDK",description:"Parameter configuration file path :  `Assets/StreamingAssets/Configs/CN|GB `",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2.0/tkg-integration/sdk-basic/sdk-config.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-config",permalink:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-basic/sdk-config",tags:[],version:"2.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installing the SDK",permalink:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-basic/sdk-import"},next:{title:"Initializing the SDK",permalink:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-basic/sdk-func-init"}},f={},p=[{value:"Parameter configuration file",id:"parameter-configuration-file",level:3},{value:"Set Project Settings",id:"set-project-settings",level:3}],m={toc:p};function k(t){var e=t.components,s=(0,a.Z)(t,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"configuration-sdk"},"Configuration SDK"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Parameter configuration file path :  ",(0,l.kt)("inlineCode",{parentName:"p"},"Assets/StreamingAssets/Configs/CN|GB ")," ",(0,l.kt)("br",null),"\nOthers config files would be found under ",(0,l.kt)("inlineCode",{parentName:"p"},"Assets/TKGSDK/Config/Scripts"),".",(0,l.kt)("br",{parentName:"p"}),"\n","The parameter configuration file can be found in the ",(0,l.kt)("a",{parentName:"p",href:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-prepare"},"Get the parameters"),"."),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("font",{color:"ff0000"},"Attentions: Do not overwrite this directory in a later sdk update!"),"    ")))),(0,l.kt)("h3",{id:"parameter-configuration-file"},"Parameter configuration file"),(0,l.kt)("p",null,"Please put the parameter configuration file in the project ",(0,l.kt)("inlineCode",{parentName:"p"},"Assets/StreamingAssets/Configs/CN|GB ")," directory.",(0,l.kt)("br",null),"    "),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"CN SDK",label:"CN SDK",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Platform"),(0,l.kt)("td",null,"FileName")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"iOS CN"),(0,l.kt)("td",null,"tkg_config.plist")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Android CN"),(0,l.kt)("td",null,"tkg_config.properties"))),(0,l.kt)("p",null,"Configured as shown below: ",(0,l.kt)("br",null),(0,l.kt)("br",null),"\n",(0,l.kt)("img",{alt:"config01",src:n(2927).Z,width:"300",height:"312"}))),(0,l.kt)(o.Z,{value:"Global SDK",label:"Global SDK\uff08Open soon\uff09",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Platform"),(0,l.kt)("td",null,"FileName")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"iOS Global"),(0,l.kt)("td",null,"tkg_config.plist")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Android GB"),(0,l.kt)("td",null,"tkg_config.properties"))),(0,l.kt)("p",null,"Configured as shown below: ",(0,l.kt)("br",null),(0,l.kt)("br",null),"\n",(0,l.kt)("img",{alt:"config01",src:n(3971).Z,width:"300",height:"409"})))),(0,l.kt)("h3",{id:"set-project-settings"},"Set Project Settings"),(0,l.kt)("p",null,"You can set ",(0,l.kt)("strong",{parentName:"p"}," Product Name, Bundle ID/ Package Name, Define Symbols ")," automatically by the tool. Or manually set them to the correct values."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"CN SDK",label:"CN SDK",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Platform"),(0,l.kt)("td",null,"Tools Item"),(0,l.kt)("td",null,"SDK Need Define Symbols")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"iOS CN"),(0,l.kt)("td",null,"Settings For IOS CN"),(0,l.kt)("td",null,"-")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Android CN"),(0,l.kt)("td",null,"Settings For Android CN"),(0,l.kt)("td",null,"-"))),(0,l.kt)("p",null,"  Tools as follows.  ",(0,l.kt)("br",null),"\n",(0,l.kt)("img",{alt:"config01",src:n(9108).Z,width:"777",height:"220"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"config04",src:n(6978).Z,width:"458",height:"104"}))),(0,l.kt)(o.Z,{value:"Global SDK",label:"Global SDK\uff08Open soon\uff09",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Platform"),(0,l.kt)("td",null,"Tools Item"),(0,l.kt)("td",null,"SDK Need Define Symbols")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"iOS GB"),(0,l.kt)("td",null,"Settings For IOS GB"),(0,l.kt)("td",null,"AppStore_GB")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Android GB"),(0,l.kt)("td",null,"Settings For Android GB"),(0,l.kt)("td",null,"GooglePlay"))),(0,l.kt)("p",null,"  Tools as follows.    ",(0,l.kt)("br",null),"\n",(0,l.kt)("img",{alt:"config02",src:n(3097).Z,width:"761",height:"213"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"config05",src:n(2797).Z,width:"398",height:"88"})))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"config03",src:n(6648).Z,width:"480",height:"120"})))}k.isMDXComponent=!0},6648:function(t,e,n){e.Z=n.p+"assets/images/config_bundle_id-3ba3af9b1c8f8b17977e1329ba3c13b4.jpg"},2927:function(t,e,n){e.Z=n.p+"assets/images/config_cn-10b1ddfd014a3ea56cea9e1a7eaadbad.jpg"},6978:function(t,e,n){e.Z=n.p+"assets/images/config_cn_definesymbols-8a685865bd744b423acda5fc5982083a.jpg"},9108:function(t,e,n){e.Z=n.p+"assets/images/config_cn_name-610b0051dff20f19a24fc7c934fd173c.jpg"},3971:function(t,e,n){e.Z=n.p+"assets/images/config_gb-1fcb12bd6a67fb4536309f8ccb0319d7.jpg"},2797:function(t,e,n){e.Z=n.p+"assets/images/config_gb_definesymbols-d5660ed7792a7d5b442e356a79a48b88.jpg"},3097:function(t,e,n){e.Z=n.p+"assets/images/config_gb_name-c7bc18b723b3b86e79607a5b2ec55e55.jpg"}}]);