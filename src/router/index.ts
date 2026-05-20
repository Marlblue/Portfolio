import type { Router } from "vue-router";
import Home from "../features/home/components/Home.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/project/:id",
    name: "Project",
    component: () => import("../features/projects/components/Project.vue"),
  },
];

export let router: Router;

export function setRouter(r: Router) {
  router = r;
}
