import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cart from '@/components/cart'
import item from '@/components/item'
import detail from '@/components/detail'
import mytest from '@/components/mytest'
import test from '@/components/test'
import register from '@/components/register'
import login from '@/components/login'
import login1 from '@/components/login1'
import register1 from '@/components/register1'
import myprofile from '@/components/myprofile'
import addgoods from '@/components/addgoods'
import search from '@/components/search'

Vue.use(Router)

var routes = [
        {
          path:'/',
          name:'index',
          component:index
        },
        {
          path:'/cart',
          name:'cart',
          component:cart
        },
        {
          path:'/item',
          name:'item',
          component:item
        },
        {
          path:'/detail',
          name:'detail',
          component:detail
        },
        {
          path:'/mytest',
          name:'mytest',
          component:mytest
        },
        {
          path:'/test',
          name:'test',
          component:test
        },
        
        {
          path:'/login',
          name:'login',
          component:login
        },
        {
          path:'/login1',
          name:'login1',
          component:login1
        },
        {
          path:'/register1',
          name:'register1',
          component:register1
        },
        {
          path:'/register',
          name:'register',
          component:register
        },
        {
          path:'/myprofile',
          name:'myprofile',
          component:myprofile,
          beforeEnter:(to,from,next) =>{

            if(localStorage.getItem('username')){

              console.log('已经登陆');
              next();
            }else{
              console.log('没有登陆');
              next('./login')
            }
          },
          
        },
        
        {
          path:'/addgoods',
          name:'addgoods',
          component:addgoods
        },
        {
          path:'/search',
          name:'search',
          component:search
        },
]
export default new Router({
  routes:routes,
  mode:'history'   /*hash*/
})
