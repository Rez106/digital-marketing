<template>
  <button
    class="flex items-center justify-center p-2 rounded-xl bg-gradient-to-tr from-zinc-800 to-main-black hover:brightness-125"
    @click="toggleMenu"
  >
    <Icon name="mdi:menu" class="text-white text-3xl" />
  </button>
</template>

<script setup>
  const emits = defineEmits(["openMenu"]);

  const toggleMenu = () => {
    emits("openMenu", true);
  };
</script>

<style lang="scss" scoped></style>
