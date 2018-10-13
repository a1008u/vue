import Vue from "vue";
import VueRouter from "vue-router";
import home from "./components/home/home";
import ch1 from "./components/chap1/ch1";
import ch2_1 from "./components/chap2/ch2-1";
import ch2_2 from "./components/chap2/ch2-2";
import ch3_1 from "./components/chap3/ch3-1";
import ch3_2 from "./components/chap3/ch3-2";
import ch4_1 from "./components/chap4/ch4-1";
import ch4_2 from "./components/chap4/ch4-2";

import ch5_1 from "./components/chap5/ch5-1";
import ch5_2 from "./components/chap5/ch5-2";
import ch5_3 from "./components/chap5/ch5-3";
import ch5_4 from "./components/chap5/ch5-4";
import ch5_5 from "./components/chap5/ch5-5";

import ch6_1 from "./components/chap6/ch6-1";
import ch6_2 from "./components/chap6/ch6-2";
import ch6_3 from "./components/chap6/ch6-3";
import ch6_4 from "./components/chap6/ch6-4";
import ch6_5 from "./components/chap6/ch6-5";
import ch6_6 from "./components/chap6/ch6-6";
import ch6_7 from "./components/chap6/ch6-7";
import ch6_8 from "./components/chap6/ch6-8";

import ch8_1 from "./components/chap8/ch8-1";
import ch8_2 from "./components/chap8/ch8-2";

import use from "./views/use";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "use",
    component: use
  },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/ch1",
    name: "chap1",
    component: ch1
  },
  {
    path: "/ch2-1",
    name: "chap2-1",
    component: ch2_1
  },
  {
    path: "/ch2-2",
    name: "chap2-2",
    component: ch2_2
  },
  {
    path: "/ch3-1",
    name: "chap3-1",
    component: ch3_1
  },
  {
    path: "/ch3-2",
    name: "chap3-2",
    component: ch3_2
  },
  {
    path: "/ch4-1",
    name: "chap4-1",
    component: ch4_1
  },
  {
    path: "/ch4-2",
    name: "chap4-2",
    component: ch4_2
  },
  {
    path: "/ch5-1",
    name: "chap5-1",
    component: ch5_1
  },
  {
    path: "/ch5-2",
    name: "chap5-2",
    component: ch5_2
  },
  {
    path: "/ch5-3",
    name: "chap5-3",
    component: ch5_3
  },
  {
    path: "/ch5-4",
    name: "chap5-4",
    component: ch5_4
  },
  {
    path: "/ch5-5",
    name: "chap5-5",
    component: ch5_5
  },
  {
    path: "/ch6-1",
    name: "chap6-1",
    component: ch6_1
  },
  {
    path: "/ch6-2",
    name: "chap6-2",
    component: ch6_2
  },
  {
    path: "/ch6-3",
    name: "chap6-3",
    component: ch6_3
  },
  {
    path: "/ch6-4",
    name: "chap6-4",
    component: ch6_4
  },
  {
    path: "/ch6-5",
    name: "chap6-5",
    component: ch6_5
  },
  {
    path: "/ch6-6",
    name: "chap6-6",
    component: ch6_6
  },
  {
    path: "/ch6-7",
    name: "chap6-7",
    component: ch6_7
  },
  {
    path: "/ch6-8",
    name: "chap6-8",
    component: ch6_8
  },
  {
    path: "/ch8-1",
    name: "chap8-1",
    component: ch8_1
  },
  {
    path: "/ch8-2",
    name: "chap8-2",
    component: ch8_2
  }
  // {
  //   path: "/terms",
  //   name: "terms",
  //   component: Terms
  // }
];

export default new VueRouter({
  routes: routes
});
