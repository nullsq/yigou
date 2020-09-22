'use strict';

const Service = require('egg').Service;
const svg = require("svg-captcha")

class OrderController extends Service {
    async lx(arg) {
        const { app } = this;
        //  var sql = `UPDATE shop_sell SET shop_sellconet=${arg.shop_sellconet}   WHERE shop_sellcount=2 and `
        var sql = `select * from shop_sell WHERE  shop_sellcount=2`
        const res = await app.mysql.query(sql);
        let obj=[]
        const res1=''
        for(let i =0; i <arg.odernum;i++){
            obj.push(res[i]);
        }
        // for(let i =0;i<obj.length;i++){
        //     const res1 = await app.mysql.query(`UPDATE shop_sell SET shop_sellconet=${arg.shop_sellconet} shop_sellcount=0  WHERE shop_sellcount=${obj[i].shop_sellid} );
        // }
        // for(let i =0;i<obj.length;i++){
        //     const res1 = await app.mysql.query(`UPDATE shop_sell SET shop_sellconet=${arg.shop_sellconet},shop_sellcount=0  WHERE shop_sellcount=${obj[i].shop_sellid} );

        // }

}
        
        }
module.exports = OrderController;
