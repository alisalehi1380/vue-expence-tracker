<template>
  <div class="flex items-center" dir="ltr">
    <span class="price-label dark:text-stone-300"></span>
    <span
        class="sample_farsi_digits"
        :class="customClass"
    >{{ readableNumber(amount) }}</span>
  </div>
</template>

<script setup lang="ts">
import {readableNumber} from "@/composables/Number";

interface Props {
  amount: string | number
  customClass?: string
}

defineProps<Props>();
</script>
