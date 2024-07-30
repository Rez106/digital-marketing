<template>
  <section class="w-full mt-10 py-5">
    <NuxtLayout name="container" class="flex flex-col">
      <div
        class="w-fit flex items-center justify-between gap-4 text-secondary-gray font-medium max-md:mx-auto"
      >
        <h3>برجسته در</h3>
        <div class="w-0.5 h-5 bg-secondary-gray opacity-15 rounded-lg"></div>
        <h3 class="opacity-45">گواهینامه ما</h3>
      </div>
      <div class="w-full">
        <Swiper
          :modules="[SwiperNavigation]"
          :space-between="10"
          :navigation="{
            enabled: true,
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
          }"
          :breakpoints="{
            1200: {
              slidesPerView: 6,
            },
            1000: {
              slidesPerView: 4,
            },
            700: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            300: {
              slidesPerView: 1,
            },
          }"
          class="mt-5 !px-10 !h-24 max-sm:!w-10/12 max-sm:mx-auto xl:!hidden"
        >
          <SwiperSlide v-for="(item, index) in companies" :key="index">
            <div
              class="px-3 lg:px-10 h-full flex items-center justify-center flex-wrap bg-[#181818] rounded-lg cursor-pointer"
            >
              <NuxtImg :src="item" class="w-8/12" />
            </div>
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
        <div class="w-full flex items-center gap-5 h-24 mt-10 max-xl:hidden">
          <div
            v-for="(item, index) in companies"
            :key="index"
            class="flex-1 px-3 h-full flex items-center justify-center flex-wrap bg-[#181818] rounded-lg max-xl:cursor-pointer"
          >
            <NuxtImg :src="item" class="w-8/12" />
          </div>
        </div>
      </div>
    </NuxtLayout>
  </section>
</template>

<script setup>
  const companies = [
    "/images/featured/asus-logo.svg",
    "/images/featured/allianz-1.svg",
    "/images/featured/chase.svg",
    "/images/featured/new-york-times.svg",
    "/images/featured/linkedin.svg",
  ];
</script>

<style lang="scss" scoped></style>
