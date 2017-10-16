import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/products'
    }, {
      path: '/products',
      component: resolve => require(['../Home.vue'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['../modules/products/pages/products.vue'], resolve)
        }
      ]
    }
  ]
})
