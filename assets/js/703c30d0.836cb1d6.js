"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[963],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2831:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:3},u="Advanced Integration",s={unversionedId:"tkg-integration/sdk-other-func",id:"tkg-integration/sdk-other-func",title:"Advanced Integration",description:"Game focus  changed callback",source:"@site/docs/tkg-integration/sdk-other-func.md",sourceDirName:"tkg-integration",slug:"/tkg-integration/sdk-other-func",permalink:"/tkg-sdk-doc-inner/tkg-integration/sdk-other-func",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Event Tracking",permalink:"/tkg-sdk-doc-inner/tkg-integration/sdk-basic/sdk-func-event"},next:{title:"For Android",permalink:"/tkg-sdk-doc-inner/tkg-integration/sdk-projectsettings/sdk-projectsettings-android"}},c={},p=[{value:"Game focus  changed callback",id:"game-focus--changed-callback",level:3},{value:"Ratings and reviews",id:"ratings-and-reviews",level:3},{value:"More Games",id:"more-games",level:3},{value:"Custom Remote Config",id:"custom-remote-config",level:3},{value:"Get Remote Config",id:"get-remote-config",level:4},{value:"Auto Interstitial Ad",id:"auto-interstitial-ad",level:3},{value:"Local Push",id:"local-push",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-integration"},"Advanced Integration"),(0,o.kt)("h3",{id:"game-focus--changed-callback"},"Game focus  changed callback"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetGameFocusListener((_isFocus) => {\n    if (_isFocus)\n    {\n        Debug.Log("set game focus");\n    }\n    else\n    {\n        Debug.Log("lose game focus");\n    }\n});\n')),(0,o.kt)("p",null,"When the ad is displayed, your game is going to lose focus . This method allows you to receive focus changes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:"),"\nvoid SetGameFocusListener(Action","<","bool",">"," _gameFocusAction)"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Name"),(0,o.kt)("td",null,"isRequired"),(0,o.kt)("td",null,"Type"),(0,o.kt)("td",null,"Description")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"_gameFocusAction"),(0,o.kt)("td",null,"Y"),(0,o.kt)("td",null,"Action-bool"),(0,o.kt)("td",null,"Pass your callback receiver method.  ",(0,o.kt)("br",null),"Your method needs to implement one parameter to receive a boolean value."))),(0,o.kt)("h3",{id:"ratings-and-reviews"},"Ratings and reviews"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("font",{color:"#ff0000"},"Attention: only available on iOS at the moment!"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.Review();  \n")),(0,o.kt)("p",null,"Call this method wherever needed\nPresenting the user with a request for an App Store review using Review()  to get feedback on your game."),(0,o.kt)("h3",{id:"more-games"},"More Games"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenMoreGame();\n")),(0,o.kt)("p",null,"Go directly to ",(0,o.kt)("inlineCode",{parentName:"p"},"MoreGameURL"),", the developer page in the app store. Show all games provided by developer.\nThis method is platform independently."),(0,o.kt)("h3",{id:"custom-remote-config"},"Custom Remote Config"),(0,o.kt)("h4",{id:"get-remote-config"},"Get Remote Config"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make changes to your game dynamic by defining remote configs."),(0,o.kt)("li",{parentName:"ul"},"Before you call any of the methods to get the remote parameters, you must pre-define in the config file: ",(0,o.kt)("inlineCode",{parentName:"li"},"Asset/TKGSDK/Config/Scripts/TKGParams.cs"),".")),(0,o.kt)("p",null,"Pre define step:\nstep1. Declare an enum for all of your param keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"public enum TKGParamKey\n{\n    yourKey1,\n    yourKey2,\n    yourKey3,\n    .\n    .\n}\n")),(0,o.kt)("p",null,"step2. Add your enum into OnlineParamDic:"),(0,o.kt)("font",{color:"#ff0000"},"The default values of all customized online parameters are defined here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'public static class TKGParams\n{\n    public static readonly Dictionary<string, object> OnlineParamDic = new Dictionary<string, object>()\n    {\n        // key - default value\n        { TKGParamKey.YourKey1.ToString(), 20 },    // int value    // \n        { TKGParamKey.YourKey2.ToString(), "abc" }, // string value\n        { TKGParamKey.YourKey3.ToString(), 0 },     // bool value // 1:true 0:false\n    };\n}\n\n')),(0,o.kt)("p",null,"step3.  Get remote parameters in your game refer to the method list.\n",(0,o.kt)("strong",{parentName:"p"},"Methods:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get Int config",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"int onlineIntValue = TKGSDKManager.Instance.GetConfigInt(TKGParamKey.YourKey1);")),(0,o.kt)("li",{parentName:"ul"},"Get String config",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"string onlineStrValue = TKGSDKManager.Instance.GetConfigStr(TKGParamKey.YourKey2);")),(0,o.kt)("li",{parentName:"ul"},"Get Bool config",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("inlineCode",{parentName:"li"},"bool onlineBoolValue = TKGSDKManager.Instance.GetConfigBool(TKGParamKey.YourKey3);"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Name"),(0,o.kt)("td",null,"isRequired"),(0,o.kt)("td",null,"Type"),(0,o.kt)("td",null,"Description")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"_key"),(0,o.kt)("td",null,"Y"),(0,o.kt)("td",null,"TKGParamKey"),(0,o.kt)("td",null))),(0,o.kt)("h3",{id:"auto-interstitial-ad"},"Auto Interstitial Ad"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"TKGUtils.ActiveAutoIV(true);  \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Parameters "),"\npublic static void ActiveAutoIV(bool pActive)"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Name"),(0,o.kt)("td",null,"isRequired"),(0,o.kt)("td",null,"Type"),(0,o.kt)("td",null,"Description")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"pActive"),(0,o.kt)("td",null,"Y"),(0,o.kt)("td",null,"bool"),(0,o.kt)("td",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Config file: Assets/TKGSDK/Config/Scripts/ToukaInnerParams.cs\n\nBuilt-in Params:   \n  - Auto_Show_IVSwitch_OnlineParam\n  - Auto_Show_IV_MinTime_OnlineParam\n  - Auto_Show_IV_Counts_OnlineParam\n"))))),(0,o.kt)("h3",{id:"local-push"},"Local Push"),(0,o.kt)("p",null,"Config file: ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets/TKGSDK/Config/Scripts/StaticOtherConfig.cs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#region Push Notification\n\n/// <summary>\n/// Push Notification Switch\n/// true: open push, false\uff1aclose push\n/// </summary>\npublic const bool LocalNotitcifaction_Switch = false;\n\n/// <summary>\n/// Push Content\n/// Tomorrow/Days 3, 5 and 7/Days 4, 6 and 8\uff0crandom one sentence out of three\n/// </summary>\npublic const string MorrowMsgCN = "\u654c\u4eba\u8d8a\u6765\u8d8a\u5389\u5bb3\u4e86\uff0c\u6211\u9700\u8981\u4f60\u7684\u5e2e\u52a9!|||\u4eca\u65e5\u5956\u52b1\u5df2\u7ecf\u51c6\u5907\u597d\u4e86\uff0c\u4e0a\u7ebf\u9886\u53d6\u5427\uff01|||\u5bb6\u56ed\u5728\u4f60\u7684\u7ba1\u7406\u4e0b\u80fd\u6269\u5927\u591a\u5c11\u7248\u56fe\u5462\uff1f";\npublic const string Day357MsgCN = "\u786e\u8ba4\u8fc7\u773c\u795e\uff0c\u662f\u4eca\u5929\u8fd8\u6ca1\u6709\u4e0a\u7ebf\u7684\u4eba|||\u6211\u4eec\u7684\u53e3\u53f7\u5c31\u662f\u5f00\u7586\u6269\u571f\u641e\u5f00\u53d1\uff01|||\u6700\u65b0\u73a9\u6cd5\u5df2\u5347\u7ea7\uff0c\u66f4\u591a\u6311\u6218\u7b49\u7740\u4f60\uff01";\npublic const string Day468MsgCN = "\u5feb\u6765\u6253\u9020\u5c5e\u4e8e\u4f60\u7684\u738b\u56fd\uff01|||\u8fd9\u4e48\u7cbe\u7f8e\u7684\u573a\u666f\u8bbe\u5b9a\uff0c\u662f\u68a6\u60f3\u4e2d\u7684\u56fd\u5ea6\u6ca1\u9519\u4e86\uff01|||\u91d1\u5e01\u6536\u76ca\u5df2\u7ecf\u7206\u6ee1\uff0c\u4e0a\u7ebf\u9886\u53d6\u4e00\u6ce2\uff1f";\n#endregion\n')))}m.isMDXComponent=!0}}]);