<script setup lang="ts">
import SearchSvg from "../svg/SearchSvg.vue";
</script>

<template>
  <div class="relative border-b-2 h-8">
    <SearchSvg class="absolute left-0 cursor-pointer" />
    <input
      placeholder="جستجو"
      type="text"
      class="w-60 place-content-center border-0 focus:outline-none"
    />
  </div>
</template>

<style scoped></style>
