import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./routes";

Vue.use(VueRouter)


const router = new VueRouter(
  {
    routes,
    mode: 'history',
    scrollBehavior(to, from, savePosition) {
      // return{x:0,y:100}
      //return{selector:'btn'}
      //当回退时，显示的是上次滚动位置
      if (savePosition) {
        return savePosition
      } else {
        return {x: 0, y: 0}
      }

    }

  })


//全局守卫
//router.beforeEach((to,from,next)=>{
//alert("还没有登陆，请先登陆！")
//判断store.gettes.isLogin ===false
// if(to.path =='/login' || to.path == '/register'){
//next();
//}else {
//   alert("还没有登陆，请先登陆！");
//   next('/login');
//}
//})

//后置钩子，当跳入指定页面，不论怎样都会执行
//router.afterEach((to,from)=>{
//alert("后置钩子")
//})

//
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
