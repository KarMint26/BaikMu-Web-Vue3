<script setup>
defineProps({
  iconName: String,
  titleCard: String,
  descCard: String,
});
</script>

<template>
  <div
    class="feat relative flex justify-center items-center flex-col w-[70%] p-4 lg:p-5 rounded-xl shadow-lg bg-white before:rounded-xl before:-z-[999] before:-top-5 before:w-[115%] before:bg-slate-200 before:h-[70%] before:absolute sm:my-6"
  >
    <v-icon :name="iconName" scale="2" class="text-cyan-600" />
    <h1 class="font-primary font-semibold sm:text-2xl text-xl mb-2">
      {{ titleCard }}
    </h1>
    <p class="text-slate-600 text-xs lg:text-base text-center">
      {{ descCard }}
    </p>
  </div>
</template>
