<template>
  <a
    :href="href"
    class="text-white mt-4 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-3 shadow-md text-center mr-2 mb-2"
    ><v-icon :name="iconName" class="mr-1" /> {{ textButton }}</a
  >
</template>

<script setup>
defineProps({
  iconName: String,
  textButton: String,
  href: String,
});
</script>
