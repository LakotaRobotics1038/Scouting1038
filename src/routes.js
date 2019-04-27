// src/router.js

    // set up ===========================
    var HomeComponent   = require('./components/HomeComponent')
    var CreateComponent = require('./components/CreateComponent')
    var IndexComponent  = require('./components/IndexComponent')
    var EditComponent   = require('./components/EditComponent')

    // routes ===========================
    export const routes = [
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
    ]
