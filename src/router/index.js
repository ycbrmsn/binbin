import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Conversation from '@/components/main/conversation/Conversation'
import Scene from '@/components/main/scene/Scene'
import Service from '@/components/main/service/Service'
import Contact from '@/components/main/contact/Contact'
import Profile from '@/components/main/profile/Profile'
import Setting from '@/components/main/profile/Setting'
import FootPrint from '@/components/main/profile/FootPrint'
import PageNotFound from '@/components/error/PageNotFound'
import Forbidden from '@/components/error/Forbidden'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/conversation',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/conversation',
          name: 'Conversation',
          component: Conversation
        },
        {
          path: '/scene',
          name: 'Scene',
          component: Scene
        },
        {
          path: '/service',
          name: 'Service',
          component: Service
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        }
      ]
    },
    {
      path: '/profile/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/profile/footPrint',
      name: 'FootPrint',
      component: FootPrint
    },
    {
      path: '*',
      name: '404',
      component: PageNotFound
    },
    {
      path: '/403',
      name: '403',
      component: Forbidden
    }
  ]
})
