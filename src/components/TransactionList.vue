<template>
  <h3 class="mb-1 text-sm font-medium">لیست تراکنش ها</h3>
  <ul class="mb-4 space-y-2">
    <template v-for="transaction in expenseStore.expenseList">
      <ListItem :item="transaction"/>
      <!--      // todo don't send each item of transaction! you just send -> :item="transaction"-->
    </template>
  </ul>
</template>

<script setup lang="ts">
import ListItem from "@/components/global/ListItem.vue";
import {useExpenseStore} from "@/stores/ExpenseStore";

const expenseStore = useExpenseStore();

await expenseStore.fetchExpenses();
</script>
