'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async register() {
        const { ctx } = this;
        // ctx.body = 'hi, egg';
        ctx.body = await ctx.service.user.register(ctx.request.body)
    }
    async login() {
        const { ctx } = this;
        // ctx.body = 'hi, egg';
        var result = await ctx.service.user.login(ctx.request.body)
        if (result[0]) {
            this.ctx.session.user_id = this.ctx.request.body.user_id
            this.ctx.body = { code: 2002, info: result[0] }
        } else {
            this.ctx.body = { code: 4003, info: "密码或账号错误" }
        }
    }
    async yzm() {
        const { ctx } = this;
        var result1 = await ctx.service.user.yzm();
        // ctx.body = result1;
        ctx.response.type = 'image/svg+xml';  // 返回的类型
        ctx.body = result1.data; // 返回一张图片
    }
    async adminlog() {
        const { ctx } = this;
        var res = await ctx.service.user.adminlog(ctx.request.body);
        if (res[0]) {
            this.ctx.session.admin_account = this.ctx.request.body.admin_account
            this.ctx.body = { code: 2011, info: result[0] }
        }
        else{
            this.ctx.body ={code:2012,info:"账户或者密码错误"}
        }
    }
}

module.exports = UserController;
