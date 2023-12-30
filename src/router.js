import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes/web";

export const router = createRouter({
    history: createWebHistory(),
    routes
})