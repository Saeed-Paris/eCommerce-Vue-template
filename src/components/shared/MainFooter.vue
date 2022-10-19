<script setup lang="ts">
let footerItems = [
  {
    title: "درباره ما",
    items: ["ما کی هستیم", "کیفیت در جزيیات", "نظرات مشتری"],
  },
  {
    title: "DEPARTMENTS",
    items: ["Women fashion", "Kidswear", "Home"],
  },
  {
    title: "HELP",
    items: ["خدمات مشتری", "راهنمای سایز", "تماس با ما"],
  },
  {
    title: "خرید و تحویل سفارش",
    items: ["شرایط خرید", "گارانتی", "تماس با ما"],
  },
];
</script>

<template>
  <section class="text-white">
    <div class="flex justify-between">
      <div
        class="flex flex-col items-center"
        v-for="(item, i) in footerItems"
        :key="i"
      >
        <h4>{{ item.title }}</h4>
        <router-link to="" v-for="(subItem, j) in item.items" :key="j">{{
          subItem
        }}</router-link>
      </div>
    </div>
    <div></div>
  </section>
</template>

<style scoped></style>
