'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
    async lx() {
        const { ctx } = this;
        // ctx.body = 'hi, egg';
        var res = await ctx.service.order.lx(ctx.request.query);
        ctx.body = res
    }
    async add() {
        const { ctx } = this;
        // ctx.body = 'hi, egg';
        ctx.request.query.user_id = this.ctx.session.user_id;
        var res = await ctx.service.order.add(ctx.request.query);
        ctx.body = res
    }
    async del() {
        const { ctx } = this;
        // ctx.body = 'hi, egg';
        ctx.request.query.user_id = this.ctx.session.user_id;
        var res = await ctx.service.order.del(ctx.request.query);
        ctx.body = res;
    }
    async zf() {
        const { ctx } = this;
        // ctx.body = 'hi, egg';
        var res1 = await ctx.service.order.zf(ctx.request.query);
        ctx.body = res1
    }
}

module.exports = OrderController;
