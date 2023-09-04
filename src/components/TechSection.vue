<script setup>
import Bubbles from './Bubbles.vue';
</script>

<template>
  <section id="tech" class="sm:py-16 py-10 sm:px-16 px-10">
    <div
      class="wrapper flex justify-center items-center flex-col gap-12 sm:gap-16"
    >
      <div
        class="title-section flex justify-center items-center flex-col gap-1"
      >
        <h1
          class="text-primary font-semibold font-primary lg:text-5xl sm:text-4xl text-2xl"
        >
          Teknologi
        </h1>
        <p
          class="font-primary font-semibold text-slate-700 lg:text-xl sm:text-base text-[0.7rem]"
        >
          Teknologi yang digunakan aplikasi dan website
        </p>
      </div>
      <div class="tech-list grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-12 lg:gap-14 justify-items-center place-items-center">
        <Bubbles icon-name="vi-file-type-html" />
        <Bubbles icon-name="vi-file-type-css" />
        <Bubbles icon-name="vi-file-type-vue" />
        <Bubbles icon-name="si-javascript" class="text-yellow-300" />
        <Bubbles icon-name="vi-file-type-vite" />
        <Bubbles icon-name="vi-file-type-tailwind" />
        <Bubbles icon-name="vi-file-type-python" />
        <Bubbles icon-name="vi-file-type-dartlang" />
        <Bubbles icon-name="vi-file-type-flutter" />
        <Bubbles icon-name="vi-file-type-yarn" />
        <Bubbles icon-name="co-flask" />
        <Bubbles icon-name="vi-file-type-node" />
        <Bubbles icon-name="vi-file-type-mysql" />
        <Bubbles icon-name="vi-file-type-npm" />
        <Bubbles icon-name="si-scikitlearn" />
      </div>
    </div>
  </section>
</template>
