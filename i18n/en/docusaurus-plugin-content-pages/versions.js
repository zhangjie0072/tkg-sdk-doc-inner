import React from 'react';

import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import versions from '../../../versions.json';

function Version() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const latestVersion = versions[0];
  const pastVersions = versions.filter(version => version !== latestVersion);
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <Layout
      permalink="/versions"
      description="single-spa Versions page listing all documented site versions">
      <div className="container margin-vert--xl">
        <h1>Touka SDK Release Note</h1>
        <div className="margin-bottom--lg">
        <h2>Latest version</h2>
          <b><Link to={useBaseUrl('/download')}><font size="5">ToukaSDK v2.2.0</font></Link> </b>  <br />
            <b>ToukaSDK v2.2.0 2022-06-22 </b><br />
            1. New native ads, banner ads style. <br />
            2. The SDK parameters are read from the configuration file instead. <br />
            3. Optimize SDK internal business logic. <br />
            4. Added information popup interface. <br />
            5. Add de-advertising interface. <br/><br />




<table border="0" width="80%" align="left">
      
      
      <tr>
        <td>SDK Name</td>
        <td>SDK Version</td>
        <td>Update Time</td>
        <td>Update Content</td>
        <td>Download</td>
      </tr>
      
      <tr>
        <td >CommonSDK </td>
        <td>2.2.0</td>
        <td>2022/6/22</td>
        <td>
            1. New native ads, banner ads style. <br />
            2. The SDK parameters are read from the configuration file instead. <br />
            3. Optimize SDK internal business logic. <br />
            4. Added information popup interface. <br />
            5. Add de-advertising interface.<br />
        </td>
        <td> 
OSS:<br/>
        <Link to={useBaseUrl(`https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/CommonSDK.unitypackage`)}><font size="4">CommonSDK.unitypackage</font></Link><br/><br/>
          Google Drive: <br/>
        <Link to={useBaseUrl(`https://drive.google.com/file/d/1jnPkyUQn9zgCZOJ5M6y7ek_lcH7x-Uhx/view?usp=sharing`)}><font size="4">CommonSDK.unitypackage</font></Link><br/>

        </td>
      </tr> 
      
      

      <tr>
        <td>iOS SDK</td>
        <td>2.2.0</td>
        <td>2022/6/23</td>
        <td>
            1. New native ads, banner ads style. <br />
            2. The SDK parameters are read from the configuration file instead. <br />
            3. Optimize SDK internal business logic. <br />
            4. Added information popup interface. <br />
            5. Add de-advertising interface.<br />
        </td>
        <td> OSS:<br/>
        <Link to={useBaseUrl(`https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/CN/Touka_iOSLibs_CN.unitypackage`)}><font size="4">CN:ToukaSDKLibs_iOS_CN.unitypackage</font></Link><br/>
        <Link to={useBaseUrl(`https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/GB/Touka_iOSLibs_GB.unitypackage`)}><font size="4">GB:ToukaSDKLibs_iOS_GB.unitypackage</font></Link><br/><br/>
          Google Drive: <br/>
        <Link to={useBaseUrl(`https://drive.google.com/file/d/1EEX7pHmq-A3kEpriLqmMoeXfwnwO9ZmF/view?usp=sharing`)}><font size="4">CN:ToukaSDK_iOSLibs_CN.unitypackage</font></Link><br/>
        <Link to={useBaseUrl(`https://drive.google.com/file/d/18pQ-ftL5JILTXnHuDinHOcGPTw62d8Z-/view?usp=sharing`)}><font size="4">GB:ToukaSDK_iOSLibs_GB.unitypackage</font></Link>
        </td>
      </tr>
      
      <tr>
        <td>Android SDK</td>
        <td>2.2.0</td>
        <td>2022/6/27</td>
        <td>
            1. Add Android library files. <br />
            2. Add Android Native AD interface implementation. <br />
            3. Optimize SDK internal business logic. <br />
            4. Add de-advertising interface.<br />
        </td>
        <td> 
        OSS:<br/>
        <Link to={useBaseUrl(`https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/GB/ToukaSDK_Android.unitypackage`)}><font size="4">CN:ToukaSDK_Android.unitypackage</font></Link><br/><br/>
          Google Drive: <br/>
        <Link to={useBaseUrl(`https://drive.google.com/file/d/1fbQLMsIkK7jqlmBJ95L7qirMyJ0l-FAR/view?usp=sharing`)}><font size="4">CN:ToukaSDK_Android.unitypackage</font></Link><br/>

        </td>
      </tr>
      
    </table>
    </div>
    
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <hr />
        <div className="margin-bottom--lg">
            <h3 id="archive">Past Versions</h3>
            <p>
              Here you can find documentation for previous versions of Touka SDK. <br />
              <b>Generally, Please use the latest version when start a new game.</b>
            </p>

            <b><Link to={useBaseUrl(`/2.0.1/download`)}><font size="4">ToukaSDK v2.0.1</font></Link> </b>  <br /><br />
          
          <b>ToukaSDK v2.1.0 2022-05-23 </b><br />
            1. SDK parameters are changed to the configuration file. <br />
            2. Add level progression events type and standardized API naming. <br />
            3. Add GetChannel, SetUserSourceListener, SetTKGCommonCallback and other interface. <br />
            4. Unified CN and Global SDK version. (Global SDK will open soon) <br />
            5. Optimize android package tips. <br />


            <b>ToukaSDK v2.0.1 2022-04-23 </b><br />
            1. Added SDK Demo <br />
            2. Added Splash Ad <br />
            3. Modify some method parameter types to limit value types <br />
            4. Delete built-in Health advice splash <br />
            5. Modify the default value configuration in the SDK <br /><br />


            <b>ToukaSDK v2.0.0 2022-04-17 </b><br />
            1. Support Basic Integration <br />
            2. Support Advanced Integration <br />
            3. Added Build Package instructions <br />
            4. Added Integration Verification instructions <br />
            5. Added product requirements and parameters source description <br />
             
          </div>
      </div>

    </Layout>
  );
}

export default Version;