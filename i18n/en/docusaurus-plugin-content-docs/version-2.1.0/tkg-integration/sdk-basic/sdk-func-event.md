---
sidebar_position: 6
---

# Event Tracking

## Level Progression Events
Level progression events are used to track and analyze the user's level behavior in the game, Including level start, level end, etc.     

:::tip
<b><font color="ff0000">Attention: if you have ‘Levels’ / 'Quest' / 'Task' or 'Mission' in your game, you must integrate "Progression Events" !</font></b>         
<br />

Level Start Call: ** LevelStart **   
Level End Call: ** LevelEnd **
- Level has ended with succ : ** StageSucc **
- Level has ended with failed: ** StageFail **
- Before level end, restart level. eg. click Retry button in the current level: ** StageRetry **
- Before level end, back to home page or level list. For example click back or quit buttons in current level: ** StageBack **
:::

### LevelStart 
```c
TKGSDKManager.Instance.LevelStart(level);

TKGSDKManager.Instance.LevelStart(1);
TKGSDKManager.Instance.LevelStart("S_1");
```
Call `LevelStart` method when starting each level.

API: <br />
void LevelStart(int level);     
void LevelStart(string level);

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
    level: current level id.         <br />
    You can get the specific values  「Level Progress Event Access」 on your game product requirement.  
  </td>
  </tr>
</table>


### LevelEnd

```c
TKGSDKManager.Instance.LevelEnd(level, StageResult.StageSucc); 

TKGSDKManager.Instance.LevelEnd(1, StageResult.StageSucc);
TKGSDKManager.Instance.LevelEnd("S_1", StageResult.StageFail);
TKGSDKManager.Instance.LevelEnd(3, StageResult.StageRetry);
TKGSDKManager.Instance.LevelEnd("S_2", StageResult.StageBack);
```

Call `LevelEnd` method when finish each level.   

API:
bool LevelEnd(int level, StageResult stageResult);
bool LevelEnd(string level, StageResult stageResult);

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
    level: current level id.         <br />
    You can get the specific values  「Level Progress Event Access」 on your game product requirement.  
  </td>
  </tr>
  <tr>
    <td>stageResult</td>
    <td>Y</td>
    <td>StageResult</td>
    <td>
    <b>StageSucc:</b> Level has ended with succ   <br />
    <b>StageFail:</b> Level has ended with failed  <br />
    <b>StageRetry:</b> Before level end, restart level. eg. click Retry button in the current level <br />
    <b>StageBack:</b> Before level end, back to home page or level list. For example click back or quit buttons in current level
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