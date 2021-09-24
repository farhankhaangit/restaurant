import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/SignUp'
    },
    {
        name: 'Login',
        component: Login,
        path: '/Login'
    },
    {
        name: 'AddRestaurant',
        component: AddRestaurant,
        path: '/AddRestaurant'
    },
    {
        name: 'UpdateRestaurant',
        component: UpdateRestaurant,
        path: '/UpdateRestaurant/:id'
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router




