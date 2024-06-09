<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();
const selectedLanguage = ref(locale.value);

watch(selectedLanguage, (value) => {
  setLocale(value);
});
</script>

<template>
  <select v-model="selectedLanguage" class="text-black/70 bg-white px-2 py-1 transition-all text-sm cursor-pointer hover:border-gray-600/30 border border-gray-200 rounded-lg outline-none appearance-none invalid:text-black/3">
    <option v-for="locale in locales" :key="locale.code" :value="locale.code">{{ locale.name }}</option>
  </select>
</template>

<style scoped>
</style>
