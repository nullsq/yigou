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
  config.keys = appInfo.name + '_1600648561864_8504';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    
};//config.default.js中
config.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  }
};
config.multipart = {
  mode: "file"//默认为stream  流
};
// 配置数据库
config.session = {
  key: 'YG',
  maxAge: 1000*3600*24,
  httpOnly: true,
  encrypt: true
}
config.mysql = {
  client: {
    host: "127.0.0.1", //主机名、地址
    user: "root", //用户名
    password: "root", //密码
    port: 3306, //端口号
    database: "yigou" //使用的数据库
  }
}
return {
  ...config,
  ...userConfig,
};
};
