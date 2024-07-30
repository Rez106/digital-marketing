<template>
  <section class="w-full sm:mt-10 pt-20">
    <NuxtLayout name="container" class="flex items-center max-sm:flex-col">
      <HeroDetails />
      <HeroImage v-if="smAndLarger" />
    </NuxtLayout>
  </section>
</template>

<script setup>
  const { smAndLarger } = useDisplay();
</script>

<style lang="scss" scoped></style>
