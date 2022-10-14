<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/shared/MainHeader.vue";
</script>

<template>
  <MainHeader />
  <main><RouterView /></main>
</template>

<style scoped></style>
