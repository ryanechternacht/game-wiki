import Vue from "vue";
import VueRouter from "vue-router";

import CardList from "@/views/CardList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "card-list",
    component: CardList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
