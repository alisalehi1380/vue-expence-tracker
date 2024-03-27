<template>
  <div class="flex items-center" dir="ltr">
    <span class="price-label"></span>
    <span
        class="sample_farsi_digits"
        :class="customClass"
    >{{ absoluteNumber }}</span>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';


interface Props {
  amount: number
  customClass?: string
}

const props = defineProps<Props>();
const absoluteNumber = Math.abs(props.amount);
</script>
