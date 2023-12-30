<script setup>
const w3_close = () => {
    document.getElementById("mySidebar").style.display = "none";
}
</script>
<template>
    <div class="w3-sidebar w3-bar-block" style="display:none" id="mySidebar">
        <button @click="w3_close" class="w3-bar-item w3-button w3-large">&times;</button>
        <router-link to="/home" class="w3-bar-item w3-button"> Home </router-link>
        <router-link to="/about" class="w3-bar-item w3-button"> About </router-link>
    </div>
</template>