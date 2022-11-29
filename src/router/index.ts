import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue")
    },
    {
      path: "/Products",
      name: "ProductCategories",
      component: () => import("@/views/ProductCategories.vue")

    },
    {
      path: "/Products/:id/:slug?",
      name: "ProductDetails",
      component: () => import("@/views/ProductDetails.vue")

    },
  ],
});

export default router;
