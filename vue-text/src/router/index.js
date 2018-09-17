import Vue from 'vue'
import Router from 'vue-router'
import SVGFrame from '@/components/SVGFrame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SVGFrame',
      component: SVGFrame
    }
  ]
})
