import * as types from './mutation-types'
import {login} from '../services/Autenticador.js'
import Vue from 'vue' 
import VueResource from 'vue-resource'

Vue.use(VueResource)


export const ActionSetUser = (context, payload) => {
    context.commit(types.SET_USER, payload) 
    localStorage.setItem(context.getters.cookieName, JSON.stringify(payload)) 
    Vue.http.interceptors.push((request, next) => { 
        request.headers.set('Authorization', 'Bearer ' + payload.token)
        request.headers.set('Accept', 'application/json')
        next()
    });
}

export const ActionLogin = (context, payload) => {
    return login(payload).then(res => {
        context.dispatch('ActionSetUser', res)
    })
}

export const ActionLogout = (context, payload) => {
    localStorage.removeItem(context.getters.cookieName) 
    location.reload() 
}

export default{
    ActionSetUser, ActionLogin, ActionLogout
}
