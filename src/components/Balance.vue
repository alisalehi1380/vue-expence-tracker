<template>
  <div class="flex justify-center items-center mb-4">
    <h4 class="pl-1 text-sm font-medium">تراز شما:</h4>
    <div class="flex items-center">
      <span class="sample_farsi_digits font-semibold text-xl text-green-600">500,000</span>
      <span class="price-label"></span>
    </div>
    <span class="sample_farsi_digits font-medium hidden">{{ total }}</span>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

interface Props {
  total: number;
}

defineProps<Props>();
</script>
