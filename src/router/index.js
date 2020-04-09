import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Stocks from "../views/Stocks.vue";
import Customers from "../views/Customers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/stocks",
    name: "Stocks",
    component: Stocks
  },
  {
    path: "/customers",
    name: "Customers",
    component: Customers
  },
  {
    path: "/invoice",
    name: "Invoice",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Invoice.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
