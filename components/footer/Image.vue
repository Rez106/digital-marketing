<template>
  <section class="flex-1 flex items-center justify-center">
    <div class="relative">
      <div class="semi-circle"></div>
      <div class="box"></div>
      <div class="square1"></div>
      <NuxtImg
        src="/images/footer-person.png"
        height="650"
        style="position: relative; z-index: 99"
        class="brightness-75 drop-shadow-lg max-sm:w-2/3 max-sm:mx-auto"
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
    bottom: 30%;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background-color: rgba(0, 100, 256, 0.1);
    rotate: 90deg;
    z-index: 1;
  }

  .square1 {
    position: absolute;
    top: 10%;
    right: 0;
    width: 25px;
    height: 25px;
    rotate: 60deg;
    border-radius: 6px;
    background-color: rgba(135, 206, 235, 0.7);
    z-index: 1;
  }
</style>
