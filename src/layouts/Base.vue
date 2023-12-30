<script setup>
import Sidebar from './../components/Sidebar.vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const w3_open = () => {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
}
</script>

<template>
    <!-- Sidebar -->
    <Sidebar />
    
    <!-- Page Header -->
    <div class="w3-teal">
        <button class="w3-button w3-teal w3-xlarge" @click="w3_open">☰</button>
        <div class="w3-container">
            <h1>{{ route.name }}</h1>
        </div>
    </div>
    <!-- Page Content -->
    <div class="w3-container">
        <slot></slot>    
    </div>
</template>