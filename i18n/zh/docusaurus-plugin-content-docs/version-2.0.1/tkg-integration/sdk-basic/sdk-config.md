---
sidebar_position: 2
---

# SDK参数配置(Only for iOS)

:::tip
- ToukaSDK依赖的全部配置文件都在：```Assets/TKGSDK/Config/Scripts```目录中。  
- 所有参数都可以在[【准备工作-获取接入参数】](./../sdk-prepare.md)中获取。
- <font color="ff0000">*特别留意：更新SDK版本时不要覆盖此目录。*</font>    
:::

### 基础参数
<table>
    <tr>
        <td>Config file</td>
        <td>Assets/TKGSDK/Config/Scripts/TKGBasicConfig.cs</td>
    </tr>
    <tr>
        <td rowspan="5">Required*</td>
        <td>age</td>
    </tr>
    <tr>
        <td>content</td>
    </tr>
    <tr>
        <td>PrivacyURL</td>
    </tr>
    <tr>
        <td>UserTermsURL</td>
    </tr>
    <tr>
        <td>MoreGameURL</td>
    </tr>
    <tr>
        <td colspan="2"></td>
    </tr>
    <tr>
        <td>Config file</td>
        <td>Assets/TKGSDK/Config/Scripts/AnalyticsSettings/StaticStringsKey_iOS.cs</td>
    </tr>
    <tr>
        <td rowspan="5">Required*</td>
        <td>UMENG_APPKEY</td>
    </tr>
    <tr>
        <td>GA_gameKey</td>
    </tr>
    <tr>
        <td>GA_secretKey</td>
    </tr>
    <tr>
        <td>TENJIN_KEY</td>
    </tr>
</table>

### 广告参数

<table>
    <tr>
        <td>Config file</td>
        <td>Assets/TKGSDK/Config/Scripts/AdsSettings/StaticStringsKey_iOS.cs</td>
    </tr>
    <tr>
        <td rowspan="6">Required*</td>
        <td>Admob_AppID</td>
    </tr>
    <tr>
        <td>TOPON_APPID</td>
    </tr>
    <tr>
        <td>TOPON_APPKEY</td>
    </tr>
    <tr>
        <td>TOPON_InterstitialAdId</td>
    </tr>
    <tr>
        <td>TOPON_RewardAdId</td>
    </tr>
    <tr>
        <td>TOPON_OriginSplashAdId</td>
    </tr>
</table>