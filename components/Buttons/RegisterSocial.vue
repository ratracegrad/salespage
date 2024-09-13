<template>
  <div class="mt-4 flex flex-col items-center justify-between gap-2">
    <div
      v-if="config.auth.google.login"
      class="w-full"
    >
      <button
        type="button"
        class="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-zinc-100 p-2 text-sm transition-colors duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
      >
        <Icon name="i-logos-google-icon" />
        {{ $t('register.google') }}
      </button>
    </div>
    <div
      v-if="config.auth.github.login"
      class="w-full"
    >
      <button
        type="button"
        class="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-zinc-100 p-2 text-sm transition-colors duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
      >
        <Icon name="i-logos-github-icon" />
        {{ $t('register.github') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import config from '~/config'
</script>

<style scoped>

</style>
