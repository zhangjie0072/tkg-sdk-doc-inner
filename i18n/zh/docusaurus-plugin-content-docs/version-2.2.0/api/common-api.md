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
  <tr>
    <td>SetLogEnable</td>
    <td>(bool _enable)</td>
    <td>SDK内部日志开关<br />
    true: 开 <br />
    false: 关
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
### 1.2 设置日志开关
```c
TKGSDKManager.Instance.SetLogEnable(true);
```

## 2 合规接口
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>OpenPolicyPop</td>
    <td>-</td>
    <td>在当前进程中打开信息弹窗
    </td>
  </tr>
  
</table>

### 2.1 信息弹窗
```c
TKGSDKManager.Instance.OpenPolicyPop();
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
接入开屏广告无需做任何处理。     
（参数配置文件中开屏广告位id配置正确，即可在游戏启动时正常展示开屏广告「 ad_splash_id 」）。

### 3.4 native 广告
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>ShowNative</td>
    <td>(RectTransform pRect, Camera pCam = null, string pAdPos = "")</td>
    <td>展示原生广告<br />
        pRect: 原生广告展示位置<br />
        pCam: 相机<br />
        _pos: 展示native广告点位名称<br />
    </td>
  </tr>
  <tr>
    <td>IsReadyNativeAd</td>
    <td>-</td>
    <td>判断当前是否存在可展示的原生广告。<br />
    一般游戏无需自行调用。
    </td>
  </tr>
</table>

#### 3.4.1 示例代码
```c
// show native ad
TKGSDKManager.Instance.ShowNative(nativeImage.rectTransform);


// is ready native ad
bool isReadyNative = TKGSDKManager.Instance.IsReadyNativeAd();
```

### 3.5 banner 广告
<table>
  <tr>
    <td>API</td>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>ShowBanner</td>
    <td>(TKGBannerAlign _bannerAlign)</td>
    <td>展示横幅广告<br /><br />
            _bannerAlign: 横幅广告所展示的位置<br /><br />
        
    </td>
  </tr>
  <tr>
    <td>HideBanner</td>
    <td>-</td>
    <td>隐藏banner广告
  
    </td>
  </tr>
</table>

#### 3.5.1 示例代码
```c
// show banner ad
TKGSDKManager.Instance.ShowBanner(TKGBannerAlign.BannerCenterBottomAlign);

// hide ad
TKGSDKManager.Instance.HideBanner();

```
## 4 事件埋点
### 4.1 关卡进度事件
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
    <td>关卡开始事件<br />
    _level: 正在进行的关卡序号值
    </td>
  </tr>
  <tr>
    <td>LevelEnd</td>
    <td>(int _level, StageResult _stageResult)<br />
    (string _level, StageResult _stageResult)
    </td>
    <td>关卡结束事件    <br />
    _level: 正在进行的关卡序号值 <br />
    _stageResult: 关卡结束结果 <br />
     <br />
    StageResult : StageSucc / StageFail / 游戏内重试: StageRetry / 游戏内返回: StageBack
    
    </td>
  </tr>
</table>

#### 4.1.1 关卡开始事件
```c
TKGSDKManager.Instance.LevelStart(1);
TKGSDKManager.Instance.LevelStart("S_1");
```

#### 4.1.2 关卡结束事件
```c
TKGSDKManager.Instance.LevelEnd(1, StageResult.StageSucc);
TKGSDKManager.Instance.LevelEnd("S_1", StageResult.StageFail);
TKGSDKManager.Instance.LevelEnd(3, StageResult.StageRetry);
TKGSDKManager.Instance.LevelEnd("S_2", StageResult.StageBack);
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

