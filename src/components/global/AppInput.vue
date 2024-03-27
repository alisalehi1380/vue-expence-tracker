<template>
  <input
      style="font-size: 0.75rem"
      class="rounded text-sm"
      :type="type"
      :placeholder="placeholder"
      v-model="localAmount"
      @input="$emit('update:modelValue', localAmount)"
  />
</template>

<script setup lang="ts">
import {defineProps, ref} from 'vue';

const localAmount = ref('');

interface Props {
  type: "text" | "number";
  placeholder: string;
}

defineProps<Props>();
</script>