---
sidebar_position: 3
---

# 初始化

:::tip
- SDK的接口主要在TKGSDKManager这个类里，需要通过 `TKGSDKManager.Instance` 获取单例调用。
- 一些辅助性的接口在TKGUtils这个类里，都是静态接口。
- 其他内容都无需关心及调用。
:::

## InitSDK

```c
TKGSDKManager.Instance.InitSDK();
```

你需要在程序的入口方法中手动调用ToukaSDK的初始化方法且<font color="ff0000">初始化方法只能调用一次</font>。

初始化方法会自动初始化以下部分：
- 用户协议
- 实名认证&防沉迷
- 统计
- 广告

**参数:**
```c
void InitSDK(Action _initCallback = null) 
```

<table>
  <tr>
    <td>参数</td>
    <td>是否必须</td>
    <td>类型</td>
    <td>描述</td>
  </tr>
  <tr>
    <td>_initCallback</td>
    <td>N</td>
    <td>Action</td>
    <td>初始化结束后回调。</td>
  </tr>
</table>


## SDK Debug Log
SDK日志开关通过 IsDebugLog 控制.     
路径: `Assets/TKGSDK/Config/Scripts/StaticOtherConfig.cs`

```
public static bool IsDebugLog = false;
```