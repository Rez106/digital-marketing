<template>
  <div
    class="w-full bg-[#222222] px-5 py-7 rounded-xl shadow-xl cursor-pointer"
  >
    <div class="w-full flex items-center gap-5">
      <div class="w-1/5 max-sm:w-1/12">
        <NuxtImg :src="comment.avatar" class="w-full rounded-full" />
      </div>
      <div class="flex-1">
        <h1 class="text-secondary-gray font-semibold">{{ comment.name }}</h1>
        <h3 class="text-secondary-gray opacity-50 text-sm">
          {{ comment.role }}
        </h3>
      </div>
    </div>
    <div class="mt-3">
      <p class="text-wrap text-secondary-gray text-sm first-letter:mr-5">
        {{ comment.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    comment: Object,
  });
</script>

<style lang="scss" scoped></style>
