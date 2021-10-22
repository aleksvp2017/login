import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {router, routeRequireAuth} from './routes.js'
import store from './store' 


manageProtectedEndPoints()

new Vue({
  el: '#app',
  store,
  router,
  vuetify,
  render: h => h(App)
})


function manageProtectedEndPoints() {
  updateSessionStateUsingLocalStorage() 
  router.beforeEach((to, from, next) => {
    if (routeRequireAuth(to.fullPath)) {
      if (!store.getters.loggedIn) {
        next('/')
        return
      }
    }
    if (to.fullPath === '/') {
      if (store.getters.loggedIn) {
        next('/home')
        return
      }
    }
    next()
  })

}


function updateSessionStateUsingLocalStorage() {
  const userString = localStorage.getItem(store.getters.cookieName)
  if (userString) {
    const userData = JSON.parse(userString)
    store.dispatch('ActionSetUser', userData)
  }
}