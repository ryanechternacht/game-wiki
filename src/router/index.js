import Vue from "vue";
import VueRouter from "vue-router";

import CardList from "@/views/CardList";
import FaqLayout from "@/views/faq/FaqLayout";
import FaqHome from "@/views/faq/FaqHome";
import FaqSearch from "@/views/faq/FaqSearch";
import FaqPage from "@/views/faq/FaqPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "card-list",
    component: CardList
  },
  {
    path: "/faq",
    component: FaqLayout,
    name: "faq",
    props: true,
    children: [
      {
        path: "",
        component: FaqHome,
        name: "faq-home"
        // props: true,
      },
      {
        path: "search/:term",
        component: FaqSearch,
        name: "faq-search",
        props: true
      },
      {
        path: "entry/:id",
        component: FaqPage,
        name: "faq-page",
        props: true
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
