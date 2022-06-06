import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/Chain'
    },
    {
        path: '/Chain',
        name:'Chain',
        component: () => import('../pages/Chain/Chain.vue'),
        meta: { keepAlive: true }
    },
    {
        path: '/CreditAst',
        name:'CreditAst',
        component: () => import('../pages/CreditAst/CreditAst.vue'),
    },
    {
        path: '/Transaction',
        name:'Transaction',
        component: () => import('../pagesA/Transaction/Transaction.vue'),
    },
    {
        path: '/Address',
        name:'Address',
        component: () => import('../pagesA/Address/Address.vue'),
    },
    {
        path: '/balance',
        name:'balance',
        component: () => import('../pagesA/balance/balance.vue'),
    },
    {
        path: '/tionInfo',
        name:'tionInfo',
        component: () => import('../pagesA/tionInfo/tionInfo.vue'),
    }
]
})