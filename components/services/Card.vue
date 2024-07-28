<template>
  <div
    class="min-w-[300px] h-full flex flex-col items-start gap-3 bg-[#131313] rounded-xl shadow-md p-2 lg:p-5 text-secondary-gray"
  >
    <NuxtImg :src="card.icon" class="w-fit h-14" />
    <h1 class="text-2xl font-bold">{{ card.name }}</h1>
  </div>
</template>

<script setup>
  defineProps({
    card: Object,
  });
</script>

<style lang="scss" scoped></style>
