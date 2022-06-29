---
sidebar_position: 2
---

# Configuration SDK

:::tip
Parameter configuration file path :  ```Assets/Configs/ ``` <br />
Others config files would be found under ```Assets/TKGSDK/Config/Scripts```.  
The parameter configuration file can be found in the [Get the parameters](./../sdk-prepare.md).

*<font color="ff0000">Attentions: Do not overwrite this directory in a later sdk update!</font>    *
:::

### Parameter configuration file
Save the obtained parameter configuration file in the specified directory

CN:  ```Assets/Configs/CN/ ```<br />
GB:  ```Assets/Configs/GB/ ```<br />    

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CN SDK" label="CN SDK" default>

<table>
  <tr>
    <td>Platform</td>
    <td>FileName</td>
  </tr>
  <tr>
    <td>iOS CN</td>
    <td>tkg_config.plist <br/>tkg_sdk_config.plist
</td>
  </tr>
  <tr>
    <td>Android CN</td>
    <td>tkg_config.properties</td>
  </tr>
</table>

Configured as shown below: <br /><br />
![config01](/img/config/tkg_config_cn.jpg)


  </TabItem>
  <TabItem value="Global SDK" label="Global SDK">



<table>
  <tr>
    <td>Platform</td>
    <td>FileName</td>
  </tr>
   <tr>
    <td>iOS Global</td>
    <td>tkg_config.plist<br/>tkg_sdk_config.plist<br/>GoogleService-Info.plist</td>
  </tr>
  <tr>
    <td>Android GB</td>
    <td>tkg_config.properties</td>
  </tr>
</table>

Configured as shown below: <br /><br />
![config01](/img/config/tkg_config_gb.jpg)

  </TabItem>
</Tabs>


### Set Project Settings
You can set ** Product Name, Bundle ID/ Package Name, Define Symbols ** automatically by the tool. Or manually set them to the correct values.
<Tabs>
<TabItem value="CN SDK" label="CN SDK" default>
  <table>
  <tr>
    <td>Platform</td>
    <td>Tools Item</td>
    <td>SDK Need Define Symbols</td>
  </tr>
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

  Tools as follows.  <br />
![config01](/img/config/config_cn_name.jpg)

![config04](/img/config/config_cn_definesymbols.jpg)

  </TabItem>
  <TabItem value="Global SDK" label="Global SDK">
  <table>
  <tr>
    <td>Platform</td>
    <td>Tools Item</td>
    <td>SDK Need Define Symbols</td>
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

