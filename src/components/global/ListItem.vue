<template>
  <li
      :key="item.id"
      class="relative flex items-center justify-between rounded border p-2"
      :class="item.amount > 0 ? 'bg-green-50  border-green-600' : 'bg-red-50  border-red-600'"
      @mouseenter="showDeleteIcon = true"
      @mouseleave="showDeleteIcon = false"
  >

    <div class="text-sm font-normal">{{ item.title }}</div>

    <div class="flex align-middle content-end">
      <toman-icon :amount="item.amount" />
      <div
          v-show="showDeleteIcon"
          class="cursor-pointer text-xl font-normal mr-2"
          @click="deleteItem"
      >
        <Icon icon="mdi:delete-outline" />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import {Icon} from '@iconify/vue';
import {defineProps, ref} from 'vue';
import TomanIcon from "@/components/global/icons/TomanIcon.vue";
import {useExpenseStore} from "@/stores/ExpenseStore";

const showDeleteIcon = ref(false);

interface IProps {
  item: IExpenseItem
}

const props = defineProps<IProps>();

const useExpense = useExpenseStore();
console.log(useExpense.expenseList)
const deleteItem = async () => await useExpense.deleteExpense(props.item.id)
</script>