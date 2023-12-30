import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import './style.css'
import App from './App.vue'
import { router } from "./router";

const app = createApp(App)

router.beforeEach((to) => {
    document.title = `${to.name} | Vue Router` || 'Vue Router'
    return
})

app.use(router)
app.mount('#app')
