<template>
  <section class="w-full py-5 mt-16">
    <NuxtLayout name="container">
      <div class="w-full flex items-center justify-between gap-5 h-48">
        <ServicesCard v-for="card in cards.slice(0, 2)" :key="card.id" :card />
        <div class="flex flex-col gap-5 items-start mr-10 text-secondary-gray">
          <h1 class="flex flex-col items-start text-3xl font-bold">
            <span>تخصص</span>
            <span>دیجیتال مارکتینگ ما</span>
          </h1>
          <p class="text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز.
          </p>
        </div>
      </div>
      <div class="w-full flex items-start h-48 justify-between gap-5 mt-10">
        <ServicesCard v-for="card in cards.slice(2, 6)" :key="card.id" :card />
      </div>
    </NuxtLayout>
  </section>
</template>

<script setup>
  const cards = [
    {
      id: 1,
      name: "بهینه‌سازی موتور جستجو",
      icon: "/images/icons/seo.svg",
    },
    {
      id: 2,
      name: "طراحی و توسعه وب‌سایت",
      icon: "/images/icons/develop.svg",
    },
    {
      id: 3,
      name: "ادیت ویدیو و تولید",
      icon: "/images/icons/video.svg",
    },
    {
      id: 4,
      name: "نوشتن محتوا",
      icon: "/images/icons/content.svg",
    },
    {
      id: 5,
      name: "فروش در شبکه‌های اجتماعی",
      icon: "/images/icons/social.svg",
    },
    {
      id: 6,
      name: "پرداخت برای هر کلیک",
      icon: "/images/icons/click.svg",
    },
  ];
</script>

<style lang="scss" scoped></style>
