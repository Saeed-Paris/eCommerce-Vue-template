<script setup lang="ts">
import type { ProductItem } from "@/types/index";
import SkeletonCard from "./skeletonCard.vue";
const props = defineProps<{
  product: ProductItem;
}>();
</script>

<template>
  <!-- <SkeletonCard /> -->
  <div class="card w-fit justify-self-center">
    <img :src="product.imageURL" class="image" alt="" />
    <div class="content">
      <h4>{{ product.name }}</h4>
      <div class="description">
        <span>{{ product.price }}</span> تومن
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
}
.card {
}
.description {
  text-align: center;
  color: gray;
}
.content h4 {
  text-align: center;
}
.description span {
  color: red;
}
</style>
