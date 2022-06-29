---
title: "其他功能"
sidebar_label: "其他功能"
description: ""
sidebar_position: 98
---

## 1 游戏失去/获得焦点

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>SetGameFocusListener</td>
    <td>(Action&lt;bool&gt; _gameFocusAction)</td>
    <td>设置游戏失去焦点回调<br />  
    true:获得焦点<br />  
    false:失去焦点<br /> <br />  
    每次开始播广告等情况会被触发，可统一处理暂停游戏声音等。
    </td>
  </tr>
</table> 

#### 1.1 示例代码
```c
TKGSDKManager.Instance.SetGameFocusListener((_isFocus) => {
    if (_isFocus)
    {
        Debug.Log("set game focus");
    }
    else
    {
        Debug.Log("lose game focus");
    }
});
```

## 2 评价

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Review</td>
    <td>-</td>
    <td>仅iOS生效。展示iOS系统评价弹框
    </td>
  </tr>
</table> 

#### 2.1 示例代码
```c
TKGSDKManager.Instance.Review();
```
## 3 更多游戏

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>OpenMoreGame</td>
    <td>-</td>
    <td>打开商店自家游戏列表页面。
    </td>
  </tr>
</table> 

#### 3.1 示例代码
```c
TKGSDKManager.Instance.OpenMoreGame();
```

## 4 获取当前渠道名称
<table>
  <tr>
    <td>API</td>
    <td>Return</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>GetChannel</td>
    <td>AppChannel</td>
    <td>获取当前渠道名称，返回类型AppChannel <br />
    AppStore_GB/AppStore_CN/GooglePlay/GW002等
    </td>
  </tr>
</table> 

#### 4.1 示例代码
```c
AppChannel _channel = TKGSDKManager.Instance.GetChannel();
```

## 5 获取当前用户来源
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>SetUserSourceListener</td>
    <td>(Action &lt;bool, string&gt; _userSourceAction)</td>
    <td>设置当前用户来源回调监听   <br />
    _isOrigin: true 自然用户 false 非自然用户 <br />
    该接口为异步返回。如一次游戏内多次调用该接口情况，只首次有返回值。
    </td>
  </tr>
</table> 

#### 5.1 示例代码
```c
TKGSDKManager.Instance.SetUserSourceListener((_isOrigin, _source) =>
{
    if (_isOrigin)
    {
        Debug.Log("is origin user");
    }
    else
    {
        Debug.Log("is not origin user");
    }
});
```

## 6 SDK通用回调接口
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>SetTKGCommonCallback</td>
    <td>(Action&lt;CommonCallbackCode, string&gt; _commonCallback)</td>
    <td>   <br />
    SDK统一事件回调接口。 <br />
    用CommonCallbackCode来进行区分事件名称。
    FirebaseOnlineParamGet_Succ: firebase在线参数获取成功。
    FirebaseOnlineParamGet_Failed: firebase在线参数获取失败。   <br />    <br /> 
    string: 消息携带参数。
    </td>
  </tr>
</table> 

#### 6.1 示例代码
```c
TKGSDKManager.Instance.SetTKGCommonCallback((code, msg) => {
    Debug.Log("common callback, code : " + code + " , msg : " + msg);
});
```

## 7 自定义在线参数

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>GetConfigStr</td>
    <td>(TKGParamKey _key)</td>
    <td>获取string类型的在线参数。 <br />
    需事先在TKGParams中定义在线参数key及默认值
    </td>
  </tr>
  <tr>
    <td>GetConfigInt</td>
    <td>(TKGParamKey _key)</td>
    <td>获取int类型的在线参数。 <br />
    需事先在TKGParams中定义在线参数key及默认值
    </td>
  </tr>
  <tr>
    <td>GetConfigBool</td>
    <td>(TKGParamKey _key)</td>
    <td>获取bool类型的在线参数。 <br />
    需事先在TKGParams中定义在线参数key及默认值<br />
    true: 默认值配1; false: 默认值配0
    </td>
  </tr>
</table> 

#### 7.1 示例代码
```jsx title="Asset/TKGSDK/Config/Scripts/TKGParams.cs"
// set key
public enum TKGParamKey
{
    RemoveAdsShowCount,
    LevelList,
    HasBlock,
    .
    .
}

// add key & default value
public static class TKGParams
{
    public static readonly Dictionary<string, object> OnlineParamDic = new Dictionary<string, object>()
    {
        // key - default value
        { TKGParamKey.RemoveAdsShowCount.ToString(), 4 },    // int value    // 
        { TKGParamKey.LevelList.ToString(), "1,78,72,70,64,65,4,66" }, // string value
        { TKGParamKey.HasBlock.ToString(), 0 },     // bool value // 1:true 0:false
    };
}

```
```c
// get online param value
int onlineIntValue = TKGSDKManager.Instance.GetConfigInt(TKGParamKey.RemoveAdsShowCount);
string onlineStrValue = TKGSDKManager.Instance.GetConfigStr(TKGParamKey.LevelList);
bool onlineBoolValue = TKGSDKManager.Instance.GetConfigBool(TKGParamKey.HasBlock);
```

<!---->
<!--## 8 无需调用API的功能-->
<!---->
<!--### 8.1 自动插屏-->
<!--无特殊需求，接入自动插屏不需要做任何处理。     -->
<!--其他详情请参照 [Docs-集成指引-其他功能-自动插屏](./tkg-integration/sdk-other-func.md#自动插屏)-->

<!--### 8.2 推送-->
<!--推送接入无需进行代码处理。<br />-->
<!--需要根据需求在如下配置文件中配置/修改 推送开关、推送文本内容、推送时间。 <br />-->
<!--配置文件 ```TKGSDK/Config/Scripts/StaticOtherConfig.cs。```-->
<!--- 推送开关: LocalNotitcifaction_Switch-->
<!--- 推送文本: 可区分中英文，或者都配置为同一种语言文本也可。MorrowMsgCN/MorrowMsgEN等-->
<!--- 推送时间: 默认无需修改-->
<!---->
<!--其他详情请参照 [Docs-集成指引-其他功能-推送](./tkg-integration/sdk-other-func.md#推送)-->

