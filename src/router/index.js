import { createRouter, createWebHistory } from "vue-router";
import About from "@/pages/AboutView.vue";
import Home from "@/pages/HomeView.vue";
import Services from "@/pages/ServicesView.vue";
import Blog from "@/pages/BlogView.vue";
import Contact from "@/pages/ContactView.vue";

let routes = [
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/services",
    name: "Servies",
    component: Services,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export default router;
