import Vue from 'vue'
import VueRouter from 'vue-router'
import VLogin from '../views/Login.vue'
import VMain from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'Login',
        component: VLogin
    },
    {
        path: '/main',
        name: 'Main',
        component: VMain
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router