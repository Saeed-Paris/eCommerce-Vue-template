<script setup lang="ts">
import LogoSvg from "../svg/LogoSvg.vue";
import HeaderSvgGroup from "./HeaderSvgGroup.vue";
import SearchBar from "./SearchBar.vue";
</script>
<template>
  <header class="flex gap-16 w-10/12 m-auto mt-6 fixed inset-x-0">
    <h1><logo-svg /></h1>
    <nav class="flex gap-8 items-center">
      <router-link to="">مجصولات</router-link>
      <router-link to="">بلاگ</router-link>
      <router-link to="">درباره ما</router-link>
    </nav>
    <div class="flex-1 justify-end flex gap-10 items-center">
      <SearchBar />
      <header-svg-group />
    </div>
  </header>
</template>
<style scoped></style>
