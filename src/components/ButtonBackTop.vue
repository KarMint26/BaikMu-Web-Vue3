<template>
  <a
    href="#"
    class="button-back-top shadow fixed right-3 bottom-3 flex justify-center items-center bg-gradient-to-tr from-teal-500 to-purple-600 rounded-full p-[0.35rem] sm:p-2 text-white"
    v-if="isScroll"
  >
    <v-icon name="ai-acclaim" scale="1.8" />
  </a>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isScroll = ref(false);

const handleScroll = () => {
  isScroll.value = window.scrollY > 25;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
