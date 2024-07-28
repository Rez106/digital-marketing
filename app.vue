<template>
  <NuxtLayout name="default">
    <section
      class="w-full"
      style="
        background: url('images/hero-background.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <TheHeader />
      <TheHero />
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
        <TheServices />
      </section>
    </main>
  </NuxtLayout>
</template>
