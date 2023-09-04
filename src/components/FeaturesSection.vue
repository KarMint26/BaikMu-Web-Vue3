<template>
  <section id="features" class="sm:py-16 py-10 sm:px-16 px-10">
    <div
      class="wrapper flex justify-center items-center flex-col gap-12 sm:gap-16"
    >
      <div
        class="title-section flex justify-center items-center flex-col gap-1"
      >
        <h1
          class="text-primary font-semibold font-primary lg:text-5xl sm:text-4xl text-2xl"
        >
          Fitur Aplikasi
        </h1>
        <p
          class="font-primary font-semibold text-slate-700 lg:text-xl sm:text-base text-xs"
        >
          Fitur Dari Aplikasi BaikMu - Self Care
        </p>
      </div>
      <div
        class="features-app grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center sm:gap-10 gap-16"
      >
        <CardFeatures
          icon-name="md-notealt-outlined"
          title-card="Tes Kondisi"
          desc-card="Test Kondisi ini ditujukan untuk mengetahui kondisi kesehatan mental dari
      pengguna"
        />
        <CardFeatures
          icon-name="md-medicalservices-outlined"
          title-card="Treatment"
          desc-card="Treatment berguna untuk menjadi panduan mengobati kondisi gangguan mental"
        />
        <CardFeatures
          icon-name="hi-chat-alt"
          title-card="Konsultasi"
          desc-card="Fitur ini memungkinkan pengguna untuk berkonsultasi dengan psikolog"
        />
        <CardFeatures
          icon-name="md-bookmarks"
          title-card="Catatan"
          desc-card="Menjadi media membuat catatan harian, seperti apa yang dialami pengguna"
        />
        <CardFeatures
          icon-name="si-chatbot"
          title-card="Chatbot"
          desc-card="Sebagai media menanyakan hal seputar kesehatan mental melalui AI yang interaktif"
        />
        <CardFeatures
          icon-name="md-menubook-outlined"
          title-card="Artikel"
          desc-card="Artikel sebagai media untuk mendapatkan informasi seputar kesehatan mental"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CardFeatures from "./CardFeatures.vue";
</script>
