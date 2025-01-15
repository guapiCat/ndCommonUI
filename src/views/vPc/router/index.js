import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
       return savedPosition;
    } else {
       return {x: 0, y: 0};
    }
 }
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
router.beforeEach((to, from, next) => {
  if (to.path == '/') {
     next();
  }else{
     next();
  }
});

export default router
