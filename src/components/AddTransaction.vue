<template>
  <h3 class="mb-1 text-sm font-medium dark:text-stone-300">ایجاد تراکنش</h3>
  <form @submit.prevent="onSubmit">
    <div class="form-control mb-4 space-y-2">
      <app-input
          placeholder="عنوان تراکنش را وارد کنید"
          type="text"
      />
      <app-input
          placeholder="مبلغ را وارد کنید"
          type="number"
      />
    </div>
    <button
        class="p-2 w-full h-full rounded
        bg-slate-100
        hover:bg-slate-200
        dark:text-stone-300
        dark:bg-slate-500
        dark:hover:bg-slate-600"
    >
      ثبت
    </button>
  </form>
</template>

<script setup>
import {ref, defineEmits} from 'vue';
import {useToast} from 'vue-toastification';
import AppInput from "@/components/global/AppInput.vue";

const text = ref('');
const amount = ref('');
const toast = useToast();
const emit = defineEmits(['transactionSubmitted', 'handleAmountUpdate', 'handleTitleUpdate']);

const handleTitleUpdate = (newTitle) => {
  text.value = newTitle;
};
const handleAmountUpdate = (newAmount) => {
  amount.value = newAmount;
};

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error('Both fields must be filled.');
    return;
  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };

  emit('transactionSubmitted', transactionData);

  text.value = '';
  amount.value = '';
};
</script>
