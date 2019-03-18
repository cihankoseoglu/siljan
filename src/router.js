import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Dashboard from './views/Dashboard.vue';
import Settings from './views/Settings.vue';
import Signin from './views/Signin.vue';
import Signup from './views/Signup.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ],
});


// router.beforeEach((to, from, next) => {
//   const { currentUser } = firebase.auth();
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) {
//     next('signin');
//   } else if (!requiresAuth && currentUser) {
//     next('dashboard');
//   } else {
//     next();
//   }
// });

export default router;
