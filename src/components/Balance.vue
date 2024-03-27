<template>
  <div class="mb-4">
    <h4>تراز شما</h4>
    <h1>${{ total }}</h1>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

interface Props {
  total: number;
}

defineProps<Props>();
</script>
