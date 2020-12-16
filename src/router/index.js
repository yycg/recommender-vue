import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/home',
      component: Home
    },
    {
      // home页面并不需要被访问，只是作为其它组件的父组件
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: () => import('../components/home/AppIndex')
        },
        {
          path: '/law',
          name: 'LawIndex',
          component: () => import('../components/law/LawIndex')
        },
        {
          path: '/law/search',
          name: 'LawSearch',
          component: () => import('../components/law/LawSearch')
        },
        {
          path: '/law/recommend',
          name: 'LawRecommend',
          component: () => import('../components/law/LawRecommend')
        },
        {
          path: '/law/personalRecommend',
          name: 'LawPersonalRecommend',
          component: () => import('../components/law/LawPersonalRecommend')
        },
        {
          path: '/medical',
          name: 'MedicalIndex',
          component: () => import('../components/medical/MedicalIndex')
        },
        {
          path: '/movie',
          name: 'MovieIndex',
          component: () => import('../components/movie/MovieIndex')
        },
        {
          path: '/movie/search',
          name: 'MovieSearch',
          component: () => import('../components/movie/MovieSearch')
        },
        {
          path: '/movie/recommend',
          name: 'MovieRecommend',
          component: () => import('../components/movie/MovieRecommend')
        },
        {
          path: '/event',
          name: 'EventIndex',
          component: () => import('../components/event/EventIndex')
        },
        {
          path: '/event/detail/:id',
          name: 'EventDetail',
          component: () => import('../components/event/EventDetail')
        },
        {
          path: '/event/search',
          name: 'EventSearch',
          component: () => import('../components/event/EventSearch')
        },
        {
          path: '/event/recommend',
          name: 'EventRecommend',
          component: () => import('../components/event/EventRecommend')
        }
      ]
    }
  ]
})
