'use strict';

const Service = require('egg').Service;
const svg = require("svg-captcha")

class UserController extends Service {
  async register(arg) {
    const { app } = this;
    var sql = `insert into userinfor (user_account,user_pwd,user_qq,user_email) values ('${arg.user_account}','${arg.user_pwd}','${arg.user_qq}','${arg.user_email}')`
    // ctx.body = 'hi, egg';
    var res = await app.mysql.query(sql);
    var sql = `select *from userinfor where user_account="${arg.user_account}"`
    var results = await this.app.mysql.query(sql);
    if(this.ctx.session.yzm!= arg.yzm){
        return {code:2010,info:"验证码错误"}
    }else{
        if(results[0]){
            return{code: 2001, info: "已经有了账户" }
        }
        else{
            if (results1.affectedRows > 0) {
                return { code: 2001, info: "注册成功" }
              } else {
                return { code: 5001, info: "注册失败,后端bug" }
              }
        } 
    }
  }
  async login(arg1){
      const {app}=this;
      var sql = `select *from userinfor where user_account="${arg1.user_account}" and user_pwd="${arg1.user_pwd}"`
      var res1 = await app.mysql.query(sql)
      if(this.ctx.session.yzm!=arg1.yzm){
          return{code:2010,info:"验证码错误"}
      }
      else{
        return res1;
      }
  }
  async yzm(){
      const {app}=this;
      const data = svg.create({
        size: 4,
        fontSize: 50,
        width: 100,
        height: 40,
        bacground: '#cc9966'
      });
      // // console.log("生成的验证码对象",data)
      // //把生成的验证码里面的文字缓存起来(保存到后端的内存变量中的)
      this.ctx.session.yzm = data.text;
      return data;
  }
  async adminlog(arg){
      const {app}=this;
    var sql = `select * from admininfo where  admin_account="${arg.admin_account}" and admin_pwd="${arg.admin_pwd}"`
    const res = await app.mysql.query(sql);
    return res;
  }
}

module.exports = UserController;
