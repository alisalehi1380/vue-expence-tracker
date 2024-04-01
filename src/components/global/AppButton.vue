<template>
  <button
      :class="handleVariantClasses">
    <slot />
  </button>
</template>

<script setup lang="ts">
import {defineProps, computed} from 'vue';

interface IProps {
  variant: 'primary' | 'icon'
}

const props = defineProps<IProps>();

const handleVariantClasses = computed(() => {
  switch (props.variant) {
    case 'icon':
      return 'p-2 bg-slate-100 rounded mb-2 dark:text-stone-300 dark:bg-slate-500 dark:hover:bg-slate-600 hover:bg-slate-200';
    case 'primary':
      return 's'
  }
});
</script>