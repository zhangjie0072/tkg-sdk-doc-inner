---
sidebar_position: 5
---

# 广告接入

## 插屏广告 
### 播放插屏广告
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
    关闭插屏和插屏未成功播放等都会回给这个回调。
    </td>
  </tr>
  <tr>
    <td>_IvType</td>
    <td>N</td>
    <td>IVADType</td>
    <td>
    插屏频次类型。<br />
    默认使用 IV1。可结合【产品需求文档】如有不同插屏频次需求，可配合 IV2 使用。
    </td>
  </tr>
</table>

** 插屏广告点位名称定义示例：**

```jsx title="/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"
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
    激励视频点位名称。 <br />
    请将【产品需求文档】中的激励视频广告点位名称先在 TKGAdPositionName.cs - TKGRVPositionName 中进行定义。
    </td>
  </tr>
  <tr>
    <td>_rewardCallback</td>
    <td>N</td>
    <td>
    Action&lt;bool&gt;</td>
    <td>激励视频奖励回调。(在此回调中处理下发奖励) </td>
    </tr>
    <tr>
    <td>_playFailedCallback</td>
    <td>N</td>
    <td>Action</td>
    <td>激励视频未成功播放回调。 </td>
    </tr>
</table>         

激励视频广告点位名称定义示例：    <br />

```jsx title="/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"
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
接入开屏无需做任何处理。     
（参数配置文件中开屏广告位id正确即可在游戏启动时正常展示开屏广告「 ``` ad_splash_id  ``` 」）。


## 原生广告 （Native ads）
### 展示原生广告 

```c
TKGSDKManager.Instance.ShowNative(nativeImage.rectTransform);
```
**API:**   
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
    需要展示原生广告Image的RectTransform
    </td>
  </tr>
  <tr>
    <td>pCam</td>
    <td>N</td>
    <td>
            Camera
    </td>
    <td>如果Canvas有相机则传入 </td>
    </tr>
    <tr>
    <td>_pos</td>
    <td>N</td>
    <td>String</td>
    <td>展示原生广告的位置打点 </td>
    </tr>
    
</table>         
    <br />

** 位置讲解 ** <br /><br />

需要展示native的位置： <br />
![](/img/ads/topleftposition.jpg) <br />

挂载： <br />
![](/img/ads/bottomrightposition.jpg) <br />


代码： <br />
![](/img/ads/nativeadscode.jpg) <br />


### 原生广告是否准备好
```c
bool isReadyNative = TKGSDKManager.Instance.IsReadyNativeAd();
```
返回原生广告是否准备好。   
Return:   
- true  
- false  

### 移除原生广告
```c
TKGSDKManager.Instance.RemoveNative();
```

## 横幅广告
### 展示横幅广告 

```c
TKGSDKManager.Instance.ShowBanner(TKGBannerAlign.BannerCenterBottomAlign);

```
**API:**   
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
        展示横幅广告的位置：<br />
        TKGBannerAlign.BannerCenterBottomAlign - 底部居中
        TKGBannerAlign.BannerCenterTopAlign - 顶部居中
    </td>
  </tr>

</table>         


### 隐藏横幅广告
```c
TKGSDKManager.Instance.HideBanner();
```
