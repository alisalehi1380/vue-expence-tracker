<template>
  <h2 class="text-center mb-4 font-semibold text-xl">حسابگر هزینه</h2>
  <hr class="border-b border-b-gray-50 mb-4" />
  <div class="flex shadow mb-4 justify-evenly py-4 text-center">
    <div>
      <h4 class="mb-1 text-sm">درآمد</h4>
      <TomanIcon :amount="income" customClass="text-green-600" />
    </div>
    <div class="h-max-2 bg-gray-200 w-[1px]"></div>
    <div>
      <h4 class="mb-1 text-sm">مخارج</h4>
      <TomanIcon :amount="expenses" customClass="text-red-600" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import TomanIcon from "@/components/global/icons/TomanIcon.vue";

interface Props {
  income: number
  expenses: number
}

defineProps<Props>();
</script>
