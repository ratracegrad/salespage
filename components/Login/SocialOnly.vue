<template>
  <div class="dark:text-darkText: m-0 flex h-screen w-screen items-center justify-center bg-loginLightBackground p-0 text-lightText dark:bg-loginDarkBackground">
    <div class="mx-auto w-full max-w-lg">
      <div
        class="w-full rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-8"
      >
        <form
          class="space-y-6"
          action="#"
        >
          <h1 class="mb-6 text-center text-3xl font-semibold">
            {{ $t('login.title') }}
          </h1>
          <ButtonsLoginSocial />
          <ButtonsReturnHome />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
