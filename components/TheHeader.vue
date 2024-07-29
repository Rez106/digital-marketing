<template>
  <header class="w-full">
    <NuxtLayout
      name="container"
      class="flex 2xl:items-start items-center lg:justify-between pt-5"
    >
      <TheLogo :width="100" :height="100" />
      <NavbarDesktop v-if="$device.isDesktop" />
      <NavbarMobile v-if="$device.isMobile" @closeMenu="toggleMenu" :isOpen />
      <TheMenuToggle
        v-if="$device.isMobile"
        @openMenu="toggleMenu"
        class="order-1"
      />
      <TheContactUs class="max-2xl:mr-auto ml-4" />
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
