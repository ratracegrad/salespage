<template>
  <div class="mt-4 flex w-full flex-col items-center justify-between gap-2">
    <div
      v-if="showSocial('google')"
      class="w-full"
    >
      <button
        type="button"
        class="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-zinc-50 p-2 text-sm transition-colors duration-300 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
      >
        <Icon name="i-logos-google-icon" />
        {{ $t('login.google') }}
      </button>
    </div>
    <div
      v-if="showSocial('github')"
      class="w-full"
    >
      <SupabaseGithub />
    </div>
  </div>
</template>

<script setup lang="ts">
import config from '~/config'

function showSocial(brand: string): boolean {
  return config.social.some(social => social.name.toLowerCase() === brand.toLowerCase() && social.login)
}
</script>

<style scoped>

</style>
