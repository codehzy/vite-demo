import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@pages/Product/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "product",
    component: Home,
  },
  {
    path: "/shoppingCart",
    name: "shoppingCart",
    component: () => import("@pages/ShoppingCart/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
