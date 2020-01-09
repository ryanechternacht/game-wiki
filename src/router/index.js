import Vue from "vue";
import VueRouter from "vue-router";

import CardList from "@/views/CardList";
import FAQ from "@/views/FAQ";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "card-list",
    component: CardList
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQ
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
