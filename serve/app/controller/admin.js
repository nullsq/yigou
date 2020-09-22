'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async admindel(){//删除user中的信息
    const {ctx}=this;
    ctx.body = await ctx.service.admin.admindel( ctx.request.query);
  }
  async adminedi(){//编辑user中的信息
    const {ctx}=this;
    ctx.body = await ctx.service.admin.adminedi( ctx.request.query);
  }
}

module.exports = AdminController;
