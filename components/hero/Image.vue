<template>
  <section class="flex-1 flex items-center justify-center">
    <div class="relative">
      <div class="semi-circle"></div>
      <div class="box"></div>
      <NuxtImg
        src="/images/hero-person.png"
        height="650"
        style="position: relative; z-index: 99"
        class="brightness-75 drop-shadow-lg"
      />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
  .semi-circle {
    position: absolute;
    top: 15%;
    right: 2%;
    width: 200px;
    height: 100px;
    border-radius: 150px 150px 0 0;
    background-color: rgba(165, 42, 42, 0.5);
    rotate: 90deg;
    z-index: 1;
  }

  .box {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background-color: rgba(0, 100, 256, 0.1);
    rotate: 90deg;
    z-index: 1;
  }
</style>
