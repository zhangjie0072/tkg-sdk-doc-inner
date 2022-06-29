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
    <td>打开商店自家游戏列表页面。 <br />
    链接通过MoreGameURL定义。
    </td>
  </tr>
</table> 

#### 3.1 示例代码
```c
TKGSDKManager.Instance.OpenMoreGame();
```

## 4 自定义在线参数

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>GetConfigStr</td>
    <td>(string _key)</td>
    <td>获取string类型的在线参数。 <br />
    需事先在TKGParams中定义在线参数key及默认值
    </td>
  </tr>
  <tr>
    <td>GetConfigInt</td>
    <td>(string _key)</td>
    <td>获取int类型的在线参数。 <br />
    需事先在TKGParams中定义在线参数key及默认值
    </td>
  </tr>
  <tr>
    <td>GetConfigBool</td>
    <td>(string _key)</td>
    <td>获取bool类型的在线参数。 <br />
    需事先在TKGParams中定义在线参数key及默认值<br />
    true: 默认值配1; false: 默认值配0
    </td>
  </tr>
</table> 

#### 4.1 示例代码
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


## 5 无需调用API的功能

### 5.1 自动插屏
无特殊需求，接入自动插屏不需要做任何处理。     
其他详情请参照 [Docs-集成指引-其他功能-自动插屏](./tkg-integration/sdk-other-func.md#自动插屏)

### 5.2 推送
推送接入无需进行代码处理。<br />
需要根据需求在如下配置文件中配置/修改 推送开关、推送文本内容、推送时间。 <br />
配置文件 ```TKGSDK/Config/Scripts/StaticOtherConfig.cs。```
- 推送开关: LocalNotitcifaction_Switch
- 推送文本: MorrowMsgCN、Day357MsgCN、Day468MsgCN

其他详情请参照 [Docs-集成指引-其他功能-推送](./tkg-integration/sdk-other-func.md#推送)

