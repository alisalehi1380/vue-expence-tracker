<template>
  <h3 class="mb-1 text-sm font-medium dark:text-stone-300">ایجاد تراکنش</h3>
  <div>
    <div class="form-control mb-4 space-y-2">
      <app-input
          placeholder="عنوان تراکنش را وارد کنید"
          type="text"
          v-model="expenseStore.expenseItem.title"
      />
      <app-input
          placeholder="مبلغ را وارد کنید"
          type="number"
          v-model="expenseStore.expenseItem.amount"
      />
    </div>
    <app-button variant="primary" @click="onSubmit">
      ثبت
    </app-button>
  </div>
</template>

<script setup>
import {useToast} from 'vue-toastification';
import {useExpenseStore} from "@/stores/ExpenseStore";
import AppInput from "@/components/global/AppInput.vue";
import AppButton from "@/components/global/AppButton.vue";

const toast = useToast();
const expenseStore = useExpenseStore();

const onSubmit = async () => {
  if (!expenseStore.expenseItem.title || !expenseStore.expenseItem.amount) {
    toast.error('وارد کردن هر دو فیلد الزامی ست');
  } else {
    try {
      await expenseStore.createExpense(expenseStore.expenseItem);
      toast.success('با موفقیت ایجاد شد');
    } catch (e) {
      toast.error('مشکلی به وجود آمده است');
    }
    expenseStore.expenseItem.title = '';
    expenseStore.expenseItem.amount = '';
  }
};
</script>
