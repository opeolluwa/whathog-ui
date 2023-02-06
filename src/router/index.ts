import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from "@/views/IndexView.vue";
import HomeView from "@/views/HomeView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: () => import('@/views/auth/AuthLayout.vue'),
      children: [
        {
          path: '',
          name: 'Login',
          component: () => import('@/views/auth/LoginView.vue'),
        },
        {
          path: 'sign-up',
          name: 'Signup',
          component: () => import('@/views/auth/SignUpView.vue'),
        },
        {
          path: '/forgotten-password',
          name: 'AccountReset',
          component: () => import('@/views/auth/AccountResetView.vue'),
        },
      ]
    },
    {
      path: "/home",
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
