'use strict';

const Service = require('egg').Service;
const svg = require("svg-captcha")

class JfscController extends Service {
    async add(arg){
        const {app}=this;
        var sql = `insert into shop_jf (shopjf_name,shopjf_img,shopjf_num,shopif_price) values ("${arg.shopjf_name}","${arg.shopjf_img}","${arg.shopjf_num}","${arg.shopjf_price}")`
        var res = await app.mysql.query(sql);
        if (res.affectedRows > 0) {
            return { code: 2020, info: "上传积分商城商品成功" }
          } else {
            return { code: 2021, info: "上传积分商城商品失败" }
          }
    }
    async del(arg){
        const {app}=this;
        var sql = `DELETE FROM shop_jf WHERE shopjf_name="${arg.shopjf_name}" `;
        var res = await app.mysql.query(sql);
        if (res.affectedRows > 0) {
            return { code: 2022, info: "删除积分商城商品成功" }
          } else {
            return { code: 2023, info: "删除积分商城商品失败" }
          }
    }
    async up (arg){
        const {app}=this;
        var sql = `UPDATE shop_jf SET shopjf_name="${arg.shopjf_name}",shopjf_img="${arg.shopjf_img}",shopjf_num="${arg.shopjf_num}",shopif_price="${arg.shopif_price}"  WHERE shopjf_id="${arg.shopjf_id}"`;
        var res = await app.mysql.query(sql);
        if (res.affectedRows > 0) {
            return { code: 2022, info: "修改积分商城商品成功" }
          } else {
            return { code: 2023, info: "修改积分商城商品失败" }
          }
    }
    async jfscsel(){//查询积分商城的商品
        const {app}=this;
        var sql = `SELECT  *  FROM  shop_jf `;
        var res = await app.mysql.query(sql);
        if (res.affectedRows > 0) {
            return { code: 2022, info: res }
          } else {
            return { code: 2023, info: "查询积分商城商品失败" }
          }
    }
}

module.exports = JfscController;
