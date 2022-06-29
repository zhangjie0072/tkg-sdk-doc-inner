---
sidebar_position: 6
---

# 事件埋点

## 关卡进度事件
关卡进度事件用于分析用户在游戏中的关卡行为，其中包括关卡开始，关卡结束等事件。       

:::tip
<b><font color="ff0000">关卡类游戏必须调用关卡进度事件。</font></b>      


1、游戏每局开始时调用「关卡开始事件」: ** LevelStart **  
2、游戏每局结束时调用「关卡结束事件 」: ** LevelEnd **
- 当局游戏成功: ** StageSucc **
- 当局游戏失败: ** StageFail **
- 在未结算前，用户选择马上结束当局游戏并重新开始。如在当局游戏内点击重试: ** StageRetry **
- 在未结算前，用户选择马上退出游戏并返回游戏列表界面或主界面。如在当局游戏内点击返回或退出按钮: ** StageBack **

:::

### 关卡开始事件 

```c
TKGSDKManager.Instance.LevelStart(level);    

TKGSDKManager.Instance.LevelStart(1);
TKGSDKManager.Instance.LevelStart("S_1");
```

** 调用时机：** 游戏每局开始时调用。  

** API:  **    
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
    level为正在进行的关卡序号值。      <br />    
    具体值请参看产品需求文档中"关卡进度事件接入"  
    </td>
  </tr>
</table>



### 关卡结束事件 
```c
TKGSDKManager.Instance.LevelEnd(level, StageResult.StageSucc); 

TKGSDKManager.Instance.LevelEnd(1, StageResult.StageSucc);
TKGSDKManager.Instance.LevelEnd("S_1", StageResult.StageFail);
TKGSDKManager.Instance.LevelEnd(3, StageResult.StageRetry);
TKGSDKManager.Instance.LevelEnd("S_2", StageResult.StageBack);
```
** 调用时机：** 游戏每局结束时调用。

** API: **    
bool LevelEnd(int _level, StageResult _stageResult);  
bool LevelEnd(string _level, StageResult _stageResult);

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
    level为正在进行的关卡序号值。          <br />
    具体值请参看产品需求文档中"关卡进度事件接入"  
    </td>
  </tr>
  <tr>
    <td>stageResult</td>
    <td>Y</td>
    <td>StageResult</td>
    <td>
    StageSucc: 当局游戏成功  <br /><br />
    StageFail: 当局游戏失败  <br /><br />
    StageRetry: 在未结算前，用户选择马上结束当局游戏并重新开始。如在当局游戏内点击重试。  <br /><br />
    StageBack: 在未结算前，用户选择马上退出游戏并返回游戏列表界面或主界面。如在当局游戏内点击返回或退出按钮。  <br />
    </td>
  </tr>
</table>



## 游戏事件埋点接口
```c
TKGSDKManager.Instance.LogEvent("click_Skin");
TKGSDKManager.Instance.LogEvent("get_gift", "stage_level", "1");
TKGSDKManager.Instance.LogEvent("stage_end", "stage_level", "1", "stage_status", "success");
```
** API:  **

void LogEvent(string _eventSort)  
void LogEvent(string _eventSort, string _key, string _value)  
void LogEvent(string _eventSort, string _key01, string _value01, string _key02, string _value02)  
void LogEvent(string _eventSort, Dictionary<string, string> _eventDic = null)  
