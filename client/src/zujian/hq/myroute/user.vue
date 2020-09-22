<template>
	<div id="app">
		<div class="father">
			<div class="navg">
				<img src="@/assets/baner.jpg" alt="" class="logo">
				<div class="title">
					<div v-for="item in arr" class="linka" @click="func(item.path)" :id="item.path">
						<span class="text">{{item.name}}</span>
						<span :class="item.icon"></span>
					</div>
				</div>
			</div>
		</div>
		<router-view />
	</div>
</template>
<script>
	export default {
		components:{
		},
		data() {
			return {
				arr:[
					{name:"个人中心",icon:'iconfont icon-tubiao-',path:"gerenzhongxin"},
					{name:"积分商城",icon:'iconfont icon-jifenshangcheng',path:"jifenshangcheng"},
					{name:"商家",icon:'iconfont icon-tubiaolunkuo-',path:"shangjia"},
					{name:"投诉",icon:'iconfont icon-tousu',path:"tousu"},
					{name:"商品",icon:'iconfont icon-shangpin',path:"shangpin"},
					{name:"虚拟卡",icon:'iconfont icon-xunika-tianchong',path:"xunika"},
					{name:"优惠券",icon:'iconfont icon-asmkticon0147',path:"youhuijuan"},
					{name:"订单",icon:'iconfont icon-icon-',path:"dingdan"},
					{name:"推广",icon:'iconfont icon-tuiguang',path:"tuiguang"},
					{name:"代理",icon:'iconfont icon-daili',path:"daili"},
					{name:"提现",icon:'iconfont icon-tixian',path:"tixian"},
				],
				
			}
		},
		methods: {
				func(tag){
					this.$router.push({path:`/user/${tag}`})
					let divs = document.querySelectorAll(".linka")
					let div = document.getElementById(`${tag}`)
					for(let i=0;i<divs.length;i++){
						divs[i].style.backgroundColor="#ebeff2"
						divs[i].style.color="#435966"
						divs[i].lastChild.style.color="#435966"
						div.style.backgroundColor="white"
						div.style.color="#337ab7"
						div.lastChild.style.color="#337ab7"
						div.lastChild.style.fontWeight="bolder"
					}
					
				}
		},
		mounted() {
			this.$router.push({path:`/user/gerenzhongxin`})
			let first= document.querySelector(".title").firstChild
			first.style.color="#337ab7"
			first.style.backgroundColor="white"
			first.lastChild.style.color="#337ab7"
			first.lastChild.style.fontWeight="bolder"
		}
		
	}
</script>
<style scoped="scoped">
	.navg {
		width: 100%;
		height: 40px;
		border-top: 2px solid #71b6f9;
		position: relative;
	}
	.logo{
		width: 81.6px;
		height: 42px;
		position: absolute;
		left: 5px;
		top: 0;
	}
	.title{
		display: flex;
		justify-content: space-between;
		line-height: 40px;
		margin: 0 auto;
		width: 85%;
	}
	.linka{
		    color: #435966;
			text-decoration: none;
			display: flex;
			padding: 0 5px;
			justify-content: space-between;
	}
	.iconfont{
		font-size: 20px;
		color: #435966;
		margin-left: 10px;
		
	}
	
</style>
