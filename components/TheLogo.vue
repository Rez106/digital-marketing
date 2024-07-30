<template>
  <div class="w-fit">
    <NuxtImg src="/logo.svg" :width :height />
  </div>
</template>

<script setup>
  defineProps({
    width: {
      type: Number,
      default: 70,
    },
    height: {
      type: Number,
      default: undefined,
    },
  });
</script>

<style lang="scss" scoped></style>
