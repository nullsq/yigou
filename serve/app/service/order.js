'use strict';

const Service = require('egg').Service;
const svg = require("svg-captcha")

class OrderController extends Service {
    async lx(arg) {
        const { app } = this;
        //  var sql = `UPDATE shop_sell SET shop_sellconet=${arg.shop_sellconet}   WHERE shop_sellcount=2 and `
        var sql = `select * from shop_sell WHERE  shop_sellcount=2`
        const res = await app.mysql.query(sql);
        let obj = [];
        // var res1='';
        var res = ''
        for (let i = 0; i < arg.odernum; i++) {
            obj.push(res[i]);
        };
        for (let i = 0; i < obj.length; i++) {
            var sql = `UPDATE shop_sell SET shop_sellconet=${arg.shop_sellconet}    WHERE shop_sellid=${obj[i].shop_sellid}`
            res = await app.mysql.query(sql);
        };
        // for(let i =0;i<obj.length;i++){
        //     const res1 = await app.mysql.query(`UPDATE shop_sell SET shop_sellconet=${arg.shop_sellconet},shop_sellcount=0  WHERE shop_sellcount=${obj[i].shop_sellid} );
        // }
        if (res.affectedRows > 0) {
            return { code: 2050, info: "添加联系方式成功为了查询" }
        } else {
            return { code: 2051, info: "添加联系方式成功为了查询" }
        }
    }
    async zf(arg){
        const { app } = this;
        var sql = `select * from shop_sell WHERE shop_sellconet=${arg.shop_sellconet};`
        if (res.affectedRows > 0) {
            return { code: 2055, info: "查询成功" }
        } else {
            return { code: 2056, info: "查询失败" }
        }
    }

}
module.exports = OrderController;
