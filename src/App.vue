<template>
  <main class="container mx-auto my-auto" style="max-width: 400px; max-height: 600px;">
    <button class="p-2 bg-slate-100 rounded mb-2 dark:text-stone-300 dark:bg-slate-500 dark:hover:bg-slate-600 hover:bg-slate-200" @click="toggleDark()">
      <Icon :icon="isDark ? 'tabler:sun': 'tabler:moon'" />
    </button>
    <div class="border p-7 rounded dark:border-gray-800">
      <div class="container">
        <h2 class="text-center mb-4 font-semibold text-xl dark:text-stone-300">حسابگر هزینه</h2>
        <hr class="border-b border-b-gray-50 mb-4" />
        <balance :total="total" />
        <income-expenses />
        <h3 class="mb-1 text-sm font-medium dark:text-stone-300">لیست تراکنش ها</h3>
        <suspense>
          <template #default>
            <transaction-list />
          </template>
          <template #fallback>
            <expense-loading />
          </template>
        </suspense>
        <add-transaction @transactionSubmitted="handleTransactionSubmitted" />
      </div>
    </div>
  </main>
</template>

<script setup>
import {Icon} from "@iconify/vue";
import {useToast} from 'vue-toastification';
import {ref, computed, onMounted} from 'vue';
import {useDark, useToggle} from "@vueuse/core";
import Balance from './components/Balance.vue';
import AddTransaction from './components/AddTransaction.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
import ExpenseLoading from "@/components/global/ExpenseLoading.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);


const toast = useToast();
const transactions = ref([]);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

// Get total
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});


// Submit transaction
const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });

  saveTransactionsToLocalStorage();

  toast.success('Transaction added.');
};

const generateUniqueId = () => {
  return Date.now();
};

// Save transactions to local storage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value));
};
</script>