"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7921],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return p}});var l=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=l.createContext({}),o=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},k=function(t){var e=o(t.components);return l.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),c=o(n),p=a,g=c["".concat(d,".").concat(p)]||c[p]||s[p]||r;return n?l.createElement(g,u(u({ref:e},k),{},{components:n})):l.createElement(g,u({ref:e},k))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,u=new Array(r);u[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:a,u[1]=i;for(var o=2;o<r;o++)u[o]=n[o];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9448:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),u=["components"],i={title:"\u57fa\u7840\u63a5\u53e3",sidebar_label:"\u57fa\u7840\u63a5\u53e3",description:"",sidebar_position:97},d=void 0,o={unversionedId:"api/common-api",id:"version-2.1.0/api/common-api",title:"\u57fa\u7840\u63a5\u53e3",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1.0/api/common-api.md",sourceDirName:"api",slug:"/api/common-api",permalink:"/tkg-sdk-doc-inner/zh/2.1.0/api/common-api",tags:[],version:"2.1.0",sidebarPosition:97,frontMatter:{title:"\u57fa\u7840\u63a5\u53e3",sidebar_label:"\u57fa\u7840\u63a5\u53e3",description:"",sidebar_position:97},sidebar:"apiSidebar",next:{title:"\u5176\u4ed6\u529f\u80fd",permalink:"/tkg-sdk-doc-inner/zh/2.1.0/api/advance-api"}},k={},s=[{value:"1 \u521d\u59cb\u5316\u63a5\u5165",id:"1-\u521d\u59cb\u5316\u63a5\u5165",level:2},{value:"1.1 \u521d\u59cb\u5316",id:"11-\u521d\u59cb\u5316",level:3},{value:"1.2 \u8bbe\u7f6e\u65e5\u5fd7\u5f00\u5173",id:"12-\u8bbe\u7f6e\u65e5\u5fd7\u5f00\u5173",level:3},{value:"2 \u5408\u89c4\u63a5\u53e3",id:"2-\u5408\u89c4\u63a5\u53e3",level:2},{value:"2.1 \u9690\u79c1\u94fe\u63a5",id:"21-\u9690\u79c1\u94fe\u63a5",level:3},{value:"2.2 \u7528\u6237\u534f\u8bae",id:"22-\u7528\u6237\u534f\u8bae",level:3},{value:"3 \u5e7f\u544a\u63a5\u5165",id:"3-\u5e7f\u544a\u63a5\u5165",level:2},{value:"3.1 \u63d2\u5c4f\u5e7f\u544a",id:"31-\u63d2\u5c4f\u5e7f\u544a",level:3},{value:"3.1.1 \u793a\u4f8b\u4ee3\u7801",id:"311-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"3.2 \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a",id:"32-\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a",level:3},{value:"3.1.1 \u793a\u4f8b\u4ee3\u7801",id:"311-\u793a\u4f8b\u4ee3\u7801-1",level:4},{value:"3.3 \u5f00\u5c4f\u5e7f\u544a",id:"33-\u5f00\u5c4f\u5e7f\u544a",level:3},{value:"4 \u4e8b\u4ef6\u57cb\u70b9",id:"4-\u4e8b\u4ef6\u57cb\u70b9",level:2},{value:"4.1 \u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6",id:"41-\u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6",level:3},{value:"4.1.1 \u5173\u5361\u5f00\u59cb\u4e8b\u4ef6",id:"411-\u5173\u5361\u5f00\u59cb\u4e8b\u4ef6",level:4},{value:"4.1.2 \u5173\u5361\u7ed3\u675f\u4e8b\u4ef6",id:"412-\u5173\u5361\u7ed3\u675f\u4e8b\u4ef6",level:4},{value:"4.2 \u6e38\u620f\u4e8b\u4ef6\u57cb\u70b9",id:"42-\u6e38\u620f\u4e8b\u4ef6\u57cb\u70b9",level:3},{value:"4.2.1 \u793a\u4f8b\u4ee3\u7801",id:"421-\u793a\u4f8b\u4ee3\u7801",level:4}],c={toc:s};function p(t){var e=t.components,n=(0,a.Z)(t,u);return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u521d\u59cb\u5316\u63a5\u5165"},"1 \u521d\u59cb\u5316\u63a5\u5165"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"InitSDK"),(0,r.kt)("td",null,"(Action _initCallback = null)"),(0,r.kt)("td",null,"SDK\u521d\u59cb\u5316",(0,r.kt)("br",null),"_initCallback: SDK\u521d\u59cb\u5316\u7ed3\u675f\u56de\u8c03")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SetLogEnable"),(0,r.kt)("td",null,"(bool _enable)"),(0,r.kt)("td",null,"SDK\u5185\u90e8\u65e5\u5fd7\u5f00\u5173",(0,r.kt)("br",null),"true: \u5f00 ",(0,r.kt)("br",null),"false: \u5173"))),(0,r.kt)("h3",{id:"11-\u521d\u59cb\u5316"},"1.1 \u521d\u59cb\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.InitSDK(initCallback);\nprivate void initCallback()\n{\n    Debug.Log("init callback");\n}  \n')),(0,r.kt)("h3",{id:"12-\u8bbe\u7f6e\u65e5\u5fd7\u5f00\u5173"},"1.2 \u8bbe\u7f6e\u65e5\u5fd7\u5f00\u5173"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.SetLogEnable(true);\n")),(0,r.kt)("h2",{id:"2-\u5408\u89c4\u63a5\u53e3"},"2 \u5408\u89c4\u63a5\u53e3"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"OpenPrivacyURL"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u9690\u79c1\u94fe\u63a5\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"OpenUserTermURL"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u7528\u6237\u534f\u8bae\u3002"))),(0,r.kt)("h3",{id:"21-\u9690\u79c1\u94fe\u63a5"},"2.1 \u9690\u79c1\u94fe\u63a5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenPrivacyURL();\n")),(0,r.kt)("h3",{id:"22-\u7528\u6237\u534f\u8bae"},"2.2 \u7528\u6237\u534f\u8bae"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenUserTermURL();\n")),(0,r.kt)("h2",{id:"3-\u5e7f\u544a\u63a5\u5165"},"3 \u5e7f\u544a\u63a5\u5165"),(0,r.kt)("h3",{id:"31-\u63d2\u5c4f\u5e7f\u544a"},"3.1 \u63d2\u5c4f\u5e7f\u544a"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ShowInterstitialAd"),(0,r.kt)("td",null,"(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)"),(0,r.kt)("td",null,"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a",(0,r.kt)("br",null),"_adPos: \u63d2\u5c4f\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\uff08\u9700\u81ea\u884c\u5728TKGIVAdPositionName\u4e2d\u6dfb\u52a0\u5b9a\u4e49\uff09",(0,r.kt)("br",null),"_callback: \u63d2\u5c4f\u56de\u8c03\u3002",(0,r.kt)("br",null),"\u5173\u95ed\u63d2\u5c4f\u548c\u63d2\u5c4f\u672a\u6210\u529f\u64ad\u653e\u7b49\u90fd\u4f1a\u56de\u7ed9\u8fd9\u4e2a\u56de\u8c03\u3002",(0,r.kt)("br",null),"_IvType: \u63d2\u5c4f\u9891\u6b21\u63a7\u5236\u7c7b\u578b",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"IsReadyInterstitialAd"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"\u5224\u65ad\u5f53\u524d\u662f\u5426\u5b58\u5728\u53ef\u5c55\u793a\u7684\u63d2\u5c4f\u5e7f\u544a\u3002",(0,r.kt)("br",null),"\u4e00\u822c\u6e38\u620f\u65e0\u9700\u81ea\u884c\u8c03\u7528\u3002"))),(0,r.kt)("h4",{id:"311-\u793a\u4f8b\u4ee3\u7801"},"3.1.1 \u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// show interstitial ad\nTKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);\n\n// is ready interstitial ad\nbool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();\n")),(0,r.kt)("h3",{id:"32-\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"},"3.2 \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ShowRewardAd"),(0,r.kt)("td",null,"(TKGRVPositionName _adPos, Action<bool> _rewardCallback = null, Action _showFailedCallback = null)"),(0,r.kt)("td",null,"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a",(0,r.kt)("br",null),"_adPos: \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\uff08\u9700\u81ea\u884c\u5728TKGRVPositionName\u4e2d\u6dfb\u52a0\u5b9a\u4e49\uff09",(0,r.kt)("br",null),"_rewardCallback: \u6fc0\u52b1\u89c6\u9891\u5956\u52b1\u56de\u8c03\u3002(\u5728\u6b64\u56de\u8c03\u4e2d\u5904\u7406\u4e0b\u53d1\u5956\u52b1)",(0,r.kt)("br",null),"_showFailedCallback: \u6fc0\u52b1\u89c6\u9891\u672a\u6210\u529f\u64ad\u653e\u56de\u8c03",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"IsReadyRewardAd"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"\u5224\u65ad\u5f53\u524d\u662f\u5426\u5b58\u5728\u53ef\u5c55\u793a\u7684\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u3002",(0,r.kt)("br",null),"\u4e00\u822c\u6e38\u620f\u65e0\u9700\u81ea\u884c\u8c03\u7528\u3002"))),(0,r.kt)("h4",{id:"311-\u793a\u4f8b\u4ee3\u7801-1"},"3.1.1 \u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// show reward ad\nTKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult);\n\nprivate void RewardResult(bool _bReward)\n{\n    Debug.Log("[ToukaSDKDemo] Reward result\uff1a" + _bReward);\n}\n\n// is ready reward ad\nbool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();\n')),(0,r.kt)("h3",{id:"33-\u5f00\u5c4f\u5e7f\u544a"},"3.3 \u5f00\u5c4f\u5e7f\u544a"),(0,r.kt)("p",null,"\u63a5\u5165\u5f00\u5c4f\u5e7f\u544a\u65e0\u9700\u505a\u4efb\u4f55\u5904\u7406\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\uff08\u53c2\u6570\u914d\u7f6e\u6587\u4ef6\u4e2d\u5f00\u5c4f\u5e7f\u544a\u4f4did\u914d\u7f6e\u6b63\u786e\uff0c\u5373\u53ef\u5728\u6e38\u620f\u542f\u52a8\u65f6\u6b63\u5e38\u5c55\u793a\u5f00\u5c4f\u5e7f\u544a\u300c ad_splash_id \u300d\uff09\u3002"),(0,r.kt)("h2",{id:"4-\u4e8b\u4ef6\u57cb\u70b9"},"4 \u4e8b\u4ef6\u57cb\u70b9"),(0,r.kt)("h3",{id:"41-\u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6"},"4.1 \u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LevelStart"),(0,r.kt)("td",null,"(int _level)  ",(0,r.kt)("br",null),"(string _level)"),(0,r.kt)("td",null,"\u5173\u5361\u5f00\u59cb\u4e8b\u4ef6",(0,r.kt)("br",null),"_level: \u6b63\u5728\u8fdb\u884c\u7684\u5173\u5361\u5e8f\u53f7\u503c")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LevelEnd"),(0,r.kt)("td",null,"(int _level, StageResult _stageResult)",(0,r.kt)("br",null),"(string _level, StageResult _stageResult)"),(0,r.kt)("td",null,"\u5173\u5361\u7ed3\u675f\u4e8b\u4ef6    ",(0,r.kt)("br",null),"_level: \u6b63\u5728\u8fdb\u884c\u7684\u5173\u5361\u5e8f\u53f7\u503c ",(0,r.kt)("br",null),"_stageResult: \u5173\u5361\u7ed3\u675f\u7ed3\u679c ",(0,r.kt)("br",null),(0,r.kt)("br",null),"StageResult : StageSucc / StageFail / \u6e38\u620f\u5185\u91cd\u8bd5: StageRetry / \u6e38\u620f\u5185\u8fd4\u56de: StageBack"))),(0,r.kt)("h4",{id:"411-\u5173\u5361\u5f00\u59cb\u4e8b\u4ef6"},"4.1.1 \u5173\u5361\u5f00\u59cb\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LevelStart(1);\nTKGSDKManager.Instance.LevelStart("S_1");\n')),(0,r.kt)("h4",{id:"412-\u5173\u5361\u7ed3\u675f\u4e8b\u4ef6"},"4.1.2 \u5173\u5361\u7ed3\u675f\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LevelEnd(1, StageResult.StageSucc);\nTKGSDKManager.Instance.LevelEnd("S_1", StageResult.StageFail);\nTKGSDKManager.Instance.LevelEnd(3, StageResult.StageRetry);\nTKGSDKManager.Instance.LevelEnd("S_2", StageResult.StageBack);\n')),(0,r.kt)("h3",{id:"42-\u6e38\u620f\u4e8b\u4ef6\u57cb\u70b9"},"4.2 \u6e38\u620f\u4e8b\u4ef6\u57cb\u70b9"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LogEvent"),(0,r.kt)("td",null,"(string _eventSort) "),(0,r.kt)("td",null,"\u4e0a\u62a5\u6e38\u620f\u57cb\u70b9\u4e8b\u4ef6\uff08\u53c2\u6570\u4e2a\u6570\u4e0d\u540c\uff09 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LogEvent"),(0,r.kt)("td",null,"(string _eventSort, string _key, string _value) "),(0,r.kt)("td",null,"\u540c\u4e0a ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LogEvent"),(0,r.kt)("td",null,"(string _eventSort, string _key01, string _value01, string _key02, string _value02) "),(0,r.kt)("td",null,"\u540c\u4e0a ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LogEvent"),(0,r.kt)("td",null,"(string _eventSort, Dictionary<string, string> _eventDic = null) "),(0,r.kt)("td",null,"\u540c\u4e0a "))),(0,r.kt)("h4",{id:"421-\u793a\u4f8b\u4ee3\u7801"},"4.2.1 \u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogEvent("click_Skin");\nTKGSDKManager.Instance.LogEvent("get_gift", "stage_level", "1");\nTKGSDKManager.Instance.LogEvent("stage_end", "stage_level", "1", "stage_status", "success");\n')))}p.isMDXComponent=!0}}]);