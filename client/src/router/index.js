<<<<<<< HEAD
import Vue from 'vue'
import VueRouter from 'vue-router'
import user from '../zujian/hq/myroute/user.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
  {
    path: '/user',
    component: () => import('@/zujian/hq/myroute/user.vue'),
	children:[
		{
		  path: 'gerenzhongxin',
		  name: 'gerenzhongxin',
		  component: () => import('@/zujian/hq/myroute/gerenzhongxin.vue'),
		},
		{
		  path: 'jifenshangcheng',
		  name: 'jifenshangcheng',
		  component: () => import('@/zujian/hq/myroute/jifenshangcheng.vue')
		},
		{
		  path: 'shangjia',
		  name: 'shangjia',
		  component: () => import('@/zujian/hq/myroute/shangjia.vue')
		},
		{
		  path: 'tousu',
		  name: 'tousu',
		  component: () => import('@/zujian/hq/myroute/tousu.vue')
		},
		{
		  path: 'shangpin',
		  name: 'shangpin',
		  component: () => import('@/zujian/hq/myroute/shangpin.vue')
		},
		{
		  path: 'xunika',
		  name: 'xunika',
		  component: () => import('@/zujian/hq/myroute/xunika.vue')
		},
		{
		  path: 'youhuijuan',
		  name: 'youhuijuan',
		  component: () => import('@/zujian/hq/myroute/youhuijuan.vue')
		},
		{
		  path: 'dingdan',
		  name: 'dingdan',
		  component: () => import('@/zujian/hq/myroute/dingdan.vue')
		},
		{
		  path: 'tuiguang',
		  name: 'tuiguang',
		  component: () => import('@/zujian/hq/myroute/tuiguang.vue')
		},
		{
		  path: 'daili',
		  name: 'daili',
		  component: () => import('@/zujian/hq/myroute/daili.vue')
		},
		{
		  path: 'tixian',
		  name: 'tixian',
		  component: () => import('@/zujian/hq/myroute/tixian.vue')
		}
	]
  }
]
})

export default router
=======

>>>>>>> fab9e91a6f66ed08bd0c4e5049017f85d86343b7
