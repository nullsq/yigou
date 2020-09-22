<template>
	
	<!--提示框-->
	<el-button class="btnAdd" type="primary" @click="dialogVisible = true">新增自提点</el-button>
	<el-dialog title="新增自提点：" :visible.sync="dialogVisible" width="35%" :before-close="handleClose">
	 <el-form  label-width="90px" :label-position="labelPosition">
	     <el-form-item label="自提点名称">
	         <el-input v-model="input.name"></el-input>
	     </el-form-item>
	     <el-form-item label="自提点地址">
	        <el-input v-model="input.address"></el-input>
	     </el-form-item>
	     <el-form-item label="自提点电话">
	        <el-input v-model="input.phone"></el-input>
	     </el-form-item>
	   </el-form>
	   <span slot="footer" class="dialog-footer">
	     <el-button @click="dialogVisible = false">取 消</el-button>
	     <el-button type="primary" @click="dialogVisible = false;branchAdd()">确 定</el-button>
	    </span>
	</el-dialog>

	
</template>

<script>
	 export default {
	    data () {
	      return {
	        input:{
	          id:'',
	          name:'',
	          address:'',
	          phone:''
	        }
	      }
	    },
	     methods: {
	      //新增自提点
	      branchAdd(){
	        this.$api.branch.add(data => {    //这里为点击按钮调用的接口
	          window.location.reload();    //调用成功刷新页面更新数据
	        },{
	          name:this.input.name,    //传递绑定的参数，注意this指向
	          address:this.input.address,
	          phone:this.input.phone,
	        });
	      },
	    }
	}
	 

	
	
</script>

<style>
</style>
