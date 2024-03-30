<template>
  <main class="container mx-auto my-auto" style="max-width: 400px; max-height: 600px;">
    <div class="border p-7 rounded">
      <div class="container">
        <h2 class="text-center mb-4 font-semibold text-xl">حسابگر هزینه</h2>
        <hr class="border-b border-b-gray-50 mb-4" />
        <balance :total="total" />
        <income-expenses />
        <h3 class="mb-1 text-sm font-medium">لیست تراکنش ها</h3>
        <suspense>
          <template #default>
            <transaction-list />
          </template>
          <template #fallback>
              <expense-loading/>
          </template>
        </suspense>
        <add-transaction @transactionSubmitted="handleTransactionSubmitted" />
      </div>
    </div>
  </main>
</template>

<script setup>
import Balance from './components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';
import {ref, computed, onMounted} from 'vue';
import {useToast} from 'vue-toastification';
import ExpenseLoading from "@/components/global/ExpenseLoading.vue";

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