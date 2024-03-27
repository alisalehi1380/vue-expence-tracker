<template>
  <h3 class="mb-1 text-sm font-medium">لیست تراکنش ها</h3>
  <ul class="mb-4 space-y-2">
    <template v-for="transaction in transactions">
      <ListItem :id="transaction.id" :amount="transaction.amount" :title="transaction.text" />
    </template>
  </ul>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from 'vue';
import ListItem from "@/components/global/ListItem.vue";

interface Transaction {
  id: string;
  text: string;
  amount: number;
}

interface Props {
  transactions: Transaction[];
}

defineProps<Props>();

const emit = defineEmits(['transactionDeleted']);

const deleteTransaction = (id) => {
  emit('transactionDeleted', id);
};
</script>
