---
sidebar_position: 5
---

# Advertising integration

## InterstitialAd 
### ShowInterstitialAd

```c
TKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);
```
** Parameters:   **  
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
</table>

define the InterstitialAd POSITION NAME as follows   
`file: /Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs`
```
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
    <td>_showFailedCallback</td>
    <td>N</td>
    <td>Actionbool</td>
    <td>
    Callback of ad close and playback fail.
  </td>
  </tr>
</table>

define the RewardAd POSITION NAME as follows    
`file: /Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs`
```
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
To use Splash Ad, you only need to configure TOPON_OriginSplashAdId.

`file：Assets/TKGSDK/Config/Scripts/AdsSettings/StaticStringsKey_iOS.cs`

```
TOPON_OriginSplashAdId
```