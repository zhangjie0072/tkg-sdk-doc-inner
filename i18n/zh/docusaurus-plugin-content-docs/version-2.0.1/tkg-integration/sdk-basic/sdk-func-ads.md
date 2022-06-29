---
sidebar_position: 5
---

# 广告接入

## 插屏广告 
### 播放插屏广告
```c
TKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);
```
** 参数:   **  
void ShowInterstitialAd(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)

<table>
  <tr>
    <td>Name</td>
    <td>isRequired</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>_adPos</td>
    <td>Y</td>
    <td>TKGIVAdPositionName</td>
    <td>
    插屏广告点位名称。<br />
    请将【产品需求文档】中的插屏广告点位名称先在 TKGAdPositionName.cs - TKGIVAdPositionName 中进行定义。
  </td>
  </tr>
  <tr>
    <td>_callback</td>
    <td>N</td>
    <td>Action</td>
    <td>
    插屏回调。<br />
    关闭插屏和播放失败等都会回来这个回调。
    </td>
  </tr>
</table>

插屏广告点位名称定义示例：

`路径：/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs`

```
public enum TKGIVAdPositionName
{
    autoShowIntersititial,  

    IV_RetryExp,
    IV_NextLevelExp,

    //add your game InterstitialAd PositionName
    
}
```
        
### 插屏IsReady 
```c
bool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();
```  
插屏广告是否准备好。  
** Return: **  
- true  
- false 

## 激励视频
### 播放激励视频广告 

```c
TKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult);

private void RewardResult(bool _bReward)
{
    Debug.Log("[ToukaSDKDemo] Reward result：" + _bReward);
}
```
**Parameters:**   
void ShowRewardAd(TKGRVPositionName _adPos, Action&ltbool&gt _rewardCallback = null, Action _showFailedCallback = null)

<table>
  <tr>
    <td>Name</td>
    <td>isRequired</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>_adPos</td>
    <td>Y</td>
    <td>TKGRVPositionName</td>
    <td>
    激励视频点位名称。 <br />
    请将【产品需求文档】中的激励视频广告点位名称先在 TKGAdPositionName.cs - TKGRVPositionName 中进行定义。
    </td>
  </tr>
  <tr>
    <td>_rewardCallback</td>
    <td>N</td>
    <td>
    Action&lt;bool</td>
    <td>激励视频奖励回调。 </td>
    </tr>
    <tr>
    <td>_playFailedCallback</td>
    <td>N</td>
    <td>Action</td>
    <td>激励视频播放失败回调。 </td>
    </tr>
</table>         

激励视频广告点位名称定义示例： <br />
`路径：/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs`

```
public enum TKGRVPositionName
{
    RV_GetDoubleCoinExp,
    RV_GetTipsExp,

    //add your game RewardAd PositionName

}
```

### 激励视频isReady
```c
bool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();
```
返回激励视频广告是否准备好。   
Return:   
- true  
- false  

## 开屏广告
接入开屏广告，只需要配置 TOPON_OriginSplashAdId。

`file：Assets/TKGSDK/Config/Scripts/AdsSettings/StaticStringsKey_iOS.cs`

```
TOPON_OriginSplashAdId
```