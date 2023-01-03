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
          path: "/support",
          name: "support",
          component: () => import("@/views/Support.vue"),
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
    }
  ],
});


export default router;
