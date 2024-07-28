<template>
  <article class="flex-1">
    <figure>
      <NuxtImg :src="work.img" class="w-full rounded-xl" />
      <figcaption class="flex flex-col gap-5 mt-5">
        <h1 class="text-secondary-gray font-extrabold">{{ work.title }}</h1>
        <p class="text-secondary-gray font-light">
          {{ truncateText(work.caption) }}
        </p>
      </figcaption>
    </figure>
  </article>
</template>

<script setup>
  const { work } = defineProps({
    work: Object,
  });

  const truncateText = (text) => {
    const words = text.split(" ");
    if (words.length > 25) {
      return words.slice(0, 25).join(" ") + "...";
    }
    return text;
  };
</script>

<style lang="scss" scoped></style>
