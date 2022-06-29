---
sidebar_position: 5
---

# Advertising integration

## InterstitialAd 
### ShowInterstitialAd

```c
TKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);
```
** API:   **  
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
    Name of interstitial ad placement.    <br />
      <br />
    Please define the InterstitialAd POSITION NAME in the [Product Requirements Document] in TKGAdPositionName.cs - TKGIVAdPositionName first.
    </td>
  </tr>
  <tr>
    <td>_callback</td>
    <td>N</td>
    <td>Action</td>
    <td>
    Callback of ad close and playback fail.
  </td>
  </tr>
  <tr>
    <td>_IvType</td>
    <td>N</td>
    <td>IVADType</td>
    <td>
    Type of frequency control<br />
    Default set IV1. IV2 can be used if required.
    </td>
  </tr>
</table>

define the InterstitialAd POSITION NAME as follows   

```jsx title="/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"
public enum TKGIVAdPositionName
{
    autoShowIntersititial,  

    IV_RetryExp,
    IV_NextLevelExp,

    //add your game InterstitialAd PositionName
    
}
```

### IsReadyInterstitialAd 
```c
bool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();
```  
Whether interstitial ad is ready to be played.    
** Return: **  
- true  
- false

## RewardAd
### PlayRewardAd

```c
TKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult);

private void RewardResult(bool _bReward)
{
    Debug.Log("[ToukaSDKDemo] Reward result：" + _bReward);
}
```
**API:**   
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
    Name of reward ad placement.    <br />
        <br />
    Please define the RewardAd POSITION NAME in the [Product Requirements Document] in TKGAdPositionName.cs - TKGRVPositionName first.
    </td>
  </tr>
  <tr>
    <td>_rewardCallback</td>
    <td>N</td>
    <td>Action&lt;bool&gt;</td>
    <td>
    Callback for reward.  <br />
    Recommended developers issue rewards in this callback.
    </td>
  </tr>
  <tr>
    <td>_rewardCallback</td>
    <td>N</td>
    <td>Action&lt;bool&gt;</td>
    <td>
    Callback of ad close and playback fail.
  </td>
  </tr>
</table>

define the RewardAd POSITION NAME as follows    

```jsx title="/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"
public enum TKGRVPositionName
{
    RV_GetDoubleCoinExp,
    RV_GetTipsExp,

    //add your game RewardAd PositionName

}
```

### IsReadyRewardAd
```c
bool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();
```
Whether reward ad is ready to be played.     
Return:
- true  
- false  


## Splash Ad
Don't need to do anything to access Splash Ads. <br />
(If the ad_splash_id in the parameter configuration file is configured correctly, the splash ad can be displayed normally when the game starts.)

## Native Ad
### ShowNativeAd

```c
TKGSDKManager.Instance.ShowNative(nativeImage.rectTransform);
```
** API:   **  
void ShowNative(RectTransform pRect, Camera pCam = null, string pAdPos = "")

<table>
  <tr>
    <td>Name</td>
    <td>isRequired</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>pRect</td>
    <td>Y</td>
    <td>Transform.position</td>
    <td>
   
    RectTransform that needs to display the native AD Image
    </td>
  </tr>
  <tr>
    <td>pCam</td>
    <td>N</td>
    <td>Camera</td>
    <td>
If there is a camera in the Canvas, pass it in
  </td>
  </tr>
  <tr>
    <td>_pos</td>
    <td>N</td>
    <td>String</td>
    <td>
Name of native ad placement.
    </td>
  </tr>
</table>

<br/>

** Explanation of location: **

![config01](/img/ads/topleftposition.jpg)<br/>

** Mount:**

![config01](/img/ads/bottomrightposition.jpg)<br/>

** code **

![config01](/img/ads/nativeadscode.jpg)<br/>




### IsReadyNativeAd 
```c
bool isReadyNative = TKGSDKManager.Instance.IsReadyNativeAd();
```  
Whether native ad is ready to be played.    
** Return: **  
- true  
- false

## Banner Ad
### ShowBannerAd

```c
TKGSDKManager.Instance.ShowBanner(TKGBannerAlign.BannerCenterBottomAlign);
```
** API:   **  
void ShowBanner(TKGBannerAlign _bannerAlign)


<table>
  <tr>
    <td>Name</td>
    <td>isRequired</td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>_bannerAlign</td>
    <td>Y</td>
    <td>TKGBannerAlign</td>
    <td>
   Where to display banner ads:<br/>
TKGBannerAlign.BannerCenterBottomAlign - the bottom center <br/>
TKGBannerAlign.BannerCenterTopAlign - the top center
    </td>
  </tr>
</table>

<br/>

### HideBannerAd 
```c
TKGSDKManager.Instance.HideBanner();
```  

