---
sidebar_position: 3
---

# Initializing the SDK

:::tip
- The interface of the SDK is mainly in the class TKGSDKManager, and you can call through `TKGSDKManager.Instance`.
- Some auxiliary interfaces are static interfaces in the TKGUtils class.
- No need to care and call others.  
:::

## InitSDK

```c
TKGSDKManager.Instance.InitSDK();
```
You need to manually initialize ToukaSDK in the program entry method and <font color="ff0000">only call it once</font>.

InitSDK method also automatically initialization of the following components:
- Privacy Policy
- Real-name Verification & Anti-Addiction
- Event tracking
- Ad networks

**Parameters:**
```c
void InitSDK(Action _initCallback = null) 
```

<table>
  <tr>
    <td>Name</td>
    <td>isRequired</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>_initCallback</td>
    <td>N</td>
    <td>Action</td>
    <td>Initialization finished callback.</td>
  </tr>
</table>

## SDK Debug Log
sdk log switch control by IsDebugLog.   
Config file: `Assets/TKGSDK/Config/Scripts/StaticOtherConfig.cs`

```
public static bool IsDebugLog = false;
```