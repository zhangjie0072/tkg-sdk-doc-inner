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
当广告开始播放的时候，你的游戏将会失去焦点。广告播放结束，返回游戏，你的游戏会获得焦点。

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
    <td>Action-bool</td>
    <td>
    游戏焦点回调。     <br />
    true:获得焦点 <br />
    false：失去焦点
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
跳转 `MoreGameURL` 中配置的链接，自家Appstore游戏列表页面。


### 自定义在线参数
#### 获取在线参数

- 提供远程参数获取功能，游戏中可动态获取远程参数值.
- 在调用获取方法前，务必在以下配置文件中预先定义好参数名.

  ```Asset/TKGSDK/Config/Scripts/TKGParams.cs```

**预定义参数名步骤:**

1. 添加一个枚举成员用于存储你的远程参数名:
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
2. 将所有枚举成员及其默认值添加到OnlineParamDic:
     
<font color="#ff0000">所有自定义的在线参数的默认值都在这里定义。</font> 

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

3. 参考获取远程参数的方法进行调用.

**方法:**
- 获取Int类型参数    
```int onlineIntValue = TKGSDKManager.Instance.GetConfigInt(TKGParamKey.YourKey1);```
- 获取字符串类型参数    
```string onlineStrValue = TKGSDKManager.Instance.GetConfigStr(TKGParamKey.YourKey2);```
- 获取Bool类型参数    
```bool onlineBoolValue = TKGSDKManager.Instance.GetConfigBool(TKGParamKey.YourKey3);```


**方法参数:**

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


### 自动插屏
```c
TKGUtils.ActiveAutoIV(true);
```
功能描述：控制自动插屏是否开启。

**方法参数**

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
    开关配置文件: Assets/TKGSDK/Config/Scripts/ToukaInnerParams.cs <br />
        <br />
    内置参数:   <br />
      - Auto_Show_IVSwitch_OnlineParam  <br />
      - Auto_Show_IV_MinTime_OnlineParam    <br />
      - Auto_Show_IV_Counts_OnlineParam   <br />
    </td>
  </tr>
</table>

### 推送
配置文件 `TKGSDK/Config/Scripts/StaticOtherConfig.cs`。

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
