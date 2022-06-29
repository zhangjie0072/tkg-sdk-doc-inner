"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3196],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=c(n),k=a,f=p["".concat(i,".").concat(k)]||p[k]||s[k]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),l=n(2389),o=n(5979),u=n(6010),i="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,d=e.block,s=e.defaultValue,p=e.values,k=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),m=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(m.length>0)throw new Error('Docusaurus error: Duplicate values "'+m.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(t=null!=s?s:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),h=y.tabGroupChoices,S=y.setTabGroupChoices,T=(0,a.useState)(g),D=T[0],w=T[1],O=[],_=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var K=h[k];null!=K&&K!==D&&v.some((function(e){return e.value===K}))&&w(K)}var N=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==D&&(_(t),w(r),null!=k&&S(k,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:N,onClick:N},l,{className:(0,u.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(b.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function d(e){var t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},5468:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(9877),u=n(8215),i=["components"],c={title:"Download SDK",sidebar_label:"Download SDK",description:"",sidebar_position:2},d=void 0,s={unversionedId:"download",id:"version-2.1.0/download",title:"Download SDK",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.1.0/download.md",sourceDirName:".",slug:"/download",permalink:"/tkg-sdk-doc-inner/2.1.0/download",tags:[],version:"2.1.0",sidebarPosition:2,frontMatter:{title:"Download SDK",sidebar_label:"Download SDK",description:"",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Touka SDK Introduction",permalink:"/tkg-sdk-doc-inner/2.1.0/"},next:{title:"Preparation",permalink:"/tkg-sdk-doc-inner/2.1.0/tkg-integration/sdk-prepare"}},p={},k=[{value:"ToukaSDK v2.1.0               2022-05-23",id:"toukasdk-v210---------------2022-05-23",level:2},{value:"Release Note",id:"release-note",level:3}],f={toc:k};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Get the Touka Android and iOS SDK. "),(0,l.kt)("h2",{id:"toukasdk-v210---------------2022-05-23"},"ToukaSDK v2.1.0               2022-05-23"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"CN SDK",label:"CN SDK",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Android"),(0,l.kt)("td",null," ",(0,l.kt)("a",{href:"https://drive.google.com/file/d/18POtnT0ygm-XK4RjSpmkc1oVGwmkkbgM/view?usp=sharing"},"ToukaSDK_Android_CN_2.1.0_d22df90.zip"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"iOS"),(0,l.kt)("td",null," ",(0,l.kt)("a",{href:"https://drive.google.com/file/d/1BBnfmufqRifw-3bIMdWa84neXUqFsCZa/view?usp=sharing"},"ToukaSDK_iOS_CN_2.1.0_d22df90.zip")))),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Touka SDK Structure")),(0,l.kt)("table",null,(0,l.kt)("th",{colspan:"2",align:"left"},"ToukaSDK_Android"),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ToukaSDK.unitypackage"),(0,l.kt)("td",null,"Core unitypackage")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Touka_AndroidLibs_CN.unitypackage"),(0,l.kt)("td",null,"AndroidLibs CN unitypackage"))),(0,l.kt)("table",null,(0,l.kt)("th",{colspan:"2",align:"left"},"ToukaSDK_iOS"),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ToukaSDK.unitypackage"),(0,l.kt)("td",null,"Core unitypackage")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Touka_iOSLibs_CN.unitypackage"),(0,l.kt)("td",null,"iOSLibs CN unitypackage")))),(0,l.kt)(u.Z,{value:"Global SDK",label:"Global SDK\uff08Open soon\uff09",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Android"),(0,l.kt)("td",null," ToukaSDK_Android_GB_2.1.0_d22df90.zip")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"iOS"),(0,l.kt)("td",null,"ToukaSDK_iOS_GB_2.1.0_d22df90.zip"))),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Touka SDK Structure")),(0,l.kt)("table",null,(0,l.kt)("th",{colspan:"2",align:"left"},"ToukaSDK_Android"),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ToukaSDK.unitypackage"),(0,l.kt)("td",null,"Core unitypackage")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Touka_AndroidLibs_GB.unitypackage"),(0,l.kt)("td",null,"AndroidLibs GB unitypackage"))),(0,l.kt)("table",null,(0,l.kt)("th",{colspan:"2",align:"left"},"ToukaSDK_iOS"),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ToukaSDK.unitypackage"),(0,l.kt)("td",null,"Core unitypackage")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Touka_iOSLibs_GB.unitypackage"),(0,l.kt)("td",null,"iOSLibs GB unitypackage"))))),(0,l.kt)("h3",{id:"release-note"},(0,l.kt)("a",{parentName:"h3",href:"/versions"},"Release Note")))}b.isMDXComponent=!0}}]);