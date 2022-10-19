import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductCategories from "../views/ProductCategories.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Products",
      name: "ProductCategories",
      component: ProductCategories,
    },
  ],
});

export default router;
