<template>
  <li
      :key="id"
      class="relative flex items-center justify-between rounded border p-2"
      :class="amount > 0 ? 'bg-green-50  border-green-600' : 'bg-red-50  border-red-600'"
      @mouseenter="showDeleteIcon = true"
      @mouseleave="showDeleteIcon = false"
  >

    <div class="text-sm font-normal">{{ title }}</div>

    <div class="flex align-middle content-end">
      <toman-icon :amount="amount" />
      <div
          v-show="showDeleteIcon"
          class="cursor-pointer text-xl font-normal mr-2"
      >
        <!--          @click="deleteTransaction(transaction.id)"-->
        <Icon icon="mdi:delete-outline" />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import {Icon} from '@iconify/vue';
import {defineProps, ref} from 'vue';
import TomanIcon from "@/components/global/icons/TomanIcon.vue";

const showDeleteIcon = ref(false);

interface Props {
  id: number
  amount: number
  title: string
}

defineProps<Props>();
</script>