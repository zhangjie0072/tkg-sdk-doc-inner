"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9746:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},u="\u5176\u4ed6\u529f\u80fd",s={unversionedId:"tkg-integration/sdk-other-func",id:"tkg-integration/sdk-other-func",title:"\u5176\u4ed6\u529f\u80fd",description:"\u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tkg-integration/sdk-other-func.md",sourceDirName:"tkg-integration",slug:"/tkg-integration/sdk-other-func",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-other-func",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6\u57cb\u70b9",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-func-event"},next:{title:"\u6784\u5efaAndroid\u5e73\u53f0",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-projectsettings/sdk-projectsettings-android"}},c={},p=[{value:"\u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9",id:"\u6e38\u620f\u5931\u53bb\u83b7\u5f97\u7126\u70b9",level:3},{value:"\u8bc4\u4ef7",id:"\u8bc4\u4ef7",level:3},{value:"\u66f4\u591a\u6e38\u620f",id:"\u66f4\u591a\u6e38\u620f",level:3},{value:"Custom Remote Config",id:"custom-remote-config",level:3},{value:"Get Remote Config",id:"get-remote-config",level:4},{value:"Auto Interstitial Ad",id:"auto-interstitial-ad",level:3},{value:"\u63a8\u9001",id:"\u63a8\u9001",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5176\u4ed6\u529f\u80fd"},"\u5176\u4ed6\u529f\u80fd"),(0,a.kt)("h3",{id:"\u6e38\u620f\u5931\u53bb\u83b7\u5f97\u7126\u70b9"},"\u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetGameFocusListener((_isFocus) => {\n    if (_isFocus)\n    {\n        Debug.Log("set game focus");\n    }\n    else\n    {\n        Debug.Log("lose game focus");\n    }\n});\n')),(0,a.kt)("p",null,"\u5f53\u5e7f\u544a\u5f00\u59cb\u64ad\u653e\u7684\u65f6\u5019\uff0c\u4f60\u7684\u6e38\u620f\u5c06\u4f1a\u5931\u53bb\u7126\u70b9\u3002\u5e7f\u544a\u64ad\u653e\u7ed3\u675f\uff0c\u8fd4\u56de\u6e38\u620f\uff0c\u4f60\u7684\u6e38\u620f\u4f1a\u83b7\u5f97\u7126\u70b9\u3002    "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:"),(0,a.kt)("br",{parentName:"p"}),"\n","void SetGameFocusListener(Action","<","bool",">"," _gameFocusAction)"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_gameFocusAction"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"Action-bool"),(0,a.kt)("td",null,"\u6e38\u620f\u7126\u70b9\u56de\u8c03\uff0ctrue:\u83b7\u5f97\u7126\u70b9\uff1bfalse\uff1a\u5931\u53bb\u7126\u70b9"))),(0,a.kt)("h3",{id:"\u8bc4\u4ef7"},"\u8bc4\u4ef7"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("font",{color:"#ff0000"},"\u6ce8\uff1a\u5f53\u524d\u53ea\u5bf9iOS\u751f\u6548\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.Review();  \n")),(0,a.kt)("p",null,"iOS\u8c03\u7528\u7cfb\u7edf\u8bc4\u4ef7\u5f39\u6846\u3002  "),(0,a.kt)("h3",{id:"\u66f4\u591a\u6e38\u620f"},"\u66f4\u591a\u6e38\u620f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenMoreGame();\n")),(0,a.kt)("p",null,"\u8df3\u8f6c\u82f9\u679c\u5546\u5e97\uff0c\u81ea\u5bb6\u6e38\u620f\u5217\u8868\u9875\u9762\u3002"),(0,a.kt)("h3",{id:"custom-remote-config"},"Custom Remote Config"),(0,a.kt)("h4",{id:"get-remote-config"},"Get Remote Config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make changes to your game dynamic by defining remote configs."),(0,a.kt)("li",{parentName:"ul"},"Before you call any of the methods to get the remote parameters, you must pre-define in the config file: ",(0,a.kt)("inlineCode",{parentName:"li"},"Asset/TKGSDK/Config/Scripts/TKGParams.cs"),".")),(0,a.kt)("p",null,"Pre define step:\nstep1. Declare an enum for all of your param keys:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"public enum TKGParamKey\n{\n    yourKey1,\n    yourKey2,\n    yourKey3,\n    .\n    .\n    .\n}\n")),(0,a.kt)("p",null,"step2. Add your enum into OnlineParamDic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'public static class TKGParams\n{\n    public static readonly Dictionary<string, object> OnlineParamDic = new Dictionary<string, object>()\n    {\n        //{ParamKey, default_value}\n        { TKGParamKey.yourKey1.ToString(), "x" },\n        { TKGParamKey.yourKey2.ToString(), "y" },\n        { TKGParamKey.yourKey3.ToString(), "z" }\n    };\n}\n\n')),(0,a.kt)("p",null,"step3.  Get remote parameters in your game refer to the method list.\n",(0,a.kt)("strong",{parentName:"p"},"Methods:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get Int config\n",(0,a.kt)("inlineCode",{parentName:"li"},'TKGSDKManager.Instance.GetConfigInt("_key",0); ')),(0,a.kt)("li",{parentName:"ul"},"Get Bool config\n",(0,a.kt)("inlineCode",{parentName:"li"},'TKGSDKManager.Instance.GetConfigBool("_key",true);')),(0,a.kt)("li",{parentName:"ul"},"Get String config\n",(0,a.kt)("inlineCode",{parentName:"li"},'TKGSDKManager.Instance.GetConfigStr("_key","s");'))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_key"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_default"),(0,a.kt)("td",null,"N"),(0,a.kt)("td",null,"Action"),(0,a.kt)("td",null,'- GetConfigInt - Default: 0 - GetConfigBool - Default: false - GetConfigStr - Default: ""'))),(0,a.kt)("h3",{id:"auto-interstitial-ad"},"Auto Interstitial Ad"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGUtils.ActiveAutoIV(true);  \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," Parameters "),"\npublic static void ActiveAutoIV(bool pActive)"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"pActive"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"bool"),(0,a.kt)("td",null,"Config file: Assets/TKGSDK/Config/Scripts/ToukaInnerParams.cs Built-in Params: - Auto_Show_IVSwitch_OnlineParam - Auto_Show_IV_MinTime_OnlineParam - Auto_Show_IV_Counts_OnlineParam"))),(0,a.kt)("h3",{id:"\u63a8\u9001"},"\u63a8\u9001"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"TKGSDK/Config/Scripts/StaticOtherConfig.cs"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#region Push Notification\n\n/// <summary>\n/// Push Notification Switch\n/// true: open push, false\uff1aclose push\n/// </summary>\npublic const bool LocalNotitcifaction_Switch = false;\n\n/// <summary>\n/// Push Content\n/// Tomorrow/Days 3, 5 and 7/Days 4, 6 and 8\uff0crandom one sentence out of three\n/// CN\u3001EN\n/// </summary>\npublic const string MorrowMsgCN = "\u654c\u4eba\u8d8a\u6765\u8d8a\u5389\u5bb3\u4e86\uff0c\u6211\u9700\u8981\u4f60\u7684\u5e2e\u52a9!|||\u4eca\u65e5\u5956\u52b1\u5df2\u7ecf\u51c6\u5907\u597d\u4e86\uff0c\u4e0a\u7ebf\u9886\u53d6\u5427\uff01|||\u5bb6\u56ed\u5728\u4f60\u7684\u7ba1\u7406\u4e0b\u80fd\u6269\u5927\u591a\u5c11\u7248\u56fe\u5462\uff1f";\npublic const string Day357MsgCN = "\u786e\u8ba4\u8fc7\u773c\u795e\uff0c\u662f\u4eca\u5929\u8fd8\u6ca1\u6709\u4e0a\u7ebf\u7684\u4eba|||\u6211\u4eec\u7684\u53e3\u53f7\u5c31\u662f\u5f00\u7586\u6269\u571f\u641e\u5f00\u53d1\uff01|||\u6700\u65b0\u73a9\u6cd5\u5df2\u5347\u7ea7\uff0c\u66f4\u591a\u6311\u6218\u7b49\u7740\u4f60\uff01";\npublic const string Day468MsgCN = "\u5feb\u6765\u6253\u9020\u5c5e\u4e8e\u4f60\u7684\u738b\u56fd\uff01|||\u8fd9\u4e48\u7cbe\u7f8e\u7684\u573a\u666f\u8bbe\u5b9a\uff0c\u662f\u68a6\u60f3\u4e2d\u7684\u56fd\u5ea6\u6ca1\u9519\u4e86\uff01|||\u91d1\u5e01\u6536\u76ca\u5df2\u7ecf\u7206\u6ee1\uff0c\u4e0a\u7ebf\u9886\u53d6\u4e00\u6ce2\uff1f";\n\npublic const string MorrowMsgEN = "I keep getting beat by enemies. COME HELP!!|||Come and expand your territory|||I can\'t win this game without your help";\npublic const string Day357MsgEN = "For our homeland, you must defeat the enemy\uff01|||New challenge has been unlocked.|||You are a true warrior who defeated the enemy";\npublic const string Day468MsgEN = "Help me repel the enemy, only you can do it\uff01|||There are too many enemies, what should I do?|||New reward is ready, go online to claim it!";\n\n/// <summary>\n/// Push Time\n///\n/// eg. HourNum = 19\uff1b MinuteNum = 10\uff1b push notification at 19\uff1a10 \n/// </summary>\n///\n// Triggered at the same time point the next day\n// Configurable. If you log in from 10:00 pm to 6:00 am, the next day push time, the default is 22:00 pm\npublic const int MorrowHourNum = 22;\npublic const int MorrowMinuteNum = 0;\n\n// Days 3, 5 and 7 Push Time, hours: minutes\npublic const int Day357HourNum = 19;\npublic const int Day357MinuteNum = 10;\n\n// Days 4, 6 and 8 Push Time, hours: minutes\npublic const int Day468HourNum = 20;\npublic const int Day468MinuteNum = 5;\n\n#endregion\n')))}d.isMDXComponent=!0}}]);