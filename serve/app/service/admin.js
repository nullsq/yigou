'use strict';

const Service = require('egg').Service;
const svg = require("svg-captcha")

class AdminController extends Service {
 async admindel(userinfro){
     const {app}=this;
     var sql = `delete from userinfor where user_account="${userinfro.user_account}"`
     const res= await app.mysql.query(sql);
     if(res.affectedRows>0){
         return {code:2013,infor:"删除成功"}
     }
     else{
         return  {code:2014,infor:"删除失败"}
     }
 }
 async adminedi(userinfro1){
    const {app}=this;
    var sql = `update userinfor set user_account="${userinfro1.user_account}",user_pwd="${userinfro1.user_pwd}",user_qq="${userinfro1.user_qq}",user_email="${userinfro1.user_email}" where user_id="${userinfro1.user_id}"`
    var res = await app.mysql.query(sql);
    if(res.affectedRows>0){
        return {code:2013,infor:"修改成功"}
    }
    else{
        return  {code:2014,infor:"修改失败"}
    }
 }
}

module.exports = AdminController;
