---
sidebar_position: 6
---

# Event Tracking

## Level Progression Events
Level progression events are used to track and analyze the user's level behavior in the game, Including level start, level end, etc.     

:::tip
<b><font color="ff0000">Attention: if you have ‘Levels’ / 'Quest' / 'Task' or 'Mission' in your game, you must integrate "Progression Events" !</font></b>         
<br />

Level start call: NotifyGameStart    
Level end call: NotifyGameEnd
:::

### NotifyGameStart
```c
TKGSDKManager.Instance.NotifyGameStart(level);
TKGSDKManager.Instance.NotifyGameStart(1);
TKGSDKManager.Instance.NotifyGameStart("S_1");
```
Call `NotifyGameStart` method when starting each level.

API: 
void NotifyGameStart(int level);

<table>
  <tr>
    <td>Name</td>
    <td>isRequired</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>level</td>
    <td>Y</td>
    <td>int/string</td>
    <td>
    _level: current level id.         <br />
    You can get the specific values  「Level Progress Event Access」 on your game product requirement.  
  </td>
  </tr>
</table>


### NotifyGameEnd

```c
TKGSDKManager.Instance.NotifyGameEnd(_level, _isSucc); 
TKGSDKManager.Instance.NotifyGameEnd(1, true); 
TKGSDKManager.Instance.NotifyGameEnd("S_1", false); 
```

Call `NotifyGameEnd` method when finish each level.   

API:
bool NotifyGameEnd(int _level, bool _isSucc);

<table>
  <tr>
    <td>Name</td>
    <td>isRequired</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>_level</td>
    <td>Y</td>
    <td>int/string</td>
    <td>
    _level: current level id.         <br />
    You can get the specific values  「Level Progress Event Access」 on your game product requirement.  
  </td>
  </tr>
  <tr>
    <td>_isSucc</td>
    <td>Y</td>
    <td>bool</td>
    <td>
    true: Level Succ     <br />
    false: Level not Succ
    </td>
  </tr>
</table>


## Custom Event 
```c
TKGSDKManager.Instance.LogEvent("click_Skin");
TKGSDKManager.Instance.LogEvent("get_gift", "stage_level", "1");
TKGSDKManager.Instance.LogEvent("stage_end", "stage_level", "1", "stage_status", "success");
```

API:
- void LogEvent(string _eventSort)
- void LogEvent(string _eventSort, string _key, string _value)
- void  LogEvent(string _eventSort, string _key01, string _value01, string _key02, string _value02)
- void  LogEvent(string _eventSort, Dictionary<string, string> _eventDic = null)