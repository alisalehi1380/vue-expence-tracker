<template>
  <div class="flex shadow mb-4 justify-evenly py-4 text-center">
    <div>
      <h4 class="mb-1 text-sm">درآمد</h4>
      <div class="flex items-center">
        <p class="text-green-600 sample_farsi_digits">300,000</p>
        <span class="price-label"></span>
        <p class="text-green-600 sample_farsi_digits hidden">{{ income }}</p>
      </div>
    </div>
      <div class="h-max-2 bg-gray-200 w-[1px] "></div>
    <div>
      <h4 class="mb-1 text-sm">مخارج</h4>
      <div class="flex items-center">
        <p class="text-red-600 sample_farsi_digits">12,000</p>
        <p class="text-red-600 sample_farsi_digits hidden">{{ expenses }}</p>
        <span class="price-label"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

interface Props {
  income: Number;
  expenses: Number;
}

defineProps<Props>();
</script>
