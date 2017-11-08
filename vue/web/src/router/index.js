import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import SeeMe from '@/components/seeMe'
import NoFind from '@/components/noFind'
import Texiao1 from '@/components/texiao/texiao1'
import Texiao2 from '@/components/texiao/texiao2'
import Texiao3 from '@/components/texiao/texiao3'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/noFind',
      name: 'NoFind',
      component: NoFind
    },
    {
      path: '/seeMe',
      name: 'SeeMe',
      component: SeeMe
    },
    {
      path: '/texiao1',
      name: 'Texiao1',
      component: Texiao1
    },
    {
      path: '/texiao2',
      name: 'Texiao2',
      component: Texiao2
    },
    {
      path: '/texiao3',
      name: 'Texiao3',
      component: Texiao3
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   // console.log(to.matched, from)
//   if (to.matched.length === 0) {
//     next('/noFind')
//   } else {
//     next()
//   }
// })

export default router
