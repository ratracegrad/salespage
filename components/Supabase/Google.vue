<template>
  <button
    type="button"
    class="w-full flex justify-center items-center gap-2 bg-zinc-50 text-sm p-2 rounded-md hover:bg-zinc-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
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
