<template>
  <app-button variant="icon" @click="toggleDark()">
    <Icon :icon="isDark ? 'tabler:sun': 'tabler:moon'" />
  </app-button>
</template>
<script setup>
import {Icon} from "@iconify/vue";
import {useDark, useToggle} from "@vueuse/core";
import AppButton from "@/components/global/AppButton.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>