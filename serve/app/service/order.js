'use strict';

const Service = require('egg').Service;
const svg = require("svg-captcha")

class OrderController extends Service {
    async lx(arg) {
        const { app } = this;
        //  var sql = `UPDATE shop_sell SET shop_sellconet=${arg.shop_sellconet}   WHERE shop_sellcount=2 and `
        var sql = `select * from shop_kc WHERE  shop_kclx=2`
        const res = await app.mysql.query(sql);
        let obj = [];
        // var res1='';
        var res1 = ''
        for (let i = 0; i < arg.odernum; i++) {
            obj.push(res[i]);
        };
        for (let i = 0; i < obj.length; i++) {
            var sql = `UPDATE shop_kc SET shop_kclx=${arg.shop_kclx}    WHERE shop_kcid=${obj[i].shop_kcid}`
            res1 = await app.mysql.query(sql);
        };
        if (res1.affectedRows > 0) {
            return { code: 2050, info: "添加联系方式成功为了查询" }
        } else {
            return { code: 2051, info: "添加联系方式成功为了查询" }
        }
    }
    async zf(arg){
        const { app } = this;
        var sql = `select * from shop_kc WHERE shop_kclx=${arg.shop_kclx};`
        var res = await app.mysql.query(sql);
        if (res.affectedRows > 0) {
            return { code: 2055, info: "查询成功" }
        } else {
            return { code: 2056, info: "查询失败" }
        }
    }
    async add(arg){
        const { app } = this;
        var sql = `INSERT  INTO shop_kc (shop_km,  shop_kcname,  shop_kcprice,shop_kcflag,shop_kclx,user_id) VALUES('${arg.shop_km}', '${arg.shop_kcname}', ${arg.shop_kcprice},0,${arg.shop_kclx},${arg.user_id})`
        var res = await app.mysql.query(sql);
        if (res.affectedRows > 0) {
            return { code: 2055, info: "添加成功" }
        } else {
            return { code: 2056, info: "舔加失败" }
        }
    }
    async del(arg){
        const { app } = this;
        var sql = `UPDATE shop_kc SET shop_kcflag=2   WHERE shop_kcid=${arg.shop_kcid}`
        var res = await app.mysql.query(sql);
        if (res.affectedRows > 0) {
            return { code: 2057, info: "删除成功" }
        } else {
            return { code: 2058, info: "删除成功" }
        }
    }

}
module.exports = OrderController;
