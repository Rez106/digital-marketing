<template>
  <section class="w-full mt-10 bg-[#181818] py-10">
    <NuxtLayout name="container">
      <h1 class="text-3xl font-bold pb-10 text-secondary-gray">توصیفات</h1>
      <Swiper
        :modules="[SwiperPagination]"
        :pagination="{
          clickable: true,
          el: '.swiper-pagination',
        }"
        :breakpoints="{
          1000: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
          },
        }"
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
    return '<span class="' + className + ' custom-bullet"></span>';
  }
</script>

<style>
  .swiper-pagination-bullet {
    width: 1.25rem;
    height: 0.25rem;
    border-radius: 0.375rem;
    background-color: #c9c9c9;
  }
  .swiper-pagination-bullet-active {
    background-color: white;
  }
</style>
