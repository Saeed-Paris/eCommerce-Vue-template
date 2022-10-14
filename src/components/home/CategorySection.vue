<script setup lang="ts">
import type { HomeCategoryItems } from "@/types/index";
let gridItems: HomeCategoryItems[] = [
  // row [start , end] , col:[start , end]
  { row: [1, 9], col: [1, 5], image: "/src/assets/images/bannerF.png" },
  { row: [1, 6], col: [5, 8], image: "/src/assets/images/bannerE.png" },
  { row: [1, 6], col: [8, 11], image: "/src/assets/images/bannerG.png" },
  { row: [6, 9], col: [5, 11], image: "/src/assets/images/bannerK.png" },
];
</script>
<template>
  <section class="h-screen mt-20 grid grid-cols-10 grid-rows-8 gap-4">
    <router-link
      to="qew"
      v-for="(item, i) in gridItems"
      :key="i"
      :class="`
    col-start-${item.col[0]}
    col-end-${item.col[1]}
    row-start-${item.row[0]}
    row-end-${item.row[1]}`"
    >
      <img class="w-full h-full" :src="item.image" alt="" />
    </router-link>
  </section>
</template>
