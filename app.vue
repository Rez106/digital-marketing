<template>
  <NuxtLayout name="default">
    <TheHeader />
    <section
      class="w-full"
      style="
        background: url('images/hero-background.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      "
    >
      <TheHero ref="heroSection" />
    </section>
    <main>
      <TheCertification />
      <section
        class="w-full"
        style="
          background: url('images/main-background.png');
          background-position: right;
          background-repeat: no-repeat;
          background-size: contain;
        "
      >
        <TheServices ref="servicesSection" />
        <TheCustomers />
      </section>
      <TheWorks ref="projectsSection" />
      <TheComments ref="commentsSection" />
    </main>
    <TheFooter />
  </NuxtLayout>
</template>

<script setup>
  const heroSection = ref(null);
  const servicesSection = ref(null);
  const projectsSection = ref(null);
  const commentsSection = ref(null);

  const heroActive = ref(useElementVisibility(heroSection));
  const servicesActive = ref(useElementVisibility(servicesSection));
  const projectsActive = ref(useElementVisibility(projectsSection));
  const commentsActive = ref(useElementVisibility(commentsSection));

  const activeSections = reactive({
    heroSection: heroActive,
    servicesSection: servicesActive,
    projectsSection: projectsActive,
    commentsSection: commentsActive,
  });

  provide("sections", {
    heroSection,
    servicesSection,
    projectsSection,
    commentsSection,
  });

  provide("activeSection", activeSections);
</script>
