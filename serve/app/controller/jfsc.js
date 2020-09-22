'use strict';

const Controller = require('egg').Controller;
const fs = require("fs");
const path = require("path");
class JfscController extends Controller {
    async add() {
        const {
            ctx
        } = this;
        const f = ctx.request.files[0];
        // console.log(ctx.request.files);
        const pub = '/public/upload/';
        const to = path.dirname(__dirname) + pub + path.basename(f.filepath);
        await fs.copyFile(f.filepath, to, (err) => {
            if (err) console.log(err);
            console.log('成功');
            fs.unlink(f.filepath, (err) => {
                if (err) console.log(err)
            })
        });
        const url = `http://127.0.0.1:7001${pub}${path.basename(f.filepath)}`
        ctx.request.body.img = url;
        const res1 = await ctx.service.jfsc.add(ctx.request.body);
        ctx.body = res1
    }
    async del(){
        const {ctx}=this;
        const res = await ctx.service.jfsc.del(ctx.request.body);
        ctx.body=res;
    }
    async up(){
        const {ctx}=this;
        ctx.body = await ctx.service.jfsc.up(ctx.request.body);
    }
    async jfscsel(){
        const {ctx}=this;
        ctx.body = await ctx.service.jfsc.jfscsel();
    }
     
}

module.exports = JfscController;
