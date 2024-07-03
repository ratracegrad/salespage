<script setup lang="ts">
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const { locale, locales, setLocale } = useI18n();
const selectedLanguage = ref(locales.value.find((l) => l.code === locale.value)) as Ref<Locale>;

watch(selectedLanguage, (value: Locale ) => {
  setLocale(value.code);
});

type Locale = {
  code: string;
  file: string;
  name: string;
  flag: string;
};
</script>

<template>
  <div class="flex justify-center items-center">
    <v-select v-model="selectedLanguage" :options="locales" :clearable="false">
      <template #selected-option="{ name, flag }">
        <Icon :name="flag" class="mr-2" />
        {{ name }}
      </template>
      <template #option="{ name, flag }">
        <Icon :name="flag" class="mr-2" />
        {{ name }}
      </template>
    </v-select>
  </div>
</template>

<style scoped>
</style>
