<template>
  <div class="flex items-center" dir="ltr">
    <span class="price-label"></span>
    <span class="sample_farsi_digits">{{ amount }}</span>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

interface Props {
  amount: number
}

defineProps<Props>();
</script>
