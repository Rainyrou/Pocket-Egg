/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1691553914122_1538';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
      ingoreJSON: true
    },
    domainWhiteList: [ '*' ],
  };

  config.view = {
    // 左边写成.html后缀，会自动渲染.html文件
    mapping: { '.html': 'ejs' }
  };

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      // 我们新建的数据库名称
      database: 'clown-pocket'
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  };

  config.jwt = {
    secret: 'Clown'
  };

  config.multipart = {
    mode: 'file'
  };

  config.cors = {
    // 允许所有跨域访问
    origin: '*',
    // 允许 Cookie 跨域跨域
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    uploadDir: 'app/public/upload'
  };

  return {
    ...config,
    ...userConfig,
  };
};

