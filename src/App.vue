<template>
  <main class="container mx-auto my-auto" style="max-width: 400px; max-height: 600px;">
    <div class="border p-7 rounded">
      <div class="container">
        <balance :total="total" />
        <income-expenses :income="+income" :expenses="+expenses" />
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

// Get income
const income = computed(() => {
  return transactions.value
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
      .toFixed(2);
});

// Get expenses
const expenses = computed(() => {
  return transactions.value
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
      .toFixed(2);
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

// Delete transaction
// const handleTransactionDeleted = (id) => {
//   transactions.value = transactions.value.filter(
//       (transaction) => transaction.id !== id
//   );
//
//   saveTransactionsToLocalStorage();
//
//   toast.success('Transaction deleted.');
// };

// Save transactions to local storage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value));
};
</script>