'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async shop_jf(){
    this.ctx.body = await this.ctx.service.home.shop_jf();
  }
}

module.exports = HomeController;
