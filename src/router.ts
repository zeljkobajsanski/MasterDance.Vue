import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Members from '@/views/Members.vue';
import MemberEdit from '@/views/MemberEdit.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {path: '/members', name: 'members', component: Members},
      {path: '/members/:id?/details', name: 'member-edit', component: MemberEdit},
      {path: '/members/create', name: 'member-edit', component: MemberEdit}
  ]
})
