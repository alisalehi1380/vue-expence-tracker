<template>
  <div class="flex shadow inc-exp-container">
    <div>
      <h4>درامد</h4>
      <p class="text-red-600">+${{ income }}</p>
    </div>
    <div>
      <h4>هزینه</h4>
      <p class="money minus">-${{ expenses }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
});
</script>
