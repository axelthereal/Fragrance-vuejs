import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/Homeview.vue";
import AboutView from "../views/Aboutview.vue";

const appname = "Fragrance";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      component: HomeView,
      meta: { title: appname + " | " + "Home" },
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: { title: appname + " | " + "Home" },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: { title: appname + " | " + "About" },
    },
  ],
});

export default router;
