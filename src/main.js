// src/main.js

    // set up ===========================
    var Vue             = require('vue')
    var App             = require('./App.vue')
    var VueRouter       = require('vue-router')
    var HomeComponent   = require('./components/HomeComponent')
    var CreateComponent = require('./components/CreateComponent')
    var IndexComponent  = require('./components/IndexComponent')
    var EditComponent   = require('./components/EditComponent')
    import 'bootstrap/dist/css/bootstrap.min.css'

    // configuration ====================
    Vue.use(VueRouter)
    Vue.config.productionTip = false

    // routes ===========================

    const routes = {
      {
        name: 'home',
        path: '/',
        component: HomeComponent
      },
      {
        name: 'create',
        path: '/create',
        component: 'CreateComponent'
      },
      {
        name: 'teams',
        path: '/teams',
        component: IndexComponent
      },
      {
        name: 'edit',
        path: '/edit/:id',
        component: 'EditComponent'
      }
    }

    // app ================================
    const router = new VueRouter({ mode: 'history', routes: routes})

    new Vue(Vue.util.extend({ router }, App)).$mount('#app')
