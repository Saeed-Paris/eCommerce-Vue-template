<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
const modules = [Pagination, Navigation];
</script>
<template>
  <section class="home-banner-slider">
    <swiper
      class="h-full"
      :loop="true"
      dir="rtl"
      :slides-per-view="1"
      :space-between="0"
      :modules="modules"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
    >
      <swiper-slide v-for="(item, index) in 3" :key="index"
        ><div
          class="absolute top-1/2 -translate-y-1/2 right-20 flex flex-col gap-7"
        >
          <span class="-text--c-secondary-variant">کالکشن تابستانه</span>
          <h3 class="text-2xl font-semibold">
            لباس های تابستانه در تمامی رنگ ها موجود شد
          </h3>
          <button class="px-12 py-4 bg--c-primary text-white w-fit">
            مشاهده
          </button>
        </div>
        <img src="/src/assets/images/banner.png" alt=""
      /></swiper-slide>
    </swiper>
  </section>
</template>
<style scoped>
button {
  background-color: #5ece7b;
}
</style>
<style>
.home-banner-slider .swiper-button-prev:after,
.home-banner-slider .swiper-button-next:after {
  font-size: 30px;
  padding: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #000;
  font-weight: bold;
}
.home-banner-slider .swiper-button-disabled {
  opacity: unset;
  cursor: pointer;
  pointer-events: unset;
}

.swiper-pagination-bullet-active {
  background-color: #5ece7b !important;
}
</style>
