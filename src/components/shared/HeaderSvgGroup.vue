<script setup lang="ts">
import HeartSvg from "../svg/HeartSvg.vue";
import UserSvg from "../svg/UserSvg.vue";
import CartSvg from "../svg/CartSvg.vue";
</script>

<template>
  <div class="flex gap-8">
    <UserSvg class="cursor-pointer" />
    <HeartSvg class="self-end cursor-pointer" />
    <CartSvg class="cursor-pointer" />
  </div>
</template>

<style scoped></style>
