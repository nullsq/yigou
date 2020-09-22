'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.post('/register', controller.user.register);
  router.post('/login', controller.user.login);
  router.get('/yzm', controller.user.yzm);
  router.post('/adminlog', controller.user.adminlog);
  router.get('/admindel', controller.admin.admindel);
  router.get('/adminedi', controller.admin.adminedi);
  router.post('/jfscadd', controller.jfsc.add);
  router.get('/jfscdel', controller.jfsc.del);
  router.get('/jfscup', controller.jfsc.up);
  router.get('/jfscsel', controller.jfsc.jfscsel);

  router.post('/itemadd', controller.item.add);//file【0】0不能解析
  router.get('/itemsel', controller.item.sel);//userid?加引号才可以
  router.get('/itemup', controller.item.up);//userid?
  router.get('/itemdel', controller.item.del);//userid?
      //订单
  router.get('/orderlx', controller.order.lx);//添加联系方式
  // router.get('/orderzf', controller.order.zf);//支付以后的查询


};
