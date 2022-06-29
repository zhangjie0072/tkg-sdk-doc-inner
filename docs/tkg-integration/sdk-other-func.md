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

** API: **    
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
Open the store's own games listing page. The URL key in the configuration file is `tka_url_moregame`

### GetChannel
```c
AppChannel _channel = TKGSDKManager.Instance.GetChannel()；
```
** API: **     
AppChannel GetChannel();
<table>
  <tr>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>AppChannel</td>
    <td>Curr channel name，Type : AppChannel <br />
    <b>AppStore_GB/AppStore_CN/GooglePlay/GW002</b> etc.
    </td>
  </tr>
</table> 


###  SetUserSourceListener
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
** API: **     
void SetUserSourceListener(Action<bool, string> _userSourceAction);    
The interface returns asynchronously. If the interface is called multiple times in a game, only the first time will return a value.     
<table>
  <tr>
      <td>Name</td>
      <td>isRequired</td>
      <td>Type</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>_userSourceAction</td>
      <td>Y</td>
      <td>
      Action&lt;bool, string&gt;
      </td>
      <td>
      User Source callback.     <br />
      bool: true - origin user / false - not origin <br />
      string: source str <br />
      </td>
    </tr>
</table>

### SetTKGCommonCallback

```c
TKGSDKManager.Instance.SetTKGCommonCallback((code, msg) => {
    Debug.Log("common callback, code : " + code + " , msg : " + msg);
});
```
** API: **     
void SetTKGCommonCallback(Action<CommonCallbackCode, string> _commonCallback);    

<table>
  <tr>
      <td>Name</td>
      <td>isRequired</td>
      <td>Type</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>_commonCallback</td>
      <td>Y</td>
      <td>
      Action&lt;CommonCallbackCode, string&gt;
      </td>
      <td>
      Use CommonCallbackCode to distinguish event.     <br />
      <b>FirebaseOnlineParamGet_Succ: </b> firebase remote configuration get succ.  <br /> 
      <b>FirebaseOnlineParamGet_Failed: </b> firebase remote configuration get failed.   <br />    <br /> 
      string: msg.
      </td>
    </tr>
</table>


### Custom Remote Config
#### Get Remote Config

- Make changes to your game dynamic by defining remote configs.
- Before you call any of the methods to get the remote parameters, you must pre-define in the config file.

Pre define step:
step1. Declare an enum for all of your param keys:
```jsx title="Asset/TKGSDK/Config/Scripts/TKGParams.cs"
public enum TKGParamKey
{
    RemoveAdsShowCount,
    LevelList,
    HasBlock,
    .
    .
}
```
step2. Add your enum into OnlineParamDic:
<font color="#ff0000">The default values of all customized online parameters are defined here.</font> 

```jsx title="Asset/TKGSDK/Config/Scripts/TKGParams.cs"
  
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

step3.  Get remote parameters in your game refer to the method list.
```c
// get online param value
int onlineIntValue = TKGSDKManager.Instance.GetConfigInt(TKGParamKey.RemoveAdsShowCount);
string onlineStrValue = TKGSDKManager.Instance.GetConfigStr(TKGParamKey.LevelList);
bool onlineBoolValue = TKGSDKManager.Instance.GetConfigBool(TKGParamKey.HasBlock);
```

**API:**  <br />
int GetConfigInt(string _key);    <br />
string GetConfigStr(string _key);   <br />
bool GetConfigBool(string _key);   <br />
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
    <td>Online param key <br /> Defined in the  your game product requirement.  
    </td>
  </tr>
</table>


### Auto Interstitial Ad
<font color="#ff0000"> If there are no special requirements, You don't need to do anything to access Auto Interstitial Ad.</font>   <br /><br />

But If you need to control the Auto Interstitial Ad switch in combination with the game logic, you need to call the following method.

```c
TKGUtils.ActiveAutoIV(true);  
```
** API ** <br />
public static void ActiveAutoIV(bool pActive);

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
    <td>false: close auto iv <br />
    true: active auto iv <br />
   
    </td>
  </tr>
</table>    

#### Parameter Control
config file：``` Assets/TKGSDK/Config/Scripts/ToukaInnerParams.cs```     
parameter: (control by remote config)
- ** Auto_Show_IVSwitch_OnlineParam: ** Main Switch, default is off.
- ** Auto_Show_IV_MinTime_OnlineParam: ** The minimum time interval for each pop-up automatic interstitial.
- ** Auto_Show_IV_Counts_OnlineParam: ** Show auto iv after N times normal iv. (The switch is ON to take effect )


### Local Push
<font color="#ff0000"> To use Local push function, you only need to complete the following configuration.</font>   <br /><br />
You need to configure/modify the push switch, push text content, and push time in the following configuration files as required.

** Push Switch: **  LocalNotitcifaction_Switch <br />
** Push Content: ** Differentiate between Chinese and English, or both can be configured as the same language text.MorrowMsgCN/MorrowMsgEN etc. <br />
** Push Time: ** No modification required. <br />

```jsx title="TKGSDK/Config/Scripts/StaticOtherConfig.cs"
#region Local Push Notification

/// <summary>
/// Push Notification Switch
/// true: open push, false：close push
/// </summary>
public const bool LocalNotitcifaction_Switch = false;

/// <summary>
/// Push Content
/// Tomorrow/Days 3, 5 and 7/Days 4, 6 and 8，random one sentence out of three
/// CN、EN
/// </summary>
public const string MorrowMsgCN = "今日奖励已经准备好了，上线领取吧！|||超高挑战为你而来，赶紧试试吧！|||来局游戏，开启快乐的一天";
public const string Day357MsgCN = "最新玩法已升级，更多挑战等着你！|||确认过眼神，是今天还没有上线的人|||新的进度等你解锁，不来试试吗？";
public const string Day468MsgCN = "来帮帮我啊！孩子太难了！|||离开很久了，也该回来看看了|||要想生活过的去，来局游戏凑凑趣～";

public const string MorrowMsgEN = "New challenge has been unlocked.|||New reward is ready, go online to claim it!|||Come on, I'm waiting for you.";
public const string Day357MsgEN = "Here are the latest playing methods waiting for you.|||Never say die. Go, go, go!|||Does this challenge be stumped you！";
public const string Day468MsgEN = "I've prepared a big surprise for you. Come have a look！|||Don't forget our appointment！|||Don't forget our appointment！";


#region push time
/// <summary>
/// Push Time
///
/// eg. HourNum = 19； MinuteNum = 10； push notification at 19：10 
/// </summary>
///
// Triggered at the same time point the next day
// Configurable. If you log in from 10:00 pm to 6:00 am, the next day push time, the default is 22:00 pm
public const int MorrowHourNum = 22;
public const int MorrowMinuteNum = 0;

// Days 3, 5 and 7 Push Time, hours: minutes
public const int Day357HourNum = 19;
public const int Day357MinuteNum = 10;

// Days 4, 6 and 8 Push Time, hours: minutes
public const int Day468HourNum = 20;
public const int Day468MinuteNum = 5;
#endregion

#endregion
```