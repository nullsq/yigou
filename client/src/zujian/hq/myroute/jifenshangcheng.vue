<template>
	<div class="content1">
		<div class="top">
			<router-link to="/user" class="title first">商品兑换</router-link>
			<router-link to="/user" class="title">兑换记录</router-link>
		</div>
		<div class="body"></div>
	</div>
</template>

<script>
	export default{
		mounted() {
			// this.$router.push({path:`/user/gerenzhongxin`})//在body中显示张豪的组件
			document.querySelector(".first").style.backgroundColor="#BACDCD"
			
		}
	}
</script>

<style scoped="scoped">
	.content1{
		width: 85%;
		height: 600px;
		margin: 0 auto;
		background-color: white;
		padding-top: 10px;
		padding-left: 8px;
	}
	.top{
		display: flex;
		width: 90%;
		justify-content: space-around;
		margin: 0 auto;
	}
	.top>.title{
		background-color:  #D9ECEF;
		text-align: center;
		color: #435966;
		margin: 0 10px;
		width: 50%;
		font-size: 25px;
		height: 30px;
		line-height: 30px;
		text-decoration: none;
	}
	/* top:nth-child(1) */
	.body{
		width: 88.5%;
		margin: 5px auto;
		height: 550px;
		background-color: lightblue;
	}
</style>
