---
sidebar_position: 2
---

# SDK参数配置

:::tip
- 参数配置文件放置路径: ```Assets/StreamingAssets/Configs/ ``` <br />
- 其他功能相关配置文件都在：```Assets/TKGSDK/Config/Scripts```目录中。  
- 参数配置文件可以在[【准备工作-获取接入参数】](./../sdk-prepare.md#获取接入参数)中获取。
- <font color="ff0000">特别留意：更新SDK版本时不要覆盖此目录。</font>    
:::

### 设置配置文件
请将获取到的参数配置文件，放到工程 ```Assets/StreamingAssets/Configs/ ``` 目录下。<br />    

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="国内版本" label="国内版本" default>

<table>
  <tr>
    <td>平台</td>
    <td>配置文件</td>
  </tr>
  <tr>
    <td>iOS CN</td>
    <td>tkg_config.plist</td>
  </tr>
  <tr>
    <td>Android CN</td>
    <td>tkg_config.properties</td>
  </tr>
</table>

Configured as shown below: <br /><br />
![config01](/img/config/config_cn.jpg)


  </TabItem>
  <TabItem value="海外版本" label="海外版本（即将开放）">



<table>
  <tr>
    <td>平台</td>
    <td>配置文件</td>
  </tr>
   <tr>
    <td>iOS Global</td>
    <td>tkg_config.plist</td>
  </tr>
  <tr>
    <td>Android GB</td>
    <td>tkg_config.properties</td>
  </tr>
</table>

Configured as shown below: <br /><br />
![config01](/img/config/config_gb.jpg)

  </TabItem>
</Tabs>


### 设置工程配置
你可以通过菜单栏工具自动设置 ** 游戏名称、 Bundle ID/ Package Name、宏定义**。或者手动将他们设置正确。<br />

<Tabs>
<TabItem value="国内版本" label="国内版本" default>
  <table>
  <td>平台</td>
    <td>菜单工具</td>
    <td>SDK 需要的 Define Symbols</td>
   <tr>
    <td>iOS CN</td>
    <td>Settings For IOS CN</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Android CN</td>
    <td>Settings For Android CN</td>
    <td>-</td>
  </tr>
  </table>

  Tools as follows. <br />
![config01](/img/config/config_cn_name.jpg)

![config04](/img/config/config_cn_definesymbols.jpg)

  </TabItem>
  <TabItem value="海外版本" label="海外版本（即将开放）">
  <table>
  <tr>
    <td>平台</td>
    <td>菜单工具</td>
    <td>SDK 需要的 Define Symbols</td>
  </tr>
   <tr>
    <td>iOS GB</td>
    <td>Settings For IOS GB</td>
    <td>AppStore_GB</td>
  </tr>
  <tr>
    <td>Android GB</td>
    <td>Settings For Android GB</td>
    <td>GooglePlay</td>
  </tr>
  </table>

  Tools as follows.    <br />
  ![config02](/img/config/config_gb_name.jpg)

![config05](/img/config/config_gb_definesymbols.jpg)
  </TabItem>
</Tabs>

![config03](/img/config/config_bundle_id.jpg)