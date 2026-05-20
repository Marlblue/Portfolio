import { ViteSSG } from "vite-ssg";
import "./assets/styles/index.scss";
import App from "./App.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { routes, setRouter } from "./router";
import { createHead } from "@unhead/vue/legacy";

gsap.registerPlugin(ScrollTrigger);

export const createApp = ViteSSG(
  App,
  { routes, base: "/Portfolio/" },
  ({ app, router }) => {
    const head = createHead();
    app.use(head);
    setRouter(router);
  }
);
