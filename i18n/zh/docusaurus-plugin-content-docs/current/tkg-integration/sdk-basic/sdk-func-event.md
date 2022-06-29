---
sidebar_position: 6
---

# 事件埋点

## 关卡进度事件
关卡进度事件用于分析用户在游戏中的关卡行为，其中包括关卡开始，关卡结束等事件。       

:::tip
<b><font color="ff0000">关卡类游戏必须调用关卡进度事件。</font></b>      


游戏每局开始时调用「关卡开始事件」: NotifyGameStart    
游戏每局结束时调用「关卡结束事件 」: NotifyGameEnd
:::

### 关卡开始事件 

```c
TKGSDKManager.Instance.NotifyGameStart(level);
TKGSDKManager.Instance.NotifyGameStart(1);
TKGSDKManager.Instance.NotifyGameStart("S_1");
```

调用时机：游戏每局开始时调用。  

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
    level为正在进行的关卡序号值。      <br />    
    具体值请参看产品需求文档中"关卡进度事件接入"  
    </td>
  </tr>
</table>



### 关卡结束事件 
```c
TKGSDKManager.Instance.NotifyGameEnd(level, isSucc); 
TKGSDKManager.Instance.NotifyGameEnd(1, true); 
TKGSDKManager.Instance.NotifyGameEnd("S_1", false); 
```
调用时机：游戏每局结束时调用。

API:
bool NotifyGameEnd(int level, bool isSucc);

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
    <td>isSucc</td>
    <td>Y</td>
    <td>bool</td>
    <td>
    true: 当局游戏成功  <br />
    false: 当局游戏失败
    </td>
  </tr>
</table>



## 游戏事件埋点接口
```c
TKGSDKManager.Instance.LogEvent("click_Skin");
TKGSDKManager.Instance.LogEvent("get_gift", "stage_level", "1");
TKGSDKManager.Instance.LogEvent("stage_end", "stage_level", "1", "stage_status", "success");
```
参数:

void LogEvent(string _eventSort)  
void LogEvent(string _eventSort, string _key, string _value)  
void LogEvent(string _eventSort, string _key01, string _value01, string _key02, string _value02)  
void LogEvent(string _eventSort, Dictionary<string, string> _eventDic = null)  
