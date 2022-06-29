---
title: "Advanced API"
sidebar_label: "Advanced API"
description: ""
sidebar_position: 98
---

## 1 Game focus changed callback

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>SetGameFocusListener</td>
    <td>(Action&lt;bool&gt; _gameFocusAction)</td>
    <td>Set game lost focus callback<br />  
    true:get focus<br />  
    false:lose focus<br /> <br />  
    When the ad is displayed, your game is going to lose focus. Can pause game sound, etc.。
    </td>
  </tr>
</table> 

#### 1.1 Sample code
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

## 2 Ratings and reviews

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Review</td>
    <td>-</td>
    <td>Open iOS System Popout Review.
    </td>
  </tr>
</table> 

#### 2.1 Sample code
```c
TKGSDKManager.Instance.Review();
```
## 3 More Games

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>OpenMoreGame</td>
    <td>-</td>
    <td>Open the store's own games listing page. <br />
    url define by MoreGameURL.
    </td>
  </tr>
</table> 

#### 3.1 Sample code
```c
TKGSDKManager.Instance.OpenMoreGame();
```

## 4 Custom Remote Config

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>GetConfigStr</td>
    <td>(string _key)</td>
    <td>get string type remote config. <br />
    Need define key and default value first in TKGParams.
    </td>
  </tr>
  <tr>
    <td>GetConfigInt</td>
    <td>(string _key)</td>
    <td>get int type remote config. <br />
    Need define key and default value first in TKGParams.
    </td>
  </tr>
  <tr>
    <td>GetConfigBool</td>
    <td>(string _key)</td>
    <td>get bool type remote config. <br />
    Need define key and default value first in TKGParams. <br />
    true: set default value to 1; false: set default value to 0
    </td>
  </tr>
</table> 

#### 4.1 Sample code
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


## 5 Function without calling API

### 5.1 Auto Interstitial Ad
If there are no special requirements, You don't need to do anything to access Auto Interstitial Ad.     
For details, please refer to [Docs-Integration Guides-Advanced Integration-Auto Interstitial Ad](./tkg-integration/sdk-other-func.md)

### 5.2 Local Push
To use Local push function, you only need to complete the following configuration. <br />
Please configure/modify the push switch, push text content, and push time in the following configuration files as required. <br />
Configuration file:  ```TKGSDK/Config/Scripts/StaticOtherConfig.cs。```
- ** Push Switch: **  LocalNotitcifaction_Switch
- ** Push Content: **  MorrowMsgCN, Day357MsgCN, Day468MsgCN

For details, please refer to [Docs-Integration Guides-Advanced Integration-Local Push](./tkg-integration/sdk-other-func.md)

