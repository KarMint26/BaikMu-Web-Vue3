<template>
  <div class="container px-6 py-10 sm:py-12 lg:pt-0 lg:pb-10 mx-auto">
    <div class="items-center lg:flex">
      <div class="w-full lg:w-1/2">
        <div class="lg:max-w-lg">
            <p class="text-primary font-semibold mb-2 text-xs sm:text-xl">Selamat Datang di Website BaikMu</p>
          <h1
            class="text-3xl sm:text-5xl font-semibold text-gray-800 lg:text-5xl"
          >
            BaikMu - <span class="text-primary">Self Care</span>
          </h1>

          <p class="text-xs sm:text-lg lg:text-base mt-3 text-gray-600">
            Sebuah aplikasi yang dapat membantu mengetahui tentang kesehatan
            mental seseorang, khususnya untuk kalangan generasi Z.
          </p>
          
          <ButtonDesign text-button="Google Play" icon-name="io-logo-google-playstore" href="#" />
        </div>
      </div>

      <div
        class="flex items-center justify-center w-full mt-6 sm:mt-4 lg:mt-0 lg:w-[600px]"
      >
        <img
          class="w-full h-full lg:max-w-3xl"
          src="/images/Hero-Image-min.svg"
          alt="Application"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonDesign from './ButtonDesign.vue';
</script>
