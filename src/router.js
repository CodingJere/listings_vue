import { createRouter, createWebHistory } from "vue-router";
import CreateListing from "./components/admin/CreateListing.vue";

const routes = [{ path: "/create", component: CreateListing }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
