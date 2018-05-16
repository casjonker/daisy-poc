import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PhotosIndex from '@/components/PhotosIndex'
import PhotoDetail from '@/components/PhotoDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/photos',
      name: 'PhotosIndex',
      component: PhotosIndex
    },
    {
      path: '/photo/:id',
      name: 'PhotoDetail',
      component: PhotoDetail
    }
  ]
})
