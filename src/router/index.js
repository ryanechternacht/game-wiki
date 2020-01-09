import Vue from "vue";
import VueRouter from "vue-router";

import CardList from "@/views/CardList";
import FAQ from "@/views/FAQ";
import FaqLayout from "@/views/faq/FaqLayout";
import FaqHome from "@/views/faq/FaqHome";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "card-list",
    component: CardList
  },
  // {
  //   path: "/faq",
  //   name: "faq",
  //   component: FAQ
  // }
  {
    path: "/faq",
    component: FaqLayout,
    // props: true,
    children: [
      {
        path: "",
        component: FaqHome,
        name: "faq-home"
        // props: true,
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
