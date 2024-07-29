<template>
  <section class="w-full mt-10 bg-[#181818] py-10">
    <NuxtLayout name="container">
      <h1 class="text-3xl font-bold pb-10 text-secondary-gray">توصیفات</h1>
      <ClientOnly>
        <Swiper
          :modules="[SwiperPagination]"
          :pagination="{
            clickable: true,
            el: '.swiper-pagination',
            renderBullet: render,
          }"
          :slides-per-view="3"
          :space-between="10"
        >
          <SwiperSlide
            v-for="item in comments"
            :key="item.id"
            class="h-auto w-auto p-5 mb-10"
          >
            <TestimonialComment :comment="item" />
          </SwiperSlide>
          <div class="swiper-pagination !w-fit !right-4"></div>
        </Swiper>
      </ClientOnly>
    </NuxtLayout>
  </section>
</template>

<script setup>
  const comments = [
    {
      id: 1,
      name: "رضا درویشی",
      role: "لیدر فرانت‌اند",
      avatar: "/images/avatar.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله.",
    },
    {
      id: 2,
      name: "پرهام ابراهمی",
      role: "لیدر بک‌اند",
      avatar: "/images/avatar.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله.",
    },
    {
      id: 3,
      name: "متین جاهی",
      role: "لیدر فرانت",
      avatar: "/images/avatar.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله.",
    },
    {
      id: 4,
      name: "پویا میرنیا",
      role: "لیدر فرانت‌اند",
      avatar: "/images/avatar.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله.",
    },
    {
      id: 5,
      name: "شایان دی‌آر‌جی",
      role: "لیدر همه‌ چی",
      avatar: "/images/avatar.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله.",
    },
    {
      id: 6,
      name: "محمدرضا پورغلام",
      role: "لیدر سخت‌افزار",
      avatar: "/images/avatar.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله.",
    },
  ];

  function render(index, className) {
    return (
      '<span class="' + className + ' custom-bullet">' + (index + 1) + "</span>"
    );
  }
</script>

<style>
  .swiper-pagination-bullet {
    @apply w-5 h-1 rounded-md bg-white;
  }
  .swiper-pagination-bullet-active {
    @apply bg-secondary-gray;
  }
</style>
