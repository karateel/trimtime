<script setup>
const languages = ['Eng', 'UA']
const language = ref(languages[0])
</script>
<template>
  <USelect v-model="language" :options="languages" />
</template>