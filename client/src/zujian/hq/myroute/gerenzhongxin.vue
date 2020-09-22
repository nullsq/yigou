<template>
	<div class="content1">
		<!-- <div>这里是个人中心</div> -->
		<div class="data1">
			<span>id:{{id}}</span>
			<span>$今日可提现:{{money}}</span>
			<span>提现</span>
			<span>$未结余额:{{money}}</span>
			<span>设置</span>
			<span>退出</span>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				id:40061,
				money:2000.0,
				balance:250.0
			}
		},
		mounted() {
			// 请求id等数据
			// this.$axios("#")
			// .then(data=>{
			// 	this.id=data.id
			// 	this.money=data.money
			// 	this.balance=data.balance
			// })
		}
	}
</script>

<style scoped="scoped">
	.content1{
		width: 85%;
		height: 400px;
		margin: 0 auto;
		background-color: white;
		position: relative;
		padding: 10px 0;
	}
	.data1{
		position: absolute;
		left: 0;
		display: flex;
		justify-content: space-around;
		color: #337ab7;
		font-size: 16px;
		width: 60%;
	}
</style>
