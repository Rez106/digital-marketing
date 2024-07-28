<template>
  <section class="w-full mt-10 py-5">
    <NuxtLayout name="container" class="flex flex-col">
      <div
        class="w-fit flex items-center justify-between gap-4 text-secondary-gray font-medium"
      >
        <h3>برجسته در</h3>
        <div class="w-0.5 h-5 bg-secondary-gray opacity-15 rounded-lg"></div>
        <h3 class="opacity-45">گواهینامه ما</h3>
      </div>
      <div class="flex items-center gap-10 justify-between mt-5">
        <div
          class="flex-1 px-3 lg:px-10 h-24 flex items-center justify-center flex-wrap bg-[#181818] rounded-lg"
          v-for="(item, index) in companies"
          :key="index"
        >
          <NuxtImg :src="item" class="w-full" />
        </div>
      </div>
    </NuxtLayout>
  </section>
</template>

<script setup>
  import asus from "/images/featured/asus-logo.svg";
  import allianz from "/images/featured/allianz-1.svg";
  import chase from "/images/featured/chase.svg";
  import nyt from "/images/featured/new-york-times.svg";
  import linkedin from "/images/featured/linkedin.svg";

  const companies = [asus, allianz, chase, nyt, linkedin];
</script>

<style lang="scss" scoped></style>
