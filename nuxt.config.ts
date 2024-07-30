// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-28",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxt/image",
    "nuxt-swiper",
  ],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      link: [{ rel: "icon", href: "logo.svg", type: "image/svg+xml" }],
    },
  },
  swiper: {
    styleLang: "css",
    modules: ["autoplay", "effect-cards", "pagination", "navigation"],
  },
  tailwindcss: {
    cssPath: "./assets/css/main.css",
  },
});
