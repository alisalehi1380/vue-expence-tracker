<template>
  <input
      style="font-size: 0.75rem"
      class="font-light border w-full p-2 rounded text-sm
          dark:border-slate-800
          dark:text-stone-300
          dark:bg-gray-700
          focus:outline-none
          focus:border-gray-400
          sample_farsi_digits"
      :type="type"
      :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

interface Props {
  type: "text" | "number";
  placeholder: string;
}

defineProps<Props>();
</script>