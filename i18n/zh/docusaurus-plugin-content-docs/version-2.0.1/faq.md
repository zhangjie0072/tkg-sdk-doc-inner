---
title: "FAQ"
sidebar_label: "FAQ"
description: ""
sidebar_position: 96
---

## iOS
### Xcode报错：Legacy Build System 

当你编译Xcode时，看到如下报错，可参考如下方式解决。

1. 选择File > Project Settings   

![iOS Symbols](/img/tkg/faq/legal01.png) 
  
2. 在Shared Project Settings中, 修改Build System settings为New Build System。

![iOS Symbols](/img/tkg/faq/legal02.png)


### Xcode报错：Library not loaded:  ....KSAdSDK....  Error
如果你看到如下关于KSAdSDK的报错，请根据 [设置快手framework为动态库](./tkg-integration/sdk-projectsettings/sdk-projectsettings-ios.md) 步骤进行修复这个问题。
![ks_01_error](/img/tkg/sdk-config/projectsettings/ks_01_error.png)

### 必要参数为空

InitSDK会检查必要参数，如遇如下报错，请 [检查参数配置](./tkg-integration/sdk-basic/sdk-config.md)。   

![check_config](/img/tkg/basicintegration/checkConfig.jpeg)


## Android

### Target API Level Error
请根据 构建版本->构建Android平台->[Minimun API Level : API Level 22](./tkg-integration/sdk-projectsettings/sdk-projectsettings-android.md)

![Target API Level Error](/img/tkg/faq/androidtargetapi.jpg)
