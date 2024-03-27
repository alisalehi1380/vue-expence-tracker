<template>
  <input
      style="font-size: 0.75rem"
      class="rounded text-sm"
      :type="type"
      :placeholder="placeholder"
  />
  <!--v-model="amount"-->
</template>

<script setup lang="ts">
import {defineProps, withDefaults} from 'vue';

interface Props {
  type?: "text" | "number";
  placeholder: string;
}

withDefaults(defineProps<Props>(), {
  type: "text"
});
</script>