---
sidebar_position: 7
---

# For iOS
### Unity Settings   
### Xcode Settings   
#### 1. Add dynamic library for ads sdk   

Step1. `Build Settings -> bitcode -> No`

![ks_02_re01](/img/tkg/sdk-config/projectsettings/ks_02_re01.png)

Step2.    

![ks_03_re02](/img/tkg/sdk-config/projectsettings/ks_03_re02.png)

Step3.    

![ks_04_re03](/img/tkg/sdk-config/projectsettings/ks_04_re03.jpeg)

Step4.   

![ks_05_re04](/img/tkg/sdk-config/projectsettings/ks_05_re04.png)

Step5.   

![ks_06_re05](/img/tkg/sdk-config/projectsettings/ks_06_re05.png)
   
Step6.     

![ks_07_re06](/img/tkg/sdk-config/projectsettings/ks_07_re06.png)   

Step7. The script content can be copied directly from the bash script below the screenshot.    

![ks_08_re07](/img/tkg/sdk-config/projectsettings/ks_08_re07.png)

**The bash script shown in the screenshot:**

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
