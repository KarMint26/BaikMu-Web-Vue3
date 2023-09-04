<template>
  <footer class="bg-slate-100 sm:pt-4 lg:pt-6">
    <div class="container p-6 mx-auto">
      <div class="lg:flex">
        <div class="w-full -mx-6 lg:w-2/5">
          <div class="px-6">
            <a href="#">
              <img
                class="w-[11rem] sm:w-[13rem] -translate-x-3 sm:-translate-y-3"
                src="/images/logo.png"
                alt="logo-baikmu"
              />
            </a>

            <p class="max-w-sm mt-2 text-gray-500 text-xs sm:text-sm">
              Sebuah aplikasi yang dapat membantu mengetahui tentang kesehatan
              mental seseorang, khususnya untuk kalangan generasi Z.
            </p>
          </div>
        </div>

        <div class="mt-6 lg:mt-0 lg:flex-1">
          <div
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
          <div>
              <h3 class="text-gray-700 uppercase font-semibold text-2xl">Sosial Media</h3>
              <a
              href="https://www.instagram.com/baikmu_pkmkc23/"
              target="_blank"
              class="cursor-pointer flex justify-start items-center gap-3 mt-2 text-sm text-gray-600"
              ><v-icon name="co-instagram" scale="1.5" class="text-rose-500" /> Instagram</a
              >
              <a
                class="cursor-pointer flex justify-start items-center gap-3 mt-2 text-sm text-gray-600"
                ><v-icon name="bi-facebook" scale="1.5" class="text-cyan-600" /> Facebook</a
              >
              <a
                class="cursor-pointer flex justify-start items-center gap-3 mt-2 text-sm text-gray-600"
                ><v-icon name="bi-youtube" scale="1.5" class="text-red-500" /> Youtube</a
              >
            </div>

            <div>
              <h3 class="text-gray-700 uppercase font-semibold text-2xl">Jelajahi</h3>
              <a
                href="#"
                class="block mt-2 text-sm text-gray-600 hover:text-sky-600"
                >Beranda</a
              >
              <a
                href="#about"
                class="block mt-2 text-sm text-gray-600 hover:text-sky-600"
                >Tentang Aplikasi</a
              >
              <a
                href="#features"
                class="block mt-2 text-sm text-gray-600 hover:text-sky-600"
                >Fitur Aplikasi</a
              >
              <a
                href="#tech"
                class="block mt-2 text-sm text-gray-600 hover:text-sky-600"
                >Teknologi</a
              >
              <a
                href="#contact"
                class="block mt-2 text-sm text-gray-600 hover:text-sky-600"
                >Kontak</a
              >
            </div>

            <div>
              <h3 class="text-gray-700 uppercase font-semibold text-2xl">Hubungi Kami</h3>
              <a
                href="https://wa.me/087791921967"
                target="_blank"
                class="flex items-center gap-3 mt-2 hover:text-sky-600 text-sm text-gray-600"
                ><v-icon name="hi-phone" class="text-cyan-700" scale="1.5" /> +62 877 9192 1967</a
              >
              <a
                href="mailto:baikmu@gmail.com"
                target="_blank"
                class="flex items-center gap-3 mt-2 hover:text-sky-600 text-sm text-gray-600"
                ><v-icon name="hi-mail" class="text-cyan-700" scale="1.5" /> baikmu@email.com</a
              >
              <a
                href="https://goo.gl/maps/uex2bEBQnxSmTZtc6"
                target="_blank"
                class="flex items-center gap-3 mt-2 hover:text-sky-600 text-sm text-gray-600"
                ><v-icon name="hi-map" class="text-cyan-700" scale="1.5" /> Tegal, Jawa Tengah, Indonesia</a
              >
            </div>
          </div>
        </div>
      </div>

      <hr class="h-px my-6 bg-gray-200 border-none" />

      <div>
        <p class="text-center text-gray-500 sm:text-base text-xs">
          © 2023 All Rights Reserved by
          <span class="text-primary">BaikMu.</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
