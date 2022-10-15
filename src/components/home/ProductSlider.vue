<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper and modules
import { Navigation } from "swiper";

// Now you can use Swiper

// Install modules
const modules = [Navigation];
</script>

<template>
  <swiper
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide
    ><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide
    ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
    ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
    ><swiper-slide>Slide 9</swiper-slide>
    <div class="swiper-button-prev">X</div>
    <div class="swiper-button-next">X</div>
  </swiper>
</template>

<style scoped></style>
