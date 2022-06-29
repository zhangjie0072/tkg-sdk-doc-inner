---
title: "基础接口"
sidebar_label: "基础接口"
description: ""
sidebar_position: 97
---

## 1 初始化接入

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>InitSDK</td>
    <td>(Action _initCallback = null)</td>
    <td>SDK初始化<br />
    _initCallback: SDK初始化结束回调
    </td>
  </tr>
</table> 

### 1.1 初始化
```c
TKGSDKManager.Instance.InitSDK(initCallback);
private void initCallback()
{
    Debug.Log("init callback");
}  
```

## 2 合规接口
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>OpenPrivacyURL</td>
    <td>-</td>
    <td>在浏览器中打开隐私链接。
    </td>
  </tr>
  <tr>
    <td>OpenUserTermURL</td>
    <td>-</td>
    <td>在浏览器中打开用户协议。
    </td>
  </tr>
</table>

### 2.1 隐私链接
```c
TKGSDKManager.Instance.OpenPrivacyURL();
```

### 2.2 用户协议
```c
TKGSDKManager.Instance.OpenUserTermURL();
```

## 3 广告接入
### 3.1 插屏广告
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>ShowInterstitialAd</td>
    <td>(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)</td>
    <td>播放插屏广告<br />
    _adPos: 插屏广告点位名称（需自行在TKGIVAdPositionName中添加定义）<br />
    _callback: 插屏回调。<br />
    关闭插屏和插屏未成功播放等都会回给这个回调。<br />
    _IvType: 插屏频次控制类型<br />
    </td>
  </tr>
  <tr>
    <td>IsReadyInterstitialAd</td>
    <td>-</td>
    <td>判断当前是否存在可展示的插屏广告。<br />
    一般游戏无需自行调用。
    </td>
  </tr>
</table>

#### 3.1.1 示例代码
```c
// show interstitial ad
TKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);

// is ready interstitial ad
bool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();
```

### 3.2 激励视频广告
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>ShowRewardAd</td>
    <td>(TKGRVPositionName _adPos, Action&lt;bool&gt; _rewardCallback = null, Action _showFailedCallback = null)</td>
    <td>播放激励视频广告<br />
    _adPos: 激励视频广告点位名称（需自行在TKGRVPositionName中添加定义）<br />
    _rewardCallback: 激励视频奖励回调。(在此回调中处理下发奖励)<br />
    _showFailedCallback: 激励视频未成功播放回调<br />
    </td>
  </tr>
  <tr>
    <td>IsReadyRewardAd</td>
    <td>-</td>
    <td>判断当前是否存在可展示的激励视频广告。<br />
    一般游戏无需自行调用。
    </td>
  </tr>
</table>

#### 3.1.1 示例代码
```c
// show reward ad
TKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult);

private void RewardResult(bool _bReward)
{
    Debug.Log("[ToukaSDKDemo] Reward result：" + _bReward);
}

// is ready reward ad
bool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();
```
### 3.3 开屏广告
使用开屏广告，只需要配置TOPON_OriginSplashAdId为正确的开屏广告id即可。  <br />
配置文件: `Assets/TKGSDK/Config/Scripts/AdsSettings/StaticStringsKey_iOS.cs`

## 4 事件埋点
### 4.1 关卡进度事件

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>NotifyGameStart</td>
    <td>(int _level)  <br />
    (string _level)
    </td>
    <td>关卡开始事件<br />
    _level: 正在进行的关卡序号值
    </td>
  </tr>
  <tr>
    <td>NotifyGameStart</td>
    <td>(int _level, bool _isSucc)<br />
    (string _level, bool _isSucc)
    </td>
    <td>关卡结束事件    <br />
    _level: 正在进行的关卡序号值 <br />
    _isSucc: 关卡结果 <br />
    succ: 成功<br />
    failed: 失败
    
    </td>
  </tr>
</table>

#### 4.1.1 LevelStart
```c
TKGSDKManager.Instance.NotifyGameStart(1);
TKGSDKManager.Instance.NotifyGameStart("S_1");
```

#### 4.1.2 LevelEnd
```c
TKGSDKManager.Instance.NotifyGameEnd(1, true); 
TKGSDKManager.Instance.NotifyGameEnd("S_1", false);  
```

### 4.2 游戏事件埋点

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>LogEvent</td>
    <td>(string _eventSort) </td>
    <td>上报游戏埋点事件（参数个数不同） </td>
  </tr>
  <tr>
    <td>LogEvent</td>
    <td>(string _eventSort, string _key, string _value) </td>
    <td>同上 </td>
  </tr>
  <tr>
    <td>LogEvent</td>
    <td>(string _eventSort, string _key01, string _value01, string _key02, string _value02) </td>
    <td>同上 </td>
  </tr>
  <tr>
    <td>LogEvent</td>
    <td>(string _eventSort, Dictionary&lt;string, string&gt; _eventDic = null) </td>
    <td>同上 </td>
  </tr>
</table>

#### 4.2.1 示例代码
```c
TKGSDKManager.Instance.LogEvent("click_Skin");
TKGSDKManager.Instance.LogEvent("get_gift", "stage_level", "1");
TKGSDKManager.Instance.LogEvent("stage_end", "stage_level", "1", "stage_status", "success");
```

