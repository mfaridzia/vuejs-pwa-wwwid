import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/components/Post'
import About from '@/components/About'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Post',
      component: Post
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
