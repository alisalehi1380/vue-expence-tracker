<template>
  <h3 class="mb-1 text-sm font-medium">ایجاد تراکنش</h3>
  <form @submit.prevent="onSubmit">
    <div class="form-control mb-4 space-y-2">
      <app-input placeholder="عنوان تراکنش را وارد کنید" class="font-light border w-full p-2 focus:outline-none focus:outline-2 focus:border-gray-400 placeholder-text-200" type="text" />
      <app-input placeholder="مبلغ را وارد کنید" class="font-light border w-full p-2 focus:outline-none focus:outline-8 focus:border-gray-400" type="number" />

<!--      <input type="text" placeholder="عنوان تراکنش را وارد کنید" v-model="text" />-->
<!--      <input-->
<!--          class="rounded text-sm"-->
<!--          type="number"-->
<!--          placeholder="مبلغ را وارد کنید"-->
<!--          v-model="amount"-->
<!--      />-->
    </div>
    <button class="p-2 w-full h-full rounded bg-slate-100 hover:bg-slate-200">ثبت</button>
  </form>
</template>

<script setup>
import {useToast} from 'vue-toastification';
import {ref} from 'vue';
import AppInput from "@/components/global/AppInput.vue";

const text = ref('');
const amount = ref('');

// Get toast interface
const toast = useToast();

const emit = defineEmits(['transactionSubmitted']);

const onSubmit = () => {
  if (!text.value || !amount.value) {
    // Display a toast error message if either field is empty
    toast.error('Both fields must be filled.');
    return;
  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };

  emit('transactionSubmitted', transactionData);

  // Clear form fields
  text.value = '';
  amount.value = '';
};
</script>
