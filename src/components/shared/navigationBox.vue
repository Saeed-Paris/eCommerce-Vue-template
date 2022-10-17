<script setup lang="ts">
import ArrowSvg from "../svg/ArrowSvg.vue";
const props = defineProps({
  isNext: { type: Boolean, default: false },
});
</script>

<template>
  <button :class="`swiper-button-${isNext ? 'next' : 'prev'}`">
    <ArrowSvg />
  </button>
</template>

<style scoped>
.swiper-button-next {
  transform: rotate(180deg);
}
</style>
