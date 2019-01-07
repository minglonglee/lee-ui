import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../pages/index'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../pages/category/home')
        },

        {
          path: '/basic/button',
          name: 'button',
          component: () => import('../pages/category/basic/button')
        },

        {
          path: '/form/input',
          name: 'input',
          component: () => import('../pages/category/form/input')
        },
        {
          path: '/form/radio',
          name: 'radio',
          component: () => import('../pages/category/form/radio')
        },
        {
          path: '/form/checkbox',
          name: 'checkbox',
          component: () => import('../pages/category/form/checkbox')
        },
        {
          path: '/form/select',
          name: 'select',
          component: () => import('../pages/category/form/select')
        },
	      {
		      path: '/form/tree',
		      name: 'tree',
		      component: () => import('../pages/category/form/tree')
	      },
	      {
		      path: '/form/time',
		      name: 'time',
		      component: () => import('../pages/category/form/time')
	      },
	      {
		      path: '/form/date',
		      name: 'date',
		      component: () => import('../pages/category/form/date')
	      },

	      {
		      path: '/navigation/step',
		      name: 'step',
		      component: () => import('../pages/category/navigation/step')
	      },
        {
          path: '/navigation/pagination',
          name: 'pagination',
          component: () => import('../pages/category/navigation/pagination')
        }
      ]
    }
  ]
})
