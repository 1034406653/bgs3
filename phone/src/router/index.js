import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Download from '@/components/download'
import Introduce from '@/components/introduce'
import Notice from '@/components/notice'
import Feedback from '@/components/feedback'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/download',
      name: 'Download',
      component: Download,
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce,
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice,
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback,
    },
  ]
})
