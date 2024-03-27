<template>
  <div class="flex justify-center items-center mb-4">
    <h4 class="pl-1 text-sm font-medium">تراز شما:</h4>
    <toman-icon :amount="total" customClass="text-green-600" />
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import TomanIcon from "@/components/global/icons/TomanIcon.vue";

interface Props {
  total: number
}

defineProps<Props>();
</script>
