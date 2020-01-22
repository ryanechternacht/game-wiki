import Vue from "vue";
import VueRouter from "vue-router";

import CardList from "@/views/CardList";
import FaqLayout from "@/views/faq/FaqLayout";
import FaqHome from "@/views/faq/FaqHome";
import FaqSearchResults from "@/views/faq/FaqSearchResults";
import FaqPage from "@/views/faq/FaqPage";
import FaqPageEdit from "@/views/faq/FaqPageEdit";

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
        component: FaqSearchResults,
        name: "faq-search-results",
        props: true
      },
      {
        path: "entry/new",
        component: FaqPageEdit,
        name: "faq-page-new",
        props: {
          id: 0
        }
      },
      {
        path: "entry/:id",
        component: FaqPage,
        name: "faq-page",
        props: true
      },
      {
        path: "entry/:id/edit",
        component: FaqPageEdit,
        name: "faq-page-edit",
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
