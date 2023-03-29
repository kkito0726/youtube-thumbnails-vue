import { createRouter, createWebHistory } from "vue-router";
import StartPage from "@/pages/StartPage.vue";

const routes = [
  {
    path: "/",
    name: "StartPage",
    comments: StartPage,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
