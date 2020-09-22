<template>
  <div>
    <div class="goods">
      <p class="num">库存:{{data1.shopjf_num}}</p>
      <img :src="data1.shopjf_img"  />
      <p class="name">{{data1.shopjf_name}}</p>
      <p class="price">所需积分:{{data1.shopjf_price}}</p>
      <a href>兑换商品</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data1"],
};
</script>

<style>

.goods {
  width: 370px;
  height: 554px;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
}

.num {
  color: #ff6b6b;
  padding: 4px 5px;
  color: #fff;
  background: #ff6b6b;
  width: 97px;
  height: 30px;
  position: absolute;
  left: 15px;
  height: 20px;
}

.name {
  font-size: 16px;
}

.goods img {
  width: 350px;
  height: 350px;
}

.goods img:hover{
  width: 400px;
  height: 400px;
}

.price {
  color: #341f97;
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 10px;
}

.goods a {
  color: #fff;
  background: #341f97;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  width: 65%;
  padding: 14px 10px;
  margin: 0 auto;
  display: block;
  position: relative;
  transition: all 0.3s;
  text-decoration: none;
}

</style>