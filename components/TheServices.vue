<template>
  <section class="w-full py-5 mt-16">
    <NuxtLayout name="container">
      <section class="flex items-center justify-between mt-10">
        <div class="flex-1">
          <div class="flex flex-col gap-5 items-start text-secondary-gray">
            <h1 class="flex flex-col items-start text-4xl font-extrabold">
              <span>تخصص</span>
              <span>دیجیتال مارکتینگ ما</span>
            </h1>
            <p class="text-base">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز.
            </p>
          </div>
        </div>
        <div class="flex-1 max-w-[50%]">
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCards]"
            effect="cards"
            :centered-slides="true"
            :grab-cursor="true"
            :loop="true"
            :autoplay="{
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }"
            class="max-w-[300px] h-[300px]"
          >
            <SwiperSlide v-for="card in cards" :key="card.id">
              <ServicesCard :card />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
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
