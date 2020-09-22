'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
<<<<<<< HEAD
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async shop_jf(){
    this.ctx.body = await this.ctx.service.home.shop_jf();
  }
=======
  // async index() {
  //   const { ctx } = this;
  //   ctx.body = 'hi, egg';
  // }
>>>>>>> 97dee377317fabc58f3be07c0bf90e9c55b2242d
}

module.exports = HomeController;
