<template>
  <nav class="w-fit flex items-center justify-between gap-10">
    <div
      v-for="(item, index) in menuItems"
      :key="item.id"
      class="text-secondary-gray font-normal cursor-pointer pb-2 duration-200 border-b-2"
      :class="{
        'border-transparent hover:border-brand-green active:border-brand-green':
          !activeSection[item.section],
        'border-brand-green': activeSection[item.section],
      }"
      @click="goToSection(item.section)"
    >
      {{ item.name }}
    </div>
  </nav>
</template>

<script setup>
  const mySections = inject("sections");
  const activeSection = inject("activeSection");

  const goToSection = (section) => {
    const sectionElement = mySections[section]?.value?.$el;
    sectionElement.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    {
      id: 1,
      name: "درباره ما",
      section: "heroSection",
    },
    {
      id: 2,
      name: "سرویس‌ها",
      section: "servicesSection",
    },
    {
      id: 3,
      name: "پروژه‌ها",
      section: "projectsSection",
    },
    {
      id: 4,
      name: "توصیفات",
      section: "commentsSection",
    },
  ];
</script>
