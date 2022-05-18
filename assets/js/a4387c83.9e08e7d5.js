"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[508],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=u(n),k=a,p=g["".concat(s,".").concat(k)]||g[k]||d[k]||i;return n?r.createElement(p,l(l({ref:t},c),{},{components:n})):r.createElement(p,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1347:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:6},s="Event Tracking",u={unversionedId:"tkg-integration/sdk-basic/sdk-func-event",id:"tkg-integration/sdk-basic/sdk-func-event",title:"Event Tracking",description:"Progression Events",source:"@site/docs/tkg-integration/sdk-basic/sdk-func-event.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-event",permalink:"/tkg-sdk-doc/tkg-integration/sdk-basic/sdk-func-event",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Advertising integration",permalink:"/tkg-sdk-doc/tkg-integration/sdk-basic/sdk-func-ads"},next:{title:"Advanced Integration",permalink:"/tkg-sdk-doc/tkg-integration/sdk-other-func"}},c={},d=[{value:"Progression Events",id:"progression-events",level:2},{value:"NotifyGameStart",id:"notifygamestart",level:3},{value:"NotifyGameEnd",id:"notifygameend",level:3},{value:"Custom Event",id:"custom-event",level:2}],g={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"event-tracking"},"Event Tracking"),(0,i.kt)("h2",{id:"progression-events"},"Progression Events"),(0,i.kt)("p",null,"Use this event to track when players start and finish levels in your game.   \u201cProgress\u201d could mean things like levelling up, completing quests, completing missions, or completing milestones."),(0,i.kt)("font",{color:"ff0000"},'Attention: if you have levels and quests in your game, you must integrate "Progression Events"!'),(0,i.kt)("h3",{id:"notifygamestart"},"NotifyGameStart"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.NotifyGameStart(1);\nTKGSDKManager.Instance.NotifyGameStart("s_1");\n')),(0,i.kt)("p",null,"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"NotifyGameStart")," method when starting each level."),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Name"),(0,i.kt)("td",null,"isRequired"),(0,i.kt)("td",null,"Type"),(0,i.kt)("td",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_level"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"int/string"),(0,i.kt)("td",null,"Number of levels\uff0cN=1,2,3\u2026\u2026"))),(0,i.kt)("h3",{id:"notifygameend"},"NotifyGameEnd"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.NotifyGameEnd(1, true);   \nTKGSDKManager.Instance.NotifyGameEnd(2, false);  \nTKGSDKManager.Instance.NotifyGameEnd("s_1", true);\n')),(0,i.kt)("p",null,"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"NotifyGameEnd")," method when finish each level."),(0,i.kt)("p",null,"Parameters:\nbool NotifyGameEnd(int _level, bool _win)"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Name"),(0,i.kt)("td",null,"isRequired"),(0,i.kt)("td",null,"Type"),(0,i.kt)("td",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_level"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"int/string"),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_win"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"bool"),(0,i.kt)("td",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Also support passing true/false, used to mark level success and failure. \n"))))),(0,i.kt)("h2",{id:"custom-event"},"Custom Event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogEvent("logEvent01");\nTKGSDKManager.Instance.LogEvent("logEvent02", "key02", "value02");\nTKGSDKManager.Instance.LogEvent("logEvent03", "key03-1", "value03-1", "key03-2", "value03-2");\n')),(0,i.kt)("p",null,"Parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"void LogEvent(string _eventSort)"),(0,i.kt)("li",{parentName:"ul"},"void LogEvent(string _eventSort, string _key, string _value)"),(0,i.kt)("li",{parentName:"ul"},"void  LogEvent(string _eventSort, string _key01, string _value01, string _key02, string _value02)"),(0,i.kt)("li",{parentName:"ul"},"void  LogEvent(string _eventSort, Dictionary<string, string> _eventDic = null)")))}k.isMDXComponent=!0}}]);