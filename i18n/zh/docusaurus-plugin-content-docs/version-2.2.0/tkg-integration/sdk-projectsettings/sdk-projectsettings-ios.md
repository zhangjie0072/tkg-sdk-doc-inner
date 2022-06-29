---
sidebar_position: 7
---

# 构建iOS平台
## Unity中配置  
## Xcode中配置   
### 1. 设置快手库为动态库
请按照如下步骤将快手设置成动态库。   
（1）![ks_02_re01](/img/tkg/sdk-config/projectsettings/ks_02_re01.png)
（2）![ks_03_re02](/img/tkg/sdk-config/projectsettings/ks_03_re02.png)
（3）![ks_04_re03](/img/tkg/sdk-config/projectsettings/ks_04_re03.jpeg)
（4）![ks_05_re04](/img/tkg/sdk-config/projectsettings/ks_05_re04.png)
（5）![ks_06_re05](/img/tkg/sdk-config/projectsettings/ks_06_re05.png)
（6）![ks_07_re06](/img/tkg/sdk-config/projectsettings/ks_07_re06.png)
（7）脚本内容可直接复制截图下方的bash脚本。

![ks_08_re07](/img/tkg/sdk-config/projectsettings/ks_08_re07.png)

bash脚本内容:
```bash
# Type a script or drag a script file from your workspace to insert its path.
APP_PATH="${TARGET_BUILD_DIR}/${WRAPPER_NAME}"

# This script loops through the frameworks embedded in the application and
# removes unused architectures.
find "$APP_PATH" -name '*.framework' -type d | while read -r FRAMEWORK
do
  FRAMEWORK_EXECUTABLE_NAME=$(defaults read "$FRAMEWORK/Info.plist" CFBundleExecutable)
  FRAMEWORK_EXECUTABLE_PATH="$FRAMEWORK/$FRAMEWORK_EXECUTABLE_NAME"
  echo "Executable is $FRAMEWORK_EXECUTABLE_PATH"
  # ignore non-fat framework
  IS_FAT=$(lipo -info $FRAMEWORK_EXECUTABLE_PATH | grep 'Non-fat')
  if [[ ${IS_FAT} ]]; then
    echo "ignoring ${FRAMEWORK_EXECUTABLE_PATH} because it's a Non-fat binary"
    continue
  fi

  EXTRACTED_ARCHS=()

  for ARCH in $ARCHS
  do
    echo "Extracting $ARCH from $FRAMEWORK_EXECUTABLE_NAME"
    lipo -extract "$ARCH" "$FRAMEWORK_EXECUTABLE_PATH" -o "$FRAMEWORK_EXECUTABLE_PATH-$ARCH"
    EXTRACTED_ARCHS+=("$FRAMEWORK_EXECUTABLE_PATH-$ARCH")
  done

  echo "Merging extracted architectures: ${ARCHS}"
  lipo -o "$FRAMEWORK_EXECUTABLE_PATH-merged" -create "${EXTRACTED_ARCHS[@]}"
  rm "${EXTRACTED_ARCHS[@]}"

  echo "Replacing original executable with thinned version"
  rm "$FRAMEWORK_EXECUTABLE_PATH"
  mv "$FRAMEWORK_EXECUTABLE_PATH-merged" "$FRAMEWORK_EXECUTABLE_PATH"

done
```
### 2. Add Excluded Architectures
 
 ![config](/img/ads/addarch.jpg)

```
 EXCLUDED_ARCHS__EFFECTIVE_PLATFORM_SUFFIX_simulator__NATIVE_ARCH_64_BIT_x86_64=arm64 arm64e armv7 armv7s armv6 armv8 EXCLUDED_ARCHS=$(inherited) $(EXCLUDED_ARCHS__EFFECTIVE_PLATFORM_SUFFIX_$(EFFECTIVE_PLATFORM_SUFFIX)__NATIVE_ARCH_64_BIT_$(NATIVE_ARCH_64_BIT))
```


### 3. Enable Objective-C Exceptions
![](/img/tkg/faq/errorTrySolu.jpg)
