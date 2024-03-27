<template>
  <h3>اضافه کردن تراکنش جدید</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">عنوان</label>
      <input type="text" id="text" placeholder="عنوان تراکنش را وارد کنید" v-model="text" />
    </div>
    <div class="form-control">
      <label for="amount"
        >مبلغ<br />
      </label
      >
      <input
        type="text"
        id="amount"
        placeholder="مبلغ را وارد کنید"
        v-model="amount"
      />
    </div>
    <button class="btn">اضافه کردن</button>
  </form>
</template>

<script setup>
import { useToast } from 'vue-toastification';
import { ref } from 'vue';

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
