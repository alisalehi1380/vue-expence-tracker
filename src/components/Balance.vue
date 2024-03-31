<template>
  <div class="flex justify-center items-center mb-4">
    <h4 class="pl-1 text-sm font-medium dark:text-stone-300">تراز شما:</h4>
    <toman-icon :amount="balance" :customClass="balance > 0 ? 'text-green-600' : 'text-red-600'" />
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useExpenseStore} from "@/stores/ExpenseStore";
import TomanIcon from "@/components/global/icons/TomanIcon.vue";

const useExpense = useExpenseStore();
const balance = computed(() => {
  return useExpense.balance();
})
</script>
