<template>
  <section class="w-full mt-10">
    <NuxtLayout name="container" class="flex items-center max-sm:flex-col">
      <CustomerImage v-if="smAndLarger" />
      <CustomerDetails />
    </NuxtLayout>
  </section>
</template>

<script setup>
  const { smAndLarger } = useDisplay();
</script>

<style lang="scss" scoped></style>
