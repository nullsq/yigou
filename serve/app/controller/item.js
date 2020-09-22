'use strict';

const Controller = require('egg').Controller;

class itemController extends Controller {
  async add() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
      ctx.request.query.user_id = this.ctx.session.user_id;
      var res =await ctx.service.item.add(ctx.request.body);
      ctx.body =res
  }
  async sel() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
      var res =await ctx.service.item.sel(ctx.session.user_id);
      ctx.body =res
  }
  async up() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
      var res =await ctx.service.item.up(ctx.request.query);
      ctx.body =res
  }
  async del() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
      var res =await ctx.service.item.del(ctx.request.query);
      ctx.body =res
  }
  async zf() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
      var res =await ctx.service.item.zf(ctx.request.query);
      ctx.body =res
  }
}

module.exports = itemController;
