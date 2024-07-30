<template>
  <section class="w-full mt-16 py-5">
    <NuxtLayout name="container" class="flex flex-col gap-10">
      <h1 class="text-secondary-gray text-3xl font-bold">
        پروژه‌های اخیر مجموعه
      </h1>
      <div class="w-full">
        <Swiper
          :modules="[SwiperNavigation]"
          :space-between="20"
          :navigation="{
            enabled: true,
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
          }"
          :breakpoints="{
            1200: {
              slidesPerView: works.length,
            },
            650: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 1,
            },
          }"
          class="!px-10 !mx-auto"
        >
          <SwiperSlide v-for="work in works" :key="work.id">
            <WorksWork :work />
          </SwiperSlide>
          <button
            class="disabled:hidden custom-next-button bg-gradient-to-r from-main-black to-transparent h-full text-secondary-gray absolute top-1/2 -translate-y-1/2 left-0 z-50 p-2 cursor-pointer"
          >
            <Icon name="mdi:chevron-left" size="x-large" />
          </button>
          <button
            class="disabled:hidden custom-prev-button text-secondary-gray bg-gradient-to-l from-main-black to-transparent h-full absolute top-1/2 -translate-y-1/2 right-0 z-50 cursor-pointerdisabled:hidden"
          >
            <Icon name="mdi:chevron-right" size="x-large" />
          </button>
        </Swiper>
      </div>
    </NuxtLayout>
  </section>
</template>

<script setup>
  const works = [
    {
      id: 1,
      title: "آرتم - کمپین دیجیتال مارکتینگ",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
      img: "/images/work1.jpg",
    },
    {
      id: 2,
      title: "Mayhem - بهینه سازی موتورهای جستجو",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
      img: "/images/work2.jpg",
    },
    {
      id: 3,
      title: "پایه - پرداخت به ازای کلیک (PPC)",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
      img: "/images/work3.jpg",
    },
  ];
</script>

<style lang="scss" scoped></style>
