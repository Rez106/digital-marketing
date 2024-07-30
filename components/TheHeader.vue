<template>
  <header class="w-full">
    <NuxtLayout
      name="container"
      class="flex 2xl:items-start items-center md:justify-between pt-5"
    >
      <TheLogo :width="100" :height="100" />
      <NavbarDesktop v-if="mdAndLarger" />
      <NavbarMobile v-if="mdAndSmaller" @closeMenu="toggleMenu" :isOpen />
      <TheMenuToggle
        v-if="mdAndSmaller"
        @openMenu="toggleMenu"
        class="max-md:order-1"
      />
      <TheContactUs class="max-md:mr-auto ml-4" />
    </NuxtLayout>
  </header>
</template>

<script setup>
  const { mdAndLarger, mdAndSmaller } = useDisplay();

  const isOpen = ref(false);

  const toggleMenu = (status) => {
    isOpen.value = status;
  };
</script>

<style scoped></style>
