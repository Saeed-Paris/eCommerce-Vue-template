<script setup lang="ts">
import type { NestedList } from "@/types/index";
const props = defineProps<{
  list: NestedList;
  deep: number;
}>();
let nodeMargin = `padding-right:${20 + props.deep * 10}px`;
</script>

<template>
  <div class="accordion-item bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" :id="`heading-${list.id}`">
      <button
        :style="nodeMargin"
        class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#collapse-${list.id}`"
        aria-expanded="false"
        :aria-controls="`collapse-${list.id}`"
      >
        {{ list.name }} +
      </button>
    </h2>
    <div
      :id="`collapse-${list.id}`"
      class="accordion-collapse collapse"
      :aria-labelledby="`heading-${list.id}`"
      data-bs-parent="#accordionExample"
    >
      <template v-if="list.children">
        <div class="accordion" :id="`accordion-${deep}`">
          <AccordingItem
            :list="item"
            :deep="deep + 1"
            v-for="(item, i) in list.children"
            :key="i"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style>
.accordion-button::after {
  content: none !important;
}
</style>
