<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/shared/MainHeader.vue";
</script>

<template>
  <MainHeader />
  <main class="m-auto w-10/12">
    <RouterView />
  </main>
</template>

<style scoped></style>
