import { RouteRecordRaw } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import MainPage from "@/views/MainPage.vue";

const pages: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/about",
        name: "about",
        component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
    },
    {
        path: "/signup",
        name: "signUp",
        component: SignUp
    },
    {
        path: "/signin",
        name: "signIn",
        component: SignIn
    },
    {
        path: "/main",
        name: "mainPage",
        component: MainPage
    }
];

export default pages;
