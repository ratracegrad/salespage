<template>
  <div class="mx-2 flex items-center">
    <button
      v-if="isDark"
      type="button"
      class="flex items-center justify-center rounded-xl border-2 border-primary p-2 dark:border-secondary"
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
      class="flex items-center justify-center rounded-xl border-2 border-primary p-2 dark:border-secondary"
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
