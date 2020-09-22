'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async shop_jf() {
    const sql = `select * from shop_jf`;
    const data = await this.app.mysql.query(sql);
    return data;
  }
}

module.exports = HomeService;