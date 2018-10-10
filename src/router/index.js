import Vue from 'vue'
import Router from 'vue-router'
import HotsiteIndex from '@/components/hotsite/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HotsiteIndex',
      component: HotsiteIndex
    }
  ]
})
