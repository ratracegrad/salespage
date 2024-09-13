<template>
  <button
    type="button"
    class="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-zinc-50 p-2 text-sm transition-colors duration-300 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
    @click="signInWithGoogle"
  >
    <!-- <Icon name="i-logos-google-icon" /> -->
    {{ $t('login.google') }}
  </button>
</template>

<script setup lang="ts">
// TODO: move this method to the store
async function signInWithGoogle() {
  console.log('signInWithGoogle')
  // const { auth } = useSupabaseClient()

  // const { error } = await auth.signInWithOAuth({ provider: 'google' })

  // if (error) throw createError(error)
}
</script>

<style scoped>

</style>
