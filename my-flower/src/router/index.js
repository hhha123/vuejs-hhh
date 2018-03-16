import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import sort from '@/components/sort'
import list from '@/components/list'
import Sorter from '@/components/Sorter'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import Page from '@/components/Page'
import ZhucePhone from '@/components/ZhucePhone'
import ZhuceYx from '@/components/ZhuceYx'
import judge from '@/components/judge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
	        path:'',
		      name: 'Section1',
		      component: Section1,
        },
        {
	        path:'Section2',
		      name: 'Section2',
		      component: Section2
        },
        {
	        path:'Section3',
		      name: 'Section3',
		      component: Section3
        },
        {
	        path:'Section4',
		      name: 'Section4',
		      component: Section4
        }
      ]
    },
    {
        path:'/sort',
	      name: 'sort',
	      component: sort
    },
    {
        path:'/list',
	      name: 'list',
	      component: list
    },
    {
        path:'/Sorter',
	      name: 'Sorter',
	      component: Sorter
    },
    {
        path:'/login',
	      name: 'Login',
	      component: Login
    },
    {
        path:'/regist',
	      name: 'Regist',
	      component: Regist,
	      children: [
	          {
			        path:'',
				      name:'ZhucePhone',
				      component: ZhucePhone,
		        },  
			      {
			        path:'ZhuceYx',
				      name: 'ZhuceYx',
				      component: ZhuceYx,
		        } 
	      ]
    },
    {
        path:'/page',
	      name: 'Page',
	      component: Page
    },
    {
        path:'/judge',
	      name: 'judge',
	      component: judge
    }
  ]
})
