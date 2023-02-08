import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from "@/views/IndexView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "splash",
      component: () => import("@/views/SplashScreen.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/views/auth/AuthLayout.vue"),
      children: [
        {
          path: "",
          name: "login",
          component: () => import("@/views/auth/LoginView.vue"),
        },
        {
          path: "sign-up",
          name: "sign-up",
          component: () => import("@/views/auth/SignUpView.vue"),
        },
        {
          path: "forgotten-password",
          name: "forgotten-password",
          component: () => import("@/views/auth/PasswordResetView.vue"),
        },
        {
          path: "confirm-otp",
          name: "confirm-otp",
          component: () => import("@/views/auth/ConfirmOtpView.vue"),
        },
        {
          path: "confirm-reset-otp",
          name: "confirm-reset-otp",
          component: () => import("@/views/auth/ConfirmResetPasswordOTP.vue"),
        },
        {
          path: "set-new-password",
          name: "set-new-password",
          component: () => import("@/views/auth/SetNewPasswordView.vue"),
        },
      ],
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
      ],
    },
  ],
});

export default router;
