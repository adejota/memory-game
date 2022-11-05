import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nickname from '../views/Nickname.vue'
import Difficulty from '../views/Difficulty.vue'
import Theme from '../views/Theme.vue'
import Game from '../views/Game.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/nickname',
        name: 'Nickname',
        component: Nickname
    },
    {
        path: '/difficulty',
        name: 'Difficulty',
        component: Difficulty
    },
    {
        path: '/theme',
        name: 'Theme',
        component: Theme
    },
    {
        path: '/game',
        name: 'Game',
        component: Game
    },
    {
        path: '*',
        redirect: '/'
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
