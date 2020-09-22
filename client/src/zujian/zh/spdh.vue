<template>
  <div class="top">
    <div class="header">积分商城</div>
    <div class="body">
      <img src="http://q1.qlogo.cn/g?b=qq&nk=136025035&s=100&t=1563334130" alt />
      <div class="nick">
        我的积分:
        <span>9999</span>
      </div>
      <div class="leg">
        收货地址：
        <span>还没有设置呢</span>
        <a href>设置</a>
      </div>
    </div>
    <div class="content">
      <goods :data1="goods" v-for="goods in arr" :key="goods.id"></goods>
    </div>
  </div>
</template>

<script>
//导入单个的组件
import axios from "axios";
import goods from "@/zujian/zh/components/goods.vue";

export default {
  name: "App",
  data() {
    return {
      arr: [],
    };
  },
  components: {
    goods,
  },
  async created() {
    var re = await axios.get("http://192.168.3.178:7001/shop_jf");
    this.arr = re.data;
    console.log(this.arr);
  },
};
</script>

<style scoped>
.top{
    position: relative;
}

.content {
  display: flex;
  flex-wrap: wrap;
}

.header {
  color: #505458;
  font-size: 20px;
  padding-bottom: 3px;
  border-bottom: 1px solid #eeeeee;
  /* position: absolute; */
  /* left: 15px; */
}

.nick {
  height: 70px;
  line-height: 70px;
  text-align: center;
}

.nick span {
  font-size: 21px;
  font-weight: 900;
  color: #dca955;
}

.leg span {
  background-color: #10c469;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 0.3em 0.6em 0.3em;
  border-radius: 0.25em;
  color: #fff;
  margin: 0 5px 5px;
}

.leg a {
  background-color: #ff5b5b;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 0.3em 0.6em 0.3em;
  border-radius: 0.25em;
  color: #fff;
  text-decoration: none;
  margin-bottom: 3px;
}

.leg{
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 15px;
}
</style>

