<template>
  <button class="p-2 bg-slate-100 rounded mb-2 dark:text-stone-300 dark:bg-slate-500 dark:hover:bg-slate-600 hover:bg-slate-200" @click="toggleDark()">
    <Icon :icon="isDark ? 'tabler:sun': 'tabler:moon'" />
  </button>
</template>
<script setup>
import {Icon} from "@iconify/vue";
import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>