import { createRouter, createWebHistory } from "vue-router";
import StartPage from "@/pages/StartPage.vue";
import VideoInfoPage from "@/pages/VideoInfoPage.vue";

const routes = [
  {
    path: "/",
    name: "startPage",
    component: StartPage,
    props: true,
  },
  {
    path: "/videoInfo",
    name: "videoInfoPage",
    component: VideoInfoPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
