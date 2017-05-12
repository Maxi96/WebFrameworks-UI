import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Start from '@/components/StartPage'
import Grill from '@/components/GrillDetailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/start',
      name: 'StartPage',
      component: Start
    },
    {
      path: '/grill',
      name: 'GrillPage',
      component: Grill
    }
  ]
})
