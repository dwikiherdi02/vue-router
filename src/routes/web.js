import NotFoundPage from './../pages/NotFound.vue'

let r = [
    { path: '/', redirect: '/home' },
    { path: '/:pathMatch(.*)*', component: NotFoundPage },
]

// Home
r.push({
    name: 'Home', 
    path: '/home', 
    component: () => import('./../pages/Home.vue')
})

// About
r.push({
    name: 'About', 
    path: '/about', 
    component: () => import('./../pages/About.vue')
})

export let routes = r