import { createRouter, createWebHistory } from 'vue-router'
import RegistorView from '../views/RegisterView.vue'
import lobbyView from '../views/lobbyView.vue'
import DepositView from '../views/DepositView.vue'
import DepositWithView from '@/views/DepositWithView.vue'
import ForgotView from '../views/ForgotView.vue'
import LobbyRoundView from "../views/LobbyRoundView.vue"
import LobbyScreenView from "../views/LobbyScreenView"
import LobbyRoundSeView from "../views/LobbyRoundSeView.vue"
const routes = [
  {
    path: '/',
    name: 'registor',
    component: RegistorView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: lobbyView
  },
  {
    path: '/Deposit',
    name: 'Deposit',
    component: DepositView
  },
  {
    path: '/DepositWith',
    name: 'DepositWith',
    component: DepositWithView
  },
  {
    path: '/ForgotView',
    name: 'ForgotView',
    component: ForgotView
  }
  ,
  {
    path: '/LobbyRound',
    name: 'LobbyRoundVIew',
    component: LobbyRoundView
  },
  {
    path: '/Lobbyscreen',
    name: 'LobbySCreenView',
    component: LobbyScreenView
  }
  ,
  {
    path: '/LobbyRound2',
    name: 'LobbyRoundSeView',
    component: LobbyRoundSeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
