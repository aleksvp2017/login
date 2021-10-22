import VueRouter from 'vue-router' 
import Vue from 'vue' 
import Login from './views/login/Login.vue'
import Unprotected from './views/unprotected/Unprotected.vue'
import Home from './views/home/Home.vue'

var routes = [
   { path: '/', name: 'Login', component: Login, requireAuth: false},
   { path: '/home', name: 'Home', component: Home, requireAuth: true},
   { path: '/unprotected', name: 'Unprotected', component: Unprotected, requireAuth: false},
];


Vue.use(VueRouter)
const router = new VueRouter({ routes});

function getRoute(name){
    return routes.filter(router => router.name == name)[0]
}

function routeRequireAuth(path){
    let secureRoute = routes.filter(route => route.requireAuth && route.path == path) 
    return secureRoute.length > 0 
}

export {
    router, routes, getRoute, routeRequireAuth
}