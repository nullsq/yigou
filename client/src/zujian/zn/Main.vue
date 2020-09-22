<template>
	<el-container>
		<!--顶部-->
		<el-header style="border-bottom: 1px solid gray;">
			<el-row style="margin: 10px 15px">
				<el-col :span="1">
					<!--收缩条-->
					<a href="#" @click="changeCollapse" style="font-size: 25px;color:#909399;"><i :class="collpaseIcon"></i></a>
				</el-col>
			</el-row>
		</el-header>
		<!--中央区域-->
		<el-main>
			<el-container>
				<!--左侧导航栏-->
				<el-aside :style="{width:collpaseWidth}">
					<!--default-active代表导航栏默认选中哪个index, :collapse决定导航栏是否展开，为boolean类型
                    :router决定导航栏是否开启路由模式，即在菜单item上设置路由是否生效，值为boolean类型-->
					<el-menu default-active="0" class="el-menu-vertical-demo" :collapse="isCollapse" :router="true">
						<!--index设置当前item的下标，:route则是传一个对象进行，指定路由-->
						<el-menu-item index="0" :route="{name:'Index'}">
							<i class="fa fa-magic"></i>
							<span slot="title"> 管理中心</span>
						</el-menu-item>

						<!-- 账户管理 -->

						<el-submenu index="1"><template slot="title"><i class="fa fa-cogs"></i><span> 账户管理</span>
							</template>

							<el-menu-item index="/Setting" :route="{name:'Setting'}"><i class="fa fa-cog"></i> 账户信息
							</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-user-circle-o"></i> 修改密码</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-object-group"></i> 登录日志</el-menu-item>
						</el-submenu>

						<!-- 店铺管理 -->

						<el-submenu index="2"><template slot="title"><i class="fa fa-users"></i><span> 店铺管理</span>
							</template>

							<el-menu-item index="2-1" :route="{name:'Customer'}"><i class="fa fa-address-card-o"></i>
								店铺资料
							</el-menu-item>
							<el-menu-item index="2-2"><i class="fa fa-envelope-o"></i> 店铺链接</el-menu-item>
						</el-submenu>

						<!-- 商品管理 -->
						<el-submenu index="3"><template slot="title"><i class="fa fa-cogs"></i><span> 商品管理</span>
							</template>

							<el-menu-item index="/Setting" :route="{name:'shopimg'}"><i class="fa fa-cog"></i> 添加商品
							</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-user-circle-o"></i> 商品分类</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-object-group"></i> 商品列表</el-menu-item>
						</el-submenu>

						<!-- 密卡管理 -->

						<el-submenu index="4"><template slot="title"><i class="fa fa-cogs"></i><span> 卡密管理</span>
							</template>

							<el-menu-item index="/card" :route="{name:'Setting'}"><i class="fa fa-cog"></i> 账户信息
							</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-user-circle-o"></i> 修改密码</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-object-group"></i> 登录日志</el-menu-item>
						</el-submenu>
						<!-- 投诉管理 -->
						<el-submenu index="5"><template slot="title"><i class="fa fa-cogs"></i><span> 投诉管理</span>
							</template>

							<el-menu-item index="/card" :route="{name:'Setting'}"><i class="fa fa-cog"></i> 全部投诉
							</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-user-circle-o"></i> 已处理</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-object-group"></i> 未处理</el-menu-item>
						</el-submenu>
						
						<!-- 优惠劵管理 -->
						<el-submenu index="6"><template slot="title"><i class="fa fa-cogs"></i><span> 优惠劵管理</span>
							</template>

							<el-menu-item index="/card" :route="{name:'Setting'}"><i class="fa fa-cog"></i> 生成优惠劵
							</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-user-circle-o"></i> 优惠劵列表</el-menu-item>
						
						</el-submenu>
						
						<!-- 订单管理 -->
						<el-submenu index="7"><template slot="title"><i class="fa fa-cogs"></i><span> 订单管理</span>
							</template>

							<el-menu-item index="/card" :route="{name:'Setting'}"><i class="fa fa-cog"></i> 付款方式
							</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-user-circle-o"></i> 订单列表</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-object-group"></i> 收益分析</el-menu-item>
							<el-menu-item index="/card" :route="{name:'Setting'}"><i class="fa fa-cog"></i> 已付款
							</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-user-circle-o"></i> 未付款</el-menu-item>
							
						</el-submenu>
						
						<!-- 提现管理 -->
						<el-submenu index="8"><template slot="title"><i class="fa fa-cogs"></i><span> 提现管理</span>
							</template>
						
							<el-menu-item index="/card" :route="{name:'Setting'}"><i class="fa fa-cog"></i> 申请提现
							</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-user-circle-o"></i> 结算记录</el-menu-item>
						
						</el-submenu>
						<!-- 上级处理 -->
						<el-submenu index="9"><template slot="title"><i class="fa fa-cogs"></i><span> 上级处理</span>
							</template>
						
							<el-menu-item index="/card" :route="{name:'Setting'}"><i class="fa fa-cog"></i> 代理分组
							</el-menu-item>
							<el-menu-item index="1-2"><i class="fa fa-user-circle-o"></i> 我的代理</el-menu-item>
						</el-submenu>
						<el-menu-item index="1-2"><i class="fa fa-user-circle-o"></i> 分销订单</el-menu-item>
						</el-submenu>
						
							
							<!-- 下级分销 -->
							<el-submenu index="8"><template slot="title"><i class="fa fa-cogs"></i><span> 下级分销</span>
								</template>
							
								<el-menu-item index="/card" :route="{name:'Setting'}"><i class="fa fa-cog"></i> 可代理商品
								</el-menu-item>
								<el-menu-item index="1-2"><i class="fa fa-user-circle-o"></i> 我的分销商品</el-menu-item>
							
							</el-submenu>
							
						
						
						
						
						






					</el-menu>

				</el-aside>
				<!--主内容显示区域-->
				<el-main>
					<!--路由渲染-->
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-main>
		<!--底部-->
		<el-footer style="border-top: 1px solid gray"></el-footer>
	</el-container>
</template>

<script>
	// 这一大段JS就是为了做收缩/展开导航栏而用的！
	export default {
		name: "Main",
		data: function() {
			return {
				isCollapse: false, // 决定左侧导航栏是否展开
			}
		},
		computed: {
			collpaseIcon: function() { // 左侧导航栏是否展开状态的图标
				// 如果是展开状态就图标向右，否则图标向左
				return this.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold';
			},
			collpaseWidth: function() { // 左侧导航栏是否展开状态的宽度
				// 如果是展开状态就导航栏宽度为65px，否则200px
				return this.isCollapse ? '65px' : '200px';
			}
		},
		methods: {
			changeCollapse: function() { // 更改左侧导航栏展示状态
				this.isCollapse = !this.isCollapse;
			}
		}
	}
</script>

<style scoped>
	/*整体显示区域布局样式*/
	.el-container {
		height: 100%;
	}

	.el-header,
	.el-main {
		padding: 0;
	}

	/*左边导航栏具体样式*/
	.el-menu-vertical-demo.el-menu {
		padding-left: 20px;
		text-align: left;
		height: 100%;
		padding: 0;
	}

	el-container>.el-menu-vertical-demo.el-menu {
		padding: 0;
	}

	.el-submenu .el-menu-item,
	.el-menu-item {
		min-width: 50px;
	}

	.el-menu-item {
		padding: 0;
	}
</style>
