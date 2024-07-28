<template>
  <div class="flex-1 flex items-center justify-center">
    <div class="relative">
      <div
        class="absolute bottom-0 rounded-[50px] w-full h-4/6 bg-amber-800 bg-opacity-20"
      ></div>
      <div
        class="absolute w-fit rounded-lg top-20 -left-16 p-2 flex flex-col gap-3"
      >
        <h1 class="text-xs font-light text-white mb-2">مشتری‌های ما</h1>
        <div class="w-full flex items-center">
          <div class="w-8/12 -m-2 z-40">
            <NuxtImg
              src="/images/avatar.png"
              class="w-full drop-shadow-md rounded-full"
            />
          </div>
          <div class="w-8/12 -m-2 z-30">
            <NuxtImg src="/images/avatar.png" class="w-full rounded-full" />
          </div>

          <div class="w-8/12 -m-2 z-20">
            <NuxtImg src="/images/avatar.png" class="w-full rounded-full" />
          </div>
          <div class="w-8/12 -m-2 z-10">
            <NuxtImg src="/images/avatar.png" class="w-full rounded-full" />
          </div>
        </div>
        <h1 class="text-xs font-light text-orange-400 mr-4">+۲۵ هزار</h1>
      </div>
      <NuxtImg
        src="/images/customer-person.png"
        height="550"
        class="-scale-x-[1] drop-shadow-md"
      />
      <div
        class="w-8/12 absolute bottom-1/4 -right-5 shadow-lg bg-white px-2 py-3 rounded-xl"
      >
        <div class="flex items-center justify-between text-sm font-semibold">
          <h1>درآمد</h1>
          <h1>
            ۸۳٪
            <Icon name="mdi:arrow-up" />
          </h1>
        </div>
        <div class="mt-2 flex items-center justify-between font-semibold">
          <span class="flex items-center gap-1 text-sm text-purple-600">
            <Icon name="mdi:circle-double" class="text-lg text-purple-600" />
            ۴۵٬۰۰۰٬۰۰۰ ریال
          </span>
          <span class="text-xs">۱۴۰۳٫۰۳٫۱۲</span>
        </div>
        <div class="mt-2 flex items-center justify-between font-semibold">
          <span class="flex items-center gap-1 text-sm text-pink-500">
            <Icon name="mdi:circle-double" class="text-lg text-pink-500" />
            ۷۴٬۰۰۰٬۰۰۰ ریال
          </span>
          <span class="text-xs">۱۴۰۳٫۰۳٫۱۲</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
