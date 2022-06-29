---
title: "Basic API"
sidebar_label: "Basic API"
description: ""
sidebar_position: 97
---

## 1 Init

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>InitSDK</td>
    <td>(Action _initCallback = null)</td>
    <td>SDK Init<br />
    _initCallback: Initialization finished callback.
    </td>
  </tr>
  <tr>
    <td>SetLogEnable</td>
    <td>(bool _enable)</td>
    <td>Set up the output of the debug log<br />
    true: open <br />
    false: close
    </td>
  </tr>
</table> 

### 1.1 InitSDK
```c
TKGSDKManager.Instance.InitSDK(initCallback);
private void initCallback()
{
    Debug.Log("init callback");
}  
```
### 1.2 SetLogEnable
```c
TKGSDKManager.Instance.SetLogEnable(true);
```

## 2 Compliance Popup
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>OpenPolicyPop</td>
    <td>-</td>
    <td>Opens a Compliance popup in the current process
    </td>
  </tr>
</table>

### 2.1 Sample code
```c
TKGSDKManager.Instance.OpenPolicyPop();
```

## 3 Advertising integration
### 3.1 InterstitialAd
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>ShowInterstitialAd</td>
    <td>(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)</td>
    <td>Show Interstitial Ad<br /><br />
    _adPos: Name of interstitial ad placement.（Please define the TKGIVAdPositionName first）<br />
    _callback: Callback of ad close and playback fail.<br />
    _IvType: Type of frequency control<br />
    </td>
  </tr>
  <tr>
    <td>IsReadyInterstitialAd</td>
    <td>-</td>
    <td>Whether InterstitialAd can be displayed.<br />
    General games do not need to call by themselves.
    </td>
  </tr>
</table>

#### 3.1.1 Sample code
```c
// show interstitial ad
TKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);

// is ready interstitial ad
bool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();
```

### 3.2 RewardAd
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>ShowRewardAd</td>
    <td>(TKGRVPositionName _adPos, Action&lt;bool&gt; _rewardCallback = null, Action _showFailedCallback = null)</td>
    <td>Show RewardAd<br /><br />
    _adPos: Name of reward ad placement.（Please define the TKGRVPositionName first）<br />
    _rewardCallback: Callback for reward.(Recommended developers issue rewards in this callback.)<br />
    _showFailedCallback: Callback of ad close and playback fail.<br />
    </td>
  </tr>
  <tr>
    <td>IsReadyRewardAd</td>
    <td>-</td>
    <td>Whether RewardAd can be displayed.<br />
    General games do not need to call by themselves.
    </td>
  </tr>
</table>

#### 3.2.1 Sample code
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
### 3.3 Splash Ad
No need to do anything to access Splash Ads.    <br /> 
(If the ad_splash_id in the parameter configuration file is configured correctly, the splash ad can be displayed normally when the game starts.)

### 3.4 Native ad
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>ShowNative</td>
    <td>(RectTransform pRect, Camera pCam = null, string pAdPos = "")</td>
    <td>Show Native Ad<br /><br />
    pRect: Native advertising display location<br/>
pCam: camera<br/>
    pAdPos: display native AD point name<br/>
    </td>
  </tr>
  <tr>
    <td>IsReadyNativeAd</td>
    <td>-</td>
    <td>Whether NativeAd can be displayed.<br />
    General games do not need to call by themselves.
    </td>
  </tr>
</table>

#### 3.4.1 Sample code
```c
// show native ad
TKGSDKManager.Instance.ShowNative(nativeImage.rectTransform);

// is ready native ad
bool isReadyNative = TKGSDKManager.Instance.IsReadyNativeAd();
```

### 3.5 Banner ad
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>ShowBanner</td>
    <td>(TKGBannerAlign _bannerAlign)</td>
    <td>Show Banner Ad<br /><br />
    Display banner ads<br/>
_bannerAlign: the position displayed by the banner AD.
    </td>
  </tr>
  <tr>
    <td>HideBanner</td>
    <td>-</td>
    <td>Hide Banner Ad.<br />
    </td>
  </tr>
</table>

#### 3.5.1 Sample code
```c
// show banner ad
TKGSDKManager.Instance.ShowBanner(TKGBannerAlign.BannerCenterBottomAlign);

// hide ad
TKGSDKManager.Instance.HideBanner();
```

## 4 Event Tracking
### 4.1 Level Progression Events
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>LevelStart</td>
    <td>(int _level)  <br />
    (string _level)
    </td>
    <td>Level Start<br />
    _level: current level id.
    </td>
  </tr>
  <tr>
    <td>LevelEnd</td>
    <td>(int _level, StageResult _stageResult)<br />
    (string _level, StageResult _stageResult)
    </td>
    <td>Level End    <br />
    _level: current level id. <br />
    _stageResult: level result <br />
     <br />
    StageResult : StageSucc / StageFail / retry in level: StageRetry / back in level: StageBack
    
    </td>
  </tr>
</table>

#### 4.1.1 LevelStart
```c
TKGSDKManager.Instance.LevelStart(1);
TKGSDKManager.Instance.LevelStart("S_1");
```

#### 4.1.2 LevelEnd
```c
TKGSDKManager.Instance.LevelEnd(1, StageResult.StageSucc);
TKGSDKManager.Instance.LevelEnd("S_1", StageResult.StageFail);
TKGSDKManager.Instance.LevelEnd(3, StageResult.StageRetry);
TKGSDKManager.Instance.LevelEnd("S_2", StageResult.StageBack);
```

### 4.2 Custom Event

<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>LogEvent</td>
    <td>(string _eventSort) </td>
    <td>Report game tracking event <br />
    (the number of parameters is different) </td>
  </tr>
  <tr>
    <td>LogEvent</td>
    <td>(string _eventSort, string _key, string _value) </td>
    <td>same as above </td>
  </tr>
  <tr>
    <td>LogEvent</td>
    <td>(string _eventSort, string _key01, string _value01, string _key02, string _value02) </td>
    <td>same as above </td>
  </tr>
  <tr>
    <td>LogEvent</td>
    <td>(string _eventSort, Dictionary&lt;string, string&gt; _eventDic = null) </td>
    <td>same as above </td>
  </tr>
</table>

#### 4.2.1 Sample code
```c
TKGSDKManager.Instance.LogEvent("click_Skin");
TKGSDKManager.Instance.LogEvent("get_gift", "stage_level", "1");
TKGSDKManager.Instance.LogEvent("stage_end", "stage_level", "1", "stage_status", "success");
```

