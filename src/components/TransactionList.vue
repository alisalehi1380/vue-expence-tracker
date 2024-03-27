<template>
  <h3 class="mb-1 text-sm font-medium">لیست تراکنش ها</h3>
  <ul class="mb-4 space-y-2" dir="ltr">
    <li
        v-for="transaction in transactions"
        :key="transaction.id"
        :class="transaction.amount < 0 ? 'bg-green-50  border-green-600' : 'bg-red-50  border-red-600'"
        class="flex justify-between rounded border p-2"
    >
      <div class="flex items-center">
        <span class="price-label"></span>
        <span class="sample_farsi_digits">{{ transaction.amount }}</span>
      </div>
      <div class="text-sm font-normal">{{ transaction.text }}</div>

<!--      <button class="delete-btn" @click="deleteTransaction(transaction.id)">-->
<!--        x-->
<!--      </button>-->
    </li>
  </ul>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['transactionDeleted']);

const deleteTransaction = (id) => {
  emit('transactionDeleted', id);
};
</script>
