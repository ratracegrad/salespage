<template>
  <div class="flex items-center">
    <button
      v-if="isDark"
      type="button"
      class="flex items-center justify-center border-2 border-primary dark:border-secondary rounded-md px-2 py-2"
      aria-label="light mode button"
      @click="toggleAppearance"
    >
      <Icon
        name="i-material-symbols-sunny-outline"
        size="24px"
      />
    </button>
    <button
      v-else
      type="button"
      class="flex items-center justify-center border-2 border-primary dark:border-secondary rounded-md px-2 py-2"
      aria-label="dark mode button"
      @click="toggleAppearance"
    >
      <Icon
        name="i-material-symbols-dark-mode"
        size="24px"
        aria-label="dark mode button"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
const color = useColorMode()
const isDark = ref(color.value === 'dark')

const toggleAppearance = inject('toggle-appearance', () => {
  isDark.value = !isDark.value
  color.preference = color.value === 'dark' ? 'light' : 'dark'
})
</script>

<style scoped>

</style>
