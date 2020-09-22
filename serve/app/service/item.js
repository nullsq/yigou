'use strict';

const Service = require('egg').Service;
const svg = require("svg-captcha")

class ItemController extends Service {
 async add(arg){
     const {app}=this;
     var sql = `INSERT  INTO shop_sell (shop_sellname,shop_sellprice,shop_sellnum,shop_sellinfo,shop_sellcount,user_id) VALUES ("${arg.shop_sellname}",${arg.shop_sellprice},${arg.shop_sellnum},"${arg.shop_sellinfo}",2,"${arg.user_id}")`
     const res= await app.mysql.query(sql);
     if(res.affectedRows>0){
         return {code:2030,infor:"增加成功"}
     }
     else{
         return  {code:2031,infor:"增加失败"}
     }
 }
 async sel(arg){//前端做数据处理 conunt
    const {app}=this;
    var sql = `select * from shop_sell WHERE shop_sellcount> 1`
    const res= await app.mysql.query(sql);
    // if(res.affectedRows>0){
    //     return {code:2030,infor:res}
    // }
    // else{
    //     return  {code:2031,infor:"查询失败"}
    // }
    return res
}
async del(arg){
    const {app}=this;
    var sql = `UPDATE shop_sell SET shop_sellcount=0   WHERE shop_sellid="${arg.shop_sellid}"`
    const res= await app.mysql.query(sql);
    if(res.affectedRows>0){
        return {code:2032,infor:"删除成功"}
    }
    else{
        return  {code:2031,infor:"删除失败"}
    }
}

async up(arg){
    const {app}=this;
    var sql = `UPDATE shop_sell SET shop_sellname="${arg.shop_sellname}",shop_sellprice=${arg.shop_sellprice} ,shop_sellnum=${arg.shop_sellnum} ,shop_sellinfo="${arg.shop_sellinfo}"  WHERE shop_sellid=${arg.shop_sellid}`
    const res= await app.mysql.query(sql);
    if(res.affectedRows>0){
        return {code:2033,infor:"修改成功"}
    }
    else{
        return  {code:2034,infor:"修改失败"}
    }
}
//  async adminedi(userinfro1){
//     const {app}=this;
//     var sql = `update userinfor set user_account="${userinfro1.user_account}",user_pwd="${userinfro1.user_pwd}",user_qq="${userinfro1.user_qq}",user_email="${userinfro1.user_email}" where user_id="${userinfro1.user_id}"`
//     var res = await app.mysql.query(sql);
//     if(res.affectedRows>0){
//         return {code:2013,infor:"修改成功"}
//     }
//     else{
//         return  {code:2014,infor:"修改成功"}
//     }
//  }
}

module.exports = ItemController;
