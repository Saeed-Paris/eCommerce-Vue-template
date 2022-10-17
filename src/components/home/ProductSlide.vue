<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4 p-4 product-slide mb-8 mt-4">
    <div class="overflow-hidden">
      <figure>
        <img src="/src/assets/images/ProductB.png" alt="" />
      </figure>
    </div>
    <div>
      <p>دورس زنانه کد ۱۴</p>
      <span>price</span>
      <div>stars</div>
    </div>
  </div>
</template>

<style scoped>
.product-slide {
  overflow: visible;
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.product-slide:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.product-slide:hover img {
  transform: scale(1.2);
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.product-slide img {
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.product-slide figure {
  overflow: hidden;
}
</style>
