import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: { name: "login" },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      requireAuth: false,
      title: "登陆页",
      key: "login",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
