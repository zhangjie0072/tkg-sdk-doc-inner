---
sidebar_position: 3
---

# Advanced Integration

### Game focus  changed callback   
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
When the ad is displayed, your game is going to lose focus . This method allows you to receive focus changes.

**Parameters:**
void SetGameFocusListener(Action&ltbool&gt _gameFocusAction)
<table>
  <tr>
    <td>Name</td>
    <td>isRequired</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>_gameFocusAction</td>
    <td>Y</td>
    <td>Action&lt;bool&gt;</td>
    <td>
    Pass your callback receiver method.  <br />  
    Your method needs to implement one parameter to receive a boolean value.
    </td>
  </tr>
</table>

### Ratings and reviews
*<font color="#ff0000">Attention: only available on iOS at the moment!</font>*
```c
TKGSDKManager.Instance.Review();  
```
Call this method wherever needed
Presenting the user with a request for an App Store review using Review()  to get feedback on your game.


### More Games
```c
TKGSDKManager.Instance.OpenMoreGame();
```
Go directly to `MoreGameURL`, the developer page in the app store. Show all games provided by developer.
This method is platform independently.


### Custom Remote Config
#### Get Remote Config

- Make changes to your game dynamic by defining remote configs.
- Before you call any of the methods to get the remote parameters, you must pre-define in the config file: ```Asset/TKGSDK/Config/Scripts/TKGParams.cs```.

Pre define step:
step1. Declare an enum for all of your param keys:
```c
public enum TKGParamKey
{
    yourKey1,
    yourKey2,
    yourKey3,
    .
    .
}
```
step2. Add your enum into OnlineParamDic:
<font color="#ff0000">The default values of all customized online parameters are defined here.</font> 

```c
public static class TKGParams
{
    public static readonly Dictionary<string, object> OnlineParamDic = new Dictionary<string, object>()
    {
        // key - default value
        { TKGParamKey.YourKey1.ToString(), 20 },    // int value    // 
        { TKGParamKey.YourKey2.ToString(), "abc" }, // string value
        { TKGParamKey.YourKey3.ToString(), 0 },     // bool value // 1:true 0:false
    };
}

```

step3.  Get remote parameters in your game refer to the method list.
**Methods:**
- Get Int config    
```int onlineIntValue = TKGSDKManager.Instance.GetConfigInt(TKGParamKey.YourKey1);```
- Get String config      
```string onlineStrValue = TKGSDKManager.Instance.GetConfigStr(TKGParamKey.YourKey2);```
- Get Bool config       
```bool onlineBoolValue = TKGSDKManager.Instance.GetConfigBool(TKGParamKey.YourKey3);```


**Parameters:**
<table>
  <tr>
    <td>Name</td>
    <td>isRequired</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>_key</td>
    <td>Y</td>
    <td>TKGParamKey</td>
    <td></td>
  </tr>
</table>


### Auto Interstitial Ad
```c
TKGUtils.ActiveAutoIV(true);  
```
** Parameters **
public static void ActiveAutoIV(bool pActive)

<table>
  <tr>
    <td>Name</td>
    <td>isRequired</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>pActive</td>
    <td>Y</td>
    <td>bool</td>
    <td>

    Config file: Assets/TKGSDK/Config/Scripts/ToukaInnerParams.cs
    
    Built-in Params:   
      - Auto_Show_IVSwitch_OnlineParam
      - Auto_Show_IV_MinTime_OnlineParam
      - Auto_Show_IV_Counts_OnlineParam
  </td>
  </tr>
</table>

### Local Push
Config file: `Assets/TKGSDK/Config/Scripts/StaticOtherConfig.cs`


```c
#region Push Notification

/// <summary>
/// Push Notification Switch
/// true: open push, false：close push
/// </summary>
public const bool LocalNotitcifaction_Switch = false;

/// <summary>
/// Push Content
/// Tomorrow/Days 3, 5 and 7/Days 4, 6 and 8，random one sentence out of three
/// </summary>
public const string MorrowMsgCN = "敌人越来越厉害了，我需要你的帮助!|||今日奖励已经准备好了，上线领取吧！|||家园在你的管理下能扩大多少版图呢？";
public const string Day357MsgCN = "确认过眼神，是今天还没有上线的人|||我们的口号就是开疆扩土搞开发！|||最新玩法已升级，更多挑战等着你！";
public const string Day468MsgCN = "快来打造属于你的王国！|||这么精美的场景设定，是梦想中的国度没错了！|||金币收益已经爆满，上线领取一波？";
#endregion
```