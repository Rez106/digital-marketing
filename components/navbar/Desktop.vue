<template>
  <nav class="w-fit flex items-center justify-between gap-10">
    <div
      v-for="(item, index) in menuItems"
      :key="item.id"
      class="text-secondary-gray font-normal cursor-pointer"
    >
      {{ item.name }}
    </div>
  </nav>
</template>

<script setup>
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
