<template>
  <ul class="mb-4 space-y-2">
    <template v-for="transaction in expenseStore.expenseList">
      <ListItem :item="transaction" />
    </template>
  </ul>
</template>

<script setup lang="ts">
import ListItem from "@/components/global/ListItem.vue";
import {useExpenseStore} from "@/stores/ExpenseStore";

const expenseStore = useExpenseStore();

await expenseStore.fetchExpenses();
</script>
