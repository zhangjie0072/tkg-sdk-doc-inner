---
sidebar_position: 2
---

# Configuration SDK (Only for iOS)

:::tip
All of the config files would be found under ```Assets/TKGSDK/Config/Scripts```.  
All the required parameters could be found in the [Get the parameters](./../sdk-prepare.md).

*<font color="ff0000">Attentions: Do not overwrite this directory in a later sdk update!</font>    *
:::

### Basic config
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

### Ad networks config

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