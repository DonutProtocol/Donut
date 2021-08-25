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
        component: () => import('../pages/Chain/Chain.vue'),
    },
    {
        path: '/CreditAst',
        component: () => import('../pages/CreditAst/CreditAst.vue'),
    },
    {
        path: '/Transaction',
        component: () => import('../pagesA/Transaction/Transaction.vue'),
    },
    {
        path: '/Address',
        component: () => import('../pagesA/Address/Address.vue'),
    },
    {
        path: '/balance',
        component: () => import('../pagesA/balance/balance.vue'),
    },
    {
        path: '/tionInfo',
        component: () => import('../pagesA/tionInfo/tionInfo.vue'),
    }
]
})