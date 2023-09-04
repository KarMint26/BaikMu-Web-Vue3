<template>
  <section id="about" class="bg-white">
    <div class="container px-6 py-10 mx-auto">
      <div class="lg:-mx-6 lg:flex lg:items-center">
        <img
          class="lg:w-[500px] sm:w-[500px] sm:mx-auto lg:mx-6 w-full rounded-lg"
          src="/images/baikmu.png"
          alt="application-image"
        />

        <div
          class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 lg:mx-0 sm:flex sm:justify-center sm:items-center sm:flex-col lg:inline-block"
        >
          <p class="text-xs sm:text-base font-medium">
            Aplikasi Kesehatan Mental
          </p>
          <h1
            class="text-xl sm:text-2xl font-semibold text-gray-800 lg:text-3xl lg:w-96"
          >
            Tentang Aplikasi <span class="text-primary">BaikMu</span>
          </h1>

          <p
            class="max-w-lg mt-3 sm:mt-6 text-gray-500 sm:text-base text-xs lg:text-left sm:text-center"
          >
            BaikMu sendiri merupakan kepanjangan dari "Bantu Anda Ingatkan
            Kesehatan Mental-Mu". Jadi, BaikMu: Self Care ini mau ngingetin kamu
            tentang kesehatan mental nih, supaya kamu lebih aware lagi tentang
            kesehatan mental kamu.
          </p>

          <ButtonDesign
            text-button="Fitur Aplikasi"
            icon-name="ri-apps-line"
            href="#features"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import ButtonDesign from './ButtonDesign.vue';
</script>
