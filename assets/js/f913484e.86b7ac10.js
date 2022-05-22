"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[167],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(n),k=r,m=p["".concat(o,".").concat(k)]||p[k]||c[k]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5542:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],d={sidebar_position:5},o="Advertising integration",s={unversionedId:"tkg-integration/sdk-basic/sdk-func-ads",id:"version-2.1.0/tkg-integration/sdk-basic/sdk-func-ads",title:"Advertising integration",description:"InterstitialAd",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.1.0/tkg-integration/sdk-basic/sdk-func-ads.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-ads",permalink:"/tkg-sdk-doc-inner/tkg-integration/sdk-basic/sdk-func-ads",tags:[],version:"2.1.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Privacy Compliance",permalink:"/tkg-sdk-doc-inner/tkg-integration/sdk-basic/sdk-func-privacy"},next:{title:"Event Tracking",permalink:"/tkg-sdk-doc-inner/tkg-integration/sdk-basic/sdk-func-event"}},u={},c=[{value:"InterstitialAd",id:"interstitialad",level:2},{value:"ShowInterstitialAd",id:"showinterstitialad",level:3},{value:"IsReadyInterstitialAd",id:"isreadyinterstitialad",level:3},{value:"RewardAd",id:"rewardad",level:2},{value:"PlayRewardAd",id:"playrewardad",level:3},{value:"IsReadyRewardAd",id:"isreadyrewardad",level:3},{value:"Splash Ad",id:"splash-ad",level:2}],p={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"advertising-integration"},"Advertising integration"),(0,l.kt)("h2",{id:"interstitialad"},"InterstitialAd"),(0,l.kt)("h3",{id:"showinterstitialad"},"ShowInterstitialAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Parameters:   "),(0,l.kt)("br",{parentName:"p"}),"\n","void ShowInterstitialAd(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"isRequired"),(0,l.kt)("td",null,"Type"),(0,l.kt)("td",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_adPos"),(0,l.kt)("td",null,"Y"),(0,l.kt)("td",null,"TKGIVAdPositionName"),(0,l.kt)("td",null,"Name of interstitial ad placement.    ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Please define the InterstitialAd POSITION NAME in the [Product Requirements Document] in TKGAdPositionName.cs - TKGIVAdPositionName first.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_callback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action"),(0,l.kt)("td",null,"Callback of ad close and playback fail."))),(0,l.kt)("p",null,"define the InterstitialAd POSITION NAME as follows",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"file: /Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"public enum TKGIVAdPositionName\n{\n    autoShowIntersititial,  \n\n    IV_RetryExp,\n    IV_NextLevelExp,\n\n    //add your game InterstitialAd PositionName\n    \n}\n")),(0,l.kt)("h3",{id:"isreadyinterstitialad"},"IsReadyInterstitialAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();\n")),(0,l.kt)("p",null,"Whether interstitial ad is ready to be played.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Return: "),"  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"true  "),(0,l.kt)("li",{parentName:"ul"},"false")),(0,l.kt)("h2",{id:"rewardad"},"RewardAd"),(0,l.kt)("h3",{id:"playrewardad"},"PlayRewardAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult);\n\nprivate void RewardResult(bool _bReward)\n{\n    Debug.Log("[ToukaSDKDemo] Reward result\uff1a" + _bReward);\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:"),(0,l.kt)("br",{parentName:"p"}),"\n","void ShowRewardAd(TKGRVPositionName _adPos, Action","<","bool",">"," _rewardCallback = null, Action _showFailedCallback = null)"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"isRequired"),(0,l.kt)("td",null,"Type"),(0,l.kt)("td",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_adPos"),(0,l.kt)("td",null,"Y"),(0,l.kt)("td",null,"TKGRVPositionName"),(0,l.kt)("td",null,"Name of reward ad placement.    ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Please define the RewardAd POSITION NAME in the [Product Requirements Document] in TKGAdPositionName.cs - TKGRVPositionName first.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_rewardCallback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action-bool"),(0,l.kt)("td",null,"Callback for reward.  ",(0,l.kt)("br",null),"Recommended developers issue rewards in this callback.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_rewardCallback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action-bool"),(0,l.kt)("td",null,"Callback of ad close and playback fail."))),(0,l.kt)("p",null,"define the RewardAd POSITION NAME as follows",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"file: /Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"public enum TKGRVPositionName\n{\n    RV_GetDoubleCoinExp,\n    RV_GetTipsExp,\n\n    //add your game RewardAd PositionName\n\n}\n")),(0,l.kt)("h3",{id:"isreadyrewardad"},"IsReadyRewardAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();\n")),(0,l.kt)("p",null,"Whether reward ad is ready to be played.",(0,l.kt)("br",{parentName:"p"}),"\n","Return:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"true  "),(0,l.kt)("li",{parentName:"ul"},"false  ")),(0,l.kt)("h2",{id:"splash-ad"},"Splash Ad"),(0,l.kt)("p",null,"To use Splash Ad, you only need to configure TOPON_OriginSplashAdId."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"file\uff1aAssets/TKGSDK/Config/Scripts/AdsSettings/StaticStringsKey_iOS.cs")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"TOPON_OriginSplashAdId\n")))}k.isMDXComponent=!0}}]);