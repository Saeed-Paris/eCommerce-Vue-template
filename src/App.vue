<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/shared/MainHeader.vue";
import MainFooter from "./components/shared/MainFooter.vue";
</script>

<template>
  <!-- <MainHeader /> -->
  <main class="m-auto w-10/12">
    <RouterView />
  </main>
  <footer class="-bg--c-dark-variant">
    <MainFooter class="m-auto w-10/12" />
  </footer>
</template>

<style scoped></style>
