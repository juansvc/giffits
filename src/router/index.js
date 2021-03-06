
/* 
Vue Js Frontend Task Using the Open Movie Database.
Author Juan Sebastian Vivanco Castro
@github juansvc
Title: Giffits - Eng. Juan Vivanco
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../components/Movies.vue'
import InfoMovie from '../components/InfoMovie.vue'
import Search from '../components/Search.vue'

Vue.use(VueRouter)
//Routes to components
const routes = [
  {
    path: '/',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/movie/:id',
    name: 'InfoMovie',
    props: true,
    component: InfoMovie
  },
  {
    path: '/search/:search',
    name: 'Search',
    props: true,
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
