<script setup lang="ts">
import type { ProductItem, NestedList } from "@/types/index";
import ProductCard from "../components/ProductCategories/ProductCard.vue";
import AccordingItem from "../components/TailWindComponents/AccordingItem.vue";
import { ref } from "vue";
let nestedList: NestedList[] = [
  {
    id: 1,
    name: "1",
    children: [
      { id: 11, name: "11", children: [] },
      { id: 12, name: "12", children: [] },
      { id: 13, name: "13", children: [] },
    ],
  },
  {
    id: 2,
    name: "2",
    children: [
      { id: 21, name: "21", children: [] },
      { id: 22, name: "22", children: [] },
      {
        id: 23,
        name: "23",
        children: [
          { id: 231, name: "231", children: [] },
          { id: 232, name: "232", children: [] },
          { id: 233, name: "233", children: [] },
          {
            id: 224,
            name: "224",
            children: [
              { id: 2241, name: "2241", children: [] },
              { id: 2242, name: "2242", children: [] },
              {
                id: 2243,
                name: "2243",
                children: [
                  { id: 22431, name: "22431", children: [] },
                  { id: 22432, name: "22432", children: [] },
                  { id: 22433, name: "22433", children: [] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "3",
    children: [
      { id: 31, name: "31", children: [] },
      { id: 32, name: "32", children: [] },
      { id: 33, name: "33", children: [] },
    ],
  },
];
let productList: ProductItem[] = [
  {
    name: "هودی زنانه کد ۱۲",
    imageURL: "/src/assets/images/mock-product.jpg",
    price: 129000,
  },
  {
    name: "هودی زنانه کد ۱۲",
    imageURL: "/src/assets/images/mock-product.jpg",
    price: 129000,
  },
  {
    name: "هودی زنانه کد ۱۲",
    imageURL: "/src/assets/images/mock-product.jpg",
    price: 129000,
  },
  {
    name: "هودی زنانه کد ۱۲",
    imageURL: "/src/assets/images/mock-product.jpg",
    price: 129000,
  },
  {
    name: "هودی زنانه کد ۱۲",
    imageURL: "/src/assets/images/mock-product.jpg",
    price: 129000,
  },
  {
    name: "هودی زنانه کد ۱۲",
    imageURL: "/src/assets/images/mock-product.jpg",
    price: 129000,
  },
  {
    name: "هودی زنانه کد ۱۲",
    imageURL: "/src/assets/images/mock-product.jpg",
    price: 129000,
  },
  {
    name: "هودی زنانه کد ۱۲",
    imageURL: "/src/assets/images/mock-product.jpg",
    price: 129000,
  },
  {
    name: "هودی زنانه کد ۱۲",
    imageURL: "/src/assets/images/mock-product.jpg",
    price: 129000,
  },
];
let deepLen = ref(0);
</script>

<template>
  <section class="grid w-17/20vwvw gap-x-5 lg:grid-cols-product-category">
    <div class="max-w-sm hidden lg:block">
      <div>دسته بندی</div>
      <div>
        <div class="accordion" :id="`accordion${deepLen}`">
          <AccordingItem
            :list="item"
            :deep="deepLen"
            v-for="(item, i) in nestedList"
            :key="i"
          />
        </div>
      </div>
    </div>
    <div class="w-full">
      <div>
        <div>
          <span>فیلنر</span>
          <span>دسته بندی بر اساس :</span>
        </div>
        <div>۲۹۳ کالا</div>
      </div>
      <div
        class="grid tab:grid-cols-3 mx-auto grid-cols-2 gap-x-4 md:gap-x-8 desktop:max-w-85vw tab:max-w-lg lg:max-w-xlg md:max-w-md"
      >
        <ProductCard
          v-for="(product, i) in productList"
          :key="i"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
