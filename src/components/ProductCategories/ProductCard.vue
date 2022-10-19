<script setup lang="ts">
import type { ProductItem } from "@/types/index";
const props = defineProps<{
  product: ProductItem;
}>();
</script>

<template>
  <routerLink to="">
    <img :src="product.imageURL" alt="" />
    <div>
      <div>{{ product.name }}</div>
      <div>{{ product.price }} تومن</div>
    </div>
  </routerLink>
</template>

<style scoped></style>
