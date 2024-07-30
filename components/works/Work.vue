<template>
  <article
    class="flex-1 flex items-center justify-center max-md:w-11/12 max-sm:w-8/12 max-sm:mx-auto max-small:w-full cursor-pointer"
  >
    <figure class="w-full">
      <NuxtImg :src="work.img" class="w-full rounded-xl" />
      <figcaption class="flex flex-col gap-5 mt-5">
        <h1 class="text-secondary-gray font-extrabold max-md:text-sm">
          {{ work.title }}
        </h1>
        <p
          class="text-secondary-gray font-light max-md:text-sm max-md:text-justify"
        >
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
