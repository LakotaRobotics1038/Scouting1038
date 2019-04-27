// src/main.js

    // set up ===========================
    var Vue       = require('vue')
    var App       = require('./App.vue')
    var VueRouter = require('vue-router')
    var routes    = require('./routes.js')
    import 'bootstrap/dist/css/bootstrap.min.css'

    // configuration ====================
    Vue.config.productionTip = false
    Vue.use(VueRouter)

    // app ================================
    let router = new VueRouter({ mode: 'history', routes: routes})
    var app = new Vue({
      el: '#app',
      router,
      'app-home': App
    })
