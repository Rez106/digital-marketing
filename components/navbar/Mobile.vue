<template>
  <aside
    class="fixed max-sm:w-full w-1/3 top-0 bg-gradient-to-tr from-main-black to-zinc-900 h-dvh z-[9999] duration-300 flex flex-col p-5 shadow-lg"
    :class="{ 'right-0 opacity-100': isOpen, '-right-full opacity-0': !isOpen }"
  >
    <button
      class="w-fit self-end flex items-center justify-center p-1 rounded-xl bg-zinc-800 hover:brightness-125"
      @click="toggleMenu"
    >
      <Icon name="mdi:close" class="text-red-500 text-3xl" />
    </button>
    <nav class="w-full flex flex-col gap-4 mt-5">
      <div
        v-for="(item, index) in menuItems"
        :key="item.id"
        class="w-fit text-secondary-gray font-normal cursor-pointer pb-2 border-b-2 border-transparent duration-200 hover:border-brand-green active:border-brand-green"
      >
        {{ item.name }}
      </div>
    </nav>
  </aside>
</template>

<script setup>
  defineProps({
    isOpen: Boolean,
  });

  const emits = defineEmits(["closeMenu"]);

  const toggleMenu = () => {
    emits("closeMenu", false);
  };

  const menuItems = [
    {
      id: 1,
      name: "درباره ما",
      section: "about",
    },
    {
      id: 2,
      name: "سرویس‌ها",
      section: "services",
    },
    {
      id: 3,
      name: "پروژه‌ها",
      section: "works",
    },
    {
      id: 4,
      name: "توصیفات",
      section: "testimonials",
    },
  ];
</script>

<style lang="scss" scoped></style>
