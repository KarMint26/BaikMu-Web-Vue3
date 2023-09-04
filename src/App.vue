<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import TechSection from "./components/TechSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";
import ButtonBackTop from "./components/ButtonBackTop.vue";
import LoadingScreen from "./components/LoadingScreen.vue";
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 7000);
});

</script>

<template>
  <div>
    <LoadingScreen v-if="isLoading" />
    <NavigationBar />
    <div class="content-wrapper pt-24">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TechSection />
      <ContactSection />
      <FooterSection />
    </div>
    <ButtonBackTop />
  </div>
</template>

<!-- <script>
export default {
  name: "App",
  $metaInfo: {
    title: "BaikMu - Self Care",
    meta: [
      {
        property: "og:title",
        content: "BaikMu - Self Care",
      },
      {
        property: "og:description",
        content: "Sebuah aplikasi yang dapat membantu mengetahui tentang kesehatan mental seseorang, khususnya untuk kalangan generasi Z.",
      },
      {
        property: "og:image",
        content: "https://baikmu-web.vercel.app/icon-baikmu.svg",
      },
      {
        property: "og:url",
        content: "https://baikmu-web.vercel.app",
      },
    ],
  },
};
</script> -->
