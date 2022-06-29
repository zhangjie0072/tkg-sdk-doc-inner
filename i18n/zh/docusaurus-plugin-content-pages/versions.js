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
        <h1>Touka SDK 更新日志</h1>
        <div className="margin-bottom--lg">
        <h2>最新版本</h2>
          <b><Link to={useBaseUrl('/download')}><font size="5">ToukaSDK v2.2.0</font></Link> </b>  <br />
            <b>ToukaSDK v2.2.0 2022-06-22 </b><br />
            1. 新增原生广告、横幅广告样式 <br />
            2. SDK参数改为从配置文件读取 <br />
            3. 优化SDK内部业务逻辑 <br />
            4. 新增信息弹窗接口<br />
            5. 添加去广告接口<br /><br />


            <table border="0" width="80%" align="left">
      
      
      <tr>
        <td>SDK 名称</td>
        <td>SDK 版本</td>
        <td>更新时间</td>
        <td>更新内容</td>
        <td>下载</td>
      </tr>
      
      <tr>
        <td >CommonSDK </td>
        <td>2.2.0</td>
        <td>2022/6/22</td>
        <td>
            1. 新增原生广告、横幅广告样式 <br />
            2. SDK参数改为从配置文件读取 <br />
            3. 优化SDK内部业务逻辑 <br />
            4. 新增信息弹窗接口<br />
            5. 添加去广告接口<br />
        </td>
        <td> 
OSS:<br/>
        <Link to={useBaseUrl(`https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/CommonSDK.unitypackage`)}><font size="4">CommonSDK.unitypackage</font></Link><br/><br/>
谷歌网盘: <br/>
        <Link to={useBaseUrl(`https://drive.google.com/file/d/1jnPkyUQn9zgCZOJ5M6y7ek_lcH7x-Uhx/view?usp=sharing`)}><font size="4">CommonSDK.unitypackage</font></Link><br/>

        </td>
      </tr> 
      
      

      <tr>
        <td>iOS SDK</td>
        <td>2.2.0</td>
        <td>2022/6/23</td>
        <td>
            1. 新增原生广告、横幅广告样式 <br />
            2. SDK参数改为从配置文件读取 <br />
            3. 优化SDK内部业务逻辑 <br />
            4. 新增信息弹窗接口<br />
            5. 添加去广告接口<br />
        </td>
        <td> OSS:<br/>
        <Link to={useBaseUrl(`https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/CN/Touka_iOSLibs_CN.unitypackage`)}><font size="4">CN:ToukaSDKLibs_iOS_CN.unitypackage</font></Link><br/>
        <Link to={useBaseUrl(`https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/GB/Touka_iOSLibs_GB.unitypackage`)}><font size="4">GB:ToukaSDKLibs_iOS_GB.unitypackage</font></Link><br/><br/>
  谷歌网盘: <br/>
        <Link to={useBaseUrl(`https://drive.google.com/file/d/1EEX7pHmq-A3kEpriLqmMoeXfwnwO9ZmF/view?usp=sharing`)}><font size="4">CN:ToukaSDK_iOSLibs_CN.unitypackage</font></Link><br/>
        <Link to={useBaseUrl(`https://drive.google.com/file/d/18pQ-ftL5JILTXnHuDinHOcGPTw62d8Z-/view?usp=sharing`)}><font size="4">GB:ToukaSDK_iOSLibs_GB.unitypackage</font></Link>
        </td>
      </tr>
      
      <tr>
        <td>Android SDK</td>
        <td>2.2.0</td>
        <td>2022/6/27</td>
        <td>
            1. 添加静态库文件 <br />
            2. 添加 native 接口 <br />
            3. 优化SDK内部业务逻辑 <br />
            4. 增加去广告接口<br />
        </td>
        <td> 
        OSS:<br/>
        <Link to={useBaseUrl(`https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/GB/ToukaSDK_Android.unitypackage`)}><font size="4">CN:ToukaSDK_Android.unitypackage</font></Link><br/><br/>
          谷歌网盘: <br/>
        <Link to={useBaseUrl(`https://drive.google.com/file/d/1fbQLMsIkK7jqlmBJ95L7qirMyJ0l-FAR/view?usp=sharing`)}><font size="4">CN:ToukaSDK_Android.unitypackage</font></Link><br/>

        </td>
      </tr>
      
    </table>
        </div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <hr />
        <div className="margin-bottom--lg">
            <h3 id="archive">历史版本</h3>
            <p>
              你可以在这里找到 Touka SDK 的历史版本。<br />
              <b>一般来说，当您给一个新游戏接入SDK的时候，请使用最新版本。</b>
            </p>

            <b>ToukaSDK v2.1.0 2022-05-23 </b><br />
            1. SDK参数改为配置文件方式 <br />
            2. 新增关卡进度事件类型及规范API命名 <br />
            3. 新增获取渠道、用户来源等接口 <br />
            4. 统一国内、海外版本SDK（海外版本SDK暂未开放） <br />
            5. 优化安卓包tips提示 <br /><br />

        
            <b>ToukaSDK v2.0.1 2022-04-23 </b><br />
            1. 新增SDK Demo <br />
            2. 增加开屏广告说明 <br />
            3. 修改一些方法参数类型，对传入值类型进行限制 <br />
            4. 删除内置含健康忠告的splash <br />
            5. 修改SDK内默认值配置 <br /><br />


            <b>ToukaSDK v2.0.0 2022-04-17 </b><br />
            1. 支持基础集成 <br />
            2. 支持其他常用功能 <br />
            3. 增加构建版本打包配置说明 <br />
            4. 增加接入验证说明 <br />
            5. 增加需求及参数获取说明 <br />
             
          </div>
      </div>

    </Layout>
  );
}

export default Version;