'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
    async lx() {
        const { ctx } = this;
        // ctx.body = 'hi, egg';
        var res = await ctx.service.item.lx(ctx.request.query);
        ctx.body = res
    }
    async zf() {
        const { ctx } = this;
        // ctx.body = 'hi, egg';
        var res = await ctx.service.item.zf(ctx.request.query);
        ctx.body = res
    }
}

module.exports = OrderController;
