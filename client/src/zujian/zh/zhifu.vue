<template>
  <div class="content">
    <div class="header">
      <div>
        <img src="./img/1.png" alt />
      </div>
      <div class="right">
        <router-link to="/"><a href="">首页</a></router-link>&nbsp;
        <router-link to="./toushu"><a href="">投诉订单</a></router-link>&nbsp;
        <router-link to="./chaxun"><a href="">查询订单</a></router-link>&nbsp;
      </div>
    </div>
    <div class="body">
        <div class="top">
            <div class="left">
                <div class="left-top"></div>
                <span class="en">数字卡密</span>
                <span class="en">自动发货</span>
                <span class="en">普通卖家</span><br>
                <p class="enn">
                    <b>联系卖家</b>212167554<a href="//wpa.qq.com/msgrd?v=1&amp;uin=212167554&amp;site=miaoka.la&amp;menu=yes'" target="_blank" class="zixun" style="width:65px;top:15px;"><i class="iconfont icon-qq-white"></i>
                        咨询卖家</a>
                    <br><span style="color:red;font-size:12px">商品问题联系卖家</span>
                </p>
                <p class="enn">
                    <b>卖家网站</b><a target="_blank" href="" style="color: #648ff7;">点击浏览</a>
                </p>
                <p>
                    <b>商品说明</b><span id="remark">KS Q只售后密码错误和买之前冻结，其他无售后，介意勿扰售后Q群794775763</span>
                </p>
            </div>

            <div class="middle">
              <p>[ 卖家公告 ]</p>
              <p>商品名称</p>
              <p>KS JD QQ</p>
              <p>[ 库存很多 ]</p>
              <p>购买数量</p>
              <input type="text">
            </div>

            <div class="bottom">
              <p>商品单价</p>
              <p>0.20元</p>
              <p>联系方式</p>
              <input type="text" placeholder="[必填]推荐填写QQ号或手机号！"><br>
              <button class="duanxin">短信提醒</button>
              <button class="youxiang">邮箱提醒</button>
            </div>
            
        </div>
        <div class="leg">
          <div class="leg-left">支付</div>
          <div class="leg-right">应付总额:NAN元</div>
        </div>
    </div>
    <router-link to="/xiadan"><a class="sure">确认支付</a></router-link>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.sure{
  display: inline-block;
  width: 180px;
  height: 48px;
  text-decoration: none;
  background-color:  #2a62ff;
  color: #ffffff;
  line-height: 48px;
  border-radius: 30px;
}

.leg-left{
  width: 184px;
  background-color: #2a62ff;
  color: #ffffff;
}

.leg-right{
  width: 180px;
  color: #f97c73;
  font-size: 22px;
}

.leg{
  width: 100%;
  height: 48px;
  background-color: #f5f6f9;
  display: flex;
  justify-content: space-between;
  line-height: 48px;
}

.bottom{
  width: 310px;
  position: relative;
}

.bottom :first-child{
  position: absolute;
  left: 0;
}

.bottom :nth-child(2){
  position: absolute;
  top: 40px;
  color: #fe825a;
  font-size: 30px;
}

.bottom :nth-child(3){
  position: absolute;
  top: 100px;
  left: 0;
}

.bottom :nth-child(4){
  position: absolute;
  top: 100px;
  left: 0;
  width: 310px;
  height: 42px;
  outline: none;
  border: 1px solid #eeeeee;
}

.duanxin{
  position: absolute;
  top: 200px;
  left: 50px;
  width: 93px;
  height: 38px;
}

.youxiang{
  position: absolute;
  top: 200px;
  width: 93px;
  height: 38px;
}


.middle :nth-child(2){
  position: absolute;
  top: 50px;
  
}

.middle :nth-child(3){
  position: absolute;
  top: 100px;
}

.middle :nth-child(4){
  position: absolute;
  top: 150px;
  right: 0;
  color: #648ff7;
}
.middle :nth-child(5){
  position: absolute;
  top: 200px;
}
.middle :nth-child(6){
  position: absolute;
  top: 250px;
  left: 0;
  width: 310px;
  height: 42px;
  outline: none;
  border: 1px solid #eee;
}

.middle :first-child{
  height: 16px;
  color: #648ff7;
  position: absolute;
  right: 0;
}

.middle{
  width: 310px;
  margin-right: 100px;
  position: relative;
}

*{
  margin: 0;
  padding: 0;
}


.top{
  display: flex;
}

.zixun:hover{
  background-color: orangered;
}

.enn{
  text-indent: -150px;
}

.zixun{
  display: block;
  width: 85px;
  height: 32px;
  color: #ffffff;
  background-color: #f97c73;
  padding: 0 10px;
  border-radius: 18px;
  text-align: right;
  line-height: 32px;
  position: absolute;
  right: 0;

}

.left p a{
  text-decoration: none;
}

.left p b{
  font-size: 14px;
  color: #666666;
  padding-right: 10px;
}

.left p{
    position: relative;
    line-height: 24px;
    border-bottom: 1px dashed #eee;
    margin: 0 10px;
    padding: 10px 0;
    color: #666;
    /* text-indent: -10em; */
}

.en{
    display: inline-block;
    width: 73px;
    height: 24px;
    color: #767ead;
    margin: 20px 10px 10px 0;
    background-color: #f5f6f9;
    padding: 0 10px;
}

.left{
    width: 418px;
    height: 299px;
    border: 1px solid #eeeeee;
    padding: 10px;
    box-sizing: border-box;
    margin: 0 100px 50px 0;
}

.left-top{
    width: 396px;
    height: 40px;
    background-color: #2a62ff;
}

.body{
    padding: 10px 20px;
    border: 1px solid #eeeeee;
    width: 70%;
    margin: 80px 200px;
}

.header {
  height: 100px;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
  /* border-top: 2px solid #eeeeee; */
  /* margin-bottom: 80px; */
}

.header img {
  width: 189px;
  height: 78px;
}


.right{
    display: flex;
}

.right a{
    text-decoration: none;
  cursor: pointer;
  color: #767ead;
  height: 100px;
  width: 80px;
  font: 16px/100px Arial, sans-serif;
  margin-right: 16px;
  line-height: 100px;
}


</style>