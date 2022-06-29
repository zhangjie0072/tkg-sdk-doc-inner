---
sidebar_position: 3
---

# 其他功能
### 游戏失去/获得焦点
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
设置游戏失去/获得焦点回调，SDK每次触发到对应情境会给回来回调。  
例如当广告开始播放的时候，你的游戏将会失去焦点。广告播放结束，返回游戏，你的游戏会获得焦点。

** API: **    
void SetGameFocusListener(Action&ltbool&gt _gameFocusAction);

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
    <td>
    Action&lt;bool&gt;
    </td>
    <td>
    游戏焦点回调。     <br />
    true:获得焦点     <br />
    false:失去焦点
    </td>
  </tr>
</table>

### 评价
*<font color="#ff0000">注：当前只对iOS生效。</font>*
```c
TKGSDKManager.Instance.Review();
```
iOS调用系统评价弹框。


### 更多游戏
```c
TKGSDKManager.Instance.OpenMoreGame();
```
跳转参数配置文件中， `tka_url_moregame` 中对应的链接，打开自家Appstore游戏列表页面。

### 获取当前渠道名称
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
    <td>返回当前渠道名称，AppChannel类型 <br />
    <b> AppStore_GB/AppStore_CN/GooglePlay/GW002</b> 等
    </td>
  </tr>
</table> 


###  获取当前用户来源
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
说明：该接口为异步返回。如一次游戏内多次调用该接口情况，只首次有返回值。     
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
      用户来源回调。     <br />
      bool: true 自然用户 false 非自然用户 <br />
      </td>
    </tr>
</table>

### SDK通用回调接口
该接口通过CommonCallbackCode来进行事件的区分。
- 包含对firebase在线参数获取成功/失败的回调。

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
      CommonCallbackCode: 用来区分回调事件名称。     <br />
      FirebaseOnlineParamGet_Succ: firebase在线参数获取成功。  <br /> 
    FirebaseOnlineParamGet_Failed: firebase在线参数获取失败。   <br />    <br /> 
    string: 消息携带参数。
      </td>
    </tr>
</table>


### 自定义在线参数
#### 获取在线参数

- 提供远程参数获取功能，游戏中可动态获取远程参数值。
- 在调用获取方法前，务必在以下配置文件中预先定义好参数名及默认值。

**预定义参数名步骤:**

1. 添加一个枚举成员用于存储你的远程参数名:
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
2. 将所有枚举成员及其默认值添加到OnlineParamDic:
     
<font color="#ff0000">所有自定义的在线参数的默认值都在这里定义。</font> 

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

3. 参考获取远程参数的方法进行调用.

```c
// get online param value
int onlineIntValue = TKGSDKManager.Instance.GetConfigInt(TKGParamKey.RemoveAdsShowCount);
string onlineStrValue = TKGSDKManager.Instance.GetConfigStr(TKGParamKey.LevelList);
bool onlineBoolValue = TKGSDKManager.Instance.GetConfigBool(TKGParamKey.HasBlock);
```



**API:**

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
    <td>
    在线参数key名称 <br />
    请在【产品需求文档】对应需求内获取。
  </td>
  </tr>
</table>


### 自动插屏
 <font color="#ff0000">无特殊需求，接入自动插屏不需要做任何处理。</font>   <br />  
 如果需要结合游戏逻辑控制自动插屏开关，需要自行调用如下接口。
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>ActiveAutoIV</td>
    <td>(bool pActive)</td>
    <td>逻辑控制自动插屏动态开启/关闭 <br />
    总开关为开的情况，调用此接口才生效。 <br />
    总开关默认为关。支持在线参数控制。 <br />
    无特殊需求，不需要手动调用此接口。 <br />
   
    </td>
  </tr>
</table>    

#### 自动插屏参数控制
配置文件：``` Assets/TKGSDK/Config/Scripts/ToukaInnerParams.cs```     
内置参数：（可在线参数控制）
- Auto_Show_IVSwitch_OnlineParam: 自动插屏总开关，默认为关
- Auto_Show_IV_MinTime_OnlineParam: 每次弹出自动插屏的最小时间间隔
- Auto_Show_IV_Counts_OnlineParam: 展示过N次插屏后才可弹出自动插屏(总开关为开的情况下才生效)
#### 示例代码
```c
TKGUtils.ActiveAutoIV(false);    
```

### 推送
推送功能的使用，在下面文件中完成相关配置即可。    
- ** 推送开关 ** : LocalNotitcifaction_Switch
- ** 推送文本内容: ** 可区分中英文，或者都配置为同一种语言文本也可。MorrowMsgCN/MorrowMsgEN等。 <br /><font color="#ff0000"> 如不进行修改则默认推送下边文本内容。</font>
- ** 推送时间:  **默认无需修改。MorrowHourNum/MorrowMinuteNum等。
     


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
```
