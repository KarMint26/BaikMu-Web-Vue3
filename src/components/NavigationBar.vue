<template>
  <nav
    :class="isScroll ? 'lg:shadow' : 'lg:shadow-none'"
    class="bg-white w-full fixed top-0 z-[999999] shadow"
  >
    <div
      class="container px-6 py-2 mx-auto lg:flex lg:justify-between lg:items-center"
    >
      <div class="flex items-center justify-between">
        <a href="#">
          <img class="w-[9rem] sm:w-[10rem]" src="/images/logo.png" alt="logo-baikmu" />
        </a>

        <!-- Mobile menu button -->
        <div class="flex lg:hidden">
          <button
            x-cloak
            @click="isOpen = !isOpen"
            type="button"
            class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              style="transform: rotateY(180deg);"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              v-if="isOpen === false"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              v-if="isOpen === true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile and tablet Menu open: "block", Menu closed: "hidden" -->
      <div
        x-cloak
        :class="[
          isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full',
        ]"
        class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
      >
        <div class="flex flex-col items-center lg:flex-row lg:mx-6">
          <a
            @click="isOpen = !isOpen"
            class="nav-link my-2 text-center text-gray-700 transition duration-300 transform hover:text-primary lg:mx-4 lg:my-0"
            href="#"
            >Beranda</a
          >
          <a
            @click="isOpen = !isOpen"
            class="nav-link my-2 text-center text-gray-700 transition duration-300 transform hover:text-primary lg:mx-4 lg:my-0"
            href="#about"
            >Tentang</a
          >
          <a
            @click="isOpen = !isOpen"
            class="nav-link my-2 text-center text-gray-700 transition duration-300 transform hover:text-primary lg:mx-4 lg:my-0"
            href="#features"
            >Fitur Aplikasi</a
          >
          <a
            @click="isOpen = !isOpen"
            class="nav-link my-2 text-center text-gray-700 transition duration-300 transform hover:text-primary lg:mx-4 lg:my-0"
            href="#tech"
            >Teknologi</a
          >
          <a
            @click="isOpen = !isOpen"
            class="nav-link my-2 text-center text-gray-700 transition duration-300 transform hover:text-primary lg:mx-4 lg:my-0"
            href="#contact"
            >Kontak</a
          >
          <a
            @click="isOpen = !isOpen"
            class="my-2 text-center text-white transition duration-300 transform bg-primary py-2 px-4 lg:mx-4 lg:my-0 rounded-lg shadow hover:bg-cyan-500"
            href="{{ url_for('login') }}"
            >Sign In</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isOpen = ref(false);
const isScroll = ref(false);

const handleScroll = () => {
  isScroll.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.nav-link {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.nav-link::before {
  content: '';
  position: absolute;
  bottom: -5px;
  width: 4rem;
  height: 3px;
  transform: scale(0);
  @apply bg-primary transition;
}
.nav-link:nth-child(3)::before{
  width: 6rem;
}
.nav-link:nth-child(5)::before{
  width: 3.5rem;
}
.nav-link:nth-child(4)::before{
  width: 4.5rem;
}
.nav-link:hover::before {
  transform: scale(1);
}
</style>