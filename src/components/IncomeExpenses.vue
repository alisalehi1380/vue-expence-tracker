<template>
  <div class="flex shadow mb-4 justify-evenly py-4 text-center">
    <div>
      <h4 class="mb-1 text-sm dark:text-stone-300">درآمد</h4>
      <toman-icon :amount="income" customClass="text-green-600" />
    </div>
    <div class="h-max-2 bg-gray-200 w-[1px]"></div>
    <div>
      <h4 class="mb-1 text-sm dark:text-stone-300">مخارج</h4>
      <toman-icon :amount="expense" customClass="text-red-600" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import TomanIcon from "@/components/global/icons/TomanIcon.vue";
import {useExpenseStore} from "@/stores/ExpenseStore";

const useExpense = useExpenseStore();

const income = computed(() => {
  return useExpense.totalIncome();
});
const expense = computed(() => {
  return useExpense.totalExpense();
});

</script>
