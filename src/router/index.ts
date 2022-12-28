import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from "@/views/IndexView.vue";
import HomeView from "@/views/HomeView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: BaseLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "/bot",
          name: "bot",
          component: () => import("@/views/Bot.vue"),
        },
        {
          path: "/faq",
          name: "faq",
          component: () => import("@/views/Faq.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/About.vue"),
        },
        {
          path: "/settings",
          name: "settings",
          component: () => import("@/views/Settings.vue"),
        },
      ]
    },


    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

// console.log({ routes: JSON.stringify(router.getRoutes()) });

// router.
//   beforeEach((to, from, next) => {
//     const store = useAuthStore()
//     if (to.meta.requiresAuth && !store.isAuthenticated) {
//       next({
//         name: 'login'
//       })
//     } else {
//       next()
//     }
//   })

export default router;
