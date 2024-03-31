<template>
  <main class="container mx-auto my-auto" style="max-width: 400px; max-height: 600px;">
    <dark-button />
    <div class="border p-7 rounded dark:border-gray-800">
      <div class="container">
        <h2 class="text-center mb-4 font-semibold text-xl dark:text-stone-300">حسابگر هزینه</h2>
        <hr class="border-b border-b-gray-50 mb-4" />
        <balance />
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
        <add-transaction />
      </div>
    </div>
  </main>
</template>

<script setup>
import Balance from './components/Balance.vue';
import AddTransaction from './components/AddTransaction.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
import ExpenseLoading from "@/components/global/ExpenseLoading.vue";
import DarkButton from "@/components/global/DarkButton.vue";
</script>