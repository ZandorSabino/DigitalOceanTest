import { defineNuxtConfig } from "nuxt3";

const PORT = parseInt(process.env.PORT);

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  server: {
    host: "0.0.0.0", // default: localhost
    port: PORT,
  },
});
