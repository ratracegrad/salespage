<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const selectedValue = ref('')

onMounted(() => {
  selectedValue.value = locale.value
})

const onChange = (value: string) => {
  setLocale(value)
}
</script>

<template>
  <select
    v-model="selectedValue"
    @change="onChange(selectedValue)"
  >
    <option
      disabled
      value
    >
      Please select one
    </option>
    <option
      v-for="language in locales"
      :key="language.code"
      :value="language.code"
    >
      {{ language.name }}
    </option>
  </select>
</template>

<style scoped>

</style>
