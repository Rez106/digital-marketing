<template>
  <header class="w-full sticky top-0 left-0 z-[99999] backdrop-blur-lg">
    <NuxtLayout
      name="container"
      class="flex 2xl:items-start items-center md:justify-between py-1 sm:py-3"
    >
      <TheLogo :width="100" :height="100" />
      <NavbarDesktop class="max-md:hidden" />
      <NavbarMobile class="md:hidden" @closeMenu="toggleMenu" :isOpen />
      <TheMenuToggle @openMenu="toggleMenu" class="max-md:order-1 md:hidden" />
      <TheContactUs class="max-md:mr-auto ml-4" />
    </NuxtLayout>
  </header>
</template>

<script setup>
  const isOpen = ref(false);

  const toggleMenu = (status) => {
    isOpen.value = status;
  };
</script>

<style scoped></style>
