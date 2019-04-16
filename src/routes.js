//一级路由
import Home from './components/Home'
import Admin from './components/Admin'
import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import About from './components/About/About'
import OrderingGuide from './components/About/OrderingGuide'

//二级路由
import callus from './components/About/callus'
import delivery from './components/About/delivery'
import historyd from './components/About/historyd'
import news from './components/About/news'
//三级路由
import phone from './components/About/callus/phone'
import person from './components/About/callus/person'


export const routes = [
  {
    path: '/', name: 'homelink', components: {
      default: Home,
      'delivery': delivery,
      'historyd': historyd,
      'news': news
    }
  },
  {path: '/menu', name: 'menulink', component: Menu},
  {
    path: '/about', name: 'aboutlink', redirect: '/about/callus', component: About, children: [
      {
        path: '/about/callus', name: 'calluslink', redirect: '/phone', component: callus, children: [
          {path: '/phone', name: 'phonelink', component: phone},
          {path: '/person', name: 'personlink', component: person},
        ]
      },
      {path: '/delivery', name: 'deliverylink', component: delivery},
      {path: '/historyd', name: 'historydlink', component: historyd},
      {path: '/news', name: 'newslink', component: news},
      {path: '/OrderingGuide', name: 'OrderingGuidelink', component: OrderingGuide},
    ]
  },
  {
    path: '/admin', name: 'adminlink', component: Admin,
    //beforeEnter:(to,from,next)=>{
    //路由独享
    // alert("您还没有登陆，不能使用此功能");
    // next(false )
    //判断store.gettes.isLogin ===false
    //    if(to.path =='/login' || to.path == '/register'){
    //   next();
    //   }else {
    //      alert("还没有登陆，请先登陆！");
    //      next('/login');
    //   }
    //
    //}
  },
  {path: '/login', name: 'loginlink', component: Login},
  {path: '/register', name: 'registerlink', component: Register},
  {path: '/header', name: 'headerlink', component: Header},
  {path: '*', redirect: '/'} //如果用户输错路由，默认跳入主页

]
