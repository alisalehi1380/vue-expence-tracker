<template>
  <h3 class="mb-1 text-sm font-medium">ایجاد تراکنش</h3>
  <form @submit.prevent="onSubmit">
    <div class="form-control mb-4 space-y-2">
      <app-input
          placeholder="عنوان تراکنش را وارد کنید"
          class="font-light border w-full p-2 focus:outline-none focus:outline-2 focus:border-gray-400 placeholder-text-200"
          type="text"
          @update:modelValue="handleTitleUpdate"
      />
      <app-input
          placeholder="مبلغ را وارد کنید"
          class="sample_farsi_digits font-light border w-full p-2 focus:outline-none focus:outline-8 focus:border-gray-400"
          type="number"
          @update:modelValue="handleAmountUpdate"
      />
    </div>
    <button class="p-2 w-full h-full rounded bg-slate-100 hover:bg-slate-200">ثبت</button>
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
