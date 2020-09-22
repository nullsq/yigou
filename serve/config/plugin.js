'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
<<<<<<< HEAD
  mysql: {
        enable: true,
        package: "egg-mysql"
      },

    cors:{
          enable: true,
          package: 'egg-cors',
        }
=======
    //跨域处理
    cors: {
      enable: true,
      package: 'egg-cors',
    },
      // 配置MySQL数据库
  mysql: {
    enable: true,
    package: "egg-mysql"
  }

>>>>>>> 97dee377317fabc58f3be07c0bf90e9c55b2242d
};
