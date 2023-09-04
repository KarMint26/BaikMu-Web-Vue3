<template>
<div class="ball flex justify-center items-center">
    <v-icon :name="iconName" scale="2" />
</div>
</template>

<script setup>
defineProps({
    iconName: String,
});
</script>