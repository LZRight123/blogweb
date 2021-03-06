import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/Login.vue")
      },
      {
        path: "/register",
        name: "register",
        component: () => import("@/views/Register.vue")
      }
    ]
  },
  {
    path: "/MobileApp",
    name: "MobileApp",
    component: () => import("@/views/MobileApp.vue"),
    redirect: "/MobileApp/mainpage",
    children: [
      {
        path: "mainpage",
        name: "mainpage",
        component: () => import("@/views/tabbar/MainPage.vue")
      },
      {
        path: "member",
        name: "member",
        component: () => import("@/views/tabbar/Member.vue")
      },
      {
        path: "shopCar",
        name: "shopCar",
        component: () => import("@/views/tabbar/ShopCar.vue")
      },
      {
        path: "search",
        name: "search",
        component: () => import("@/views/tabbar/Search.vue")
      },
      {
        path: "mainpage/newslist",
        name: "newslist",
        component: () => import("@/views/news/NewsList.vue")
      },
      {
        path: "home/newsinfo/:id",
        name: "newsinfo",
        component: () => import("../views/news/NewsInfo.vue")
      },
      {
        path: "mainpage/images",
        name: "images",
        component: () => import("../views/imageShare/ImageSahre.vue")
      }
    ]
  }
  

  // {
  //     path: "/about",
  //     name: "about",
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //         import ( /* webpackChunkName: "about" */ "./views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
});

export default router;
