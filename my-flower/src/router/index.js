import Vue from 'vue'
import Router from 'vue-router'
import Section1 from '@/components/Section1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Section1',
      component: Section1
    }
  ]
})
