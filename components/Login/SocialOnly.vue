<template>
  <div class="m-0 p-0 w-screen h-screen flex items-center justify-center bg-loginLightBackground text-lightText dark:bg-loginDarkBackground dark:text-darkText:">
    <div class="max-w-lg w-full mx-auto">
      <div
        class="bg-white w-full border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <form class="space-y-6" action="#">
          <h1 class="text-3xl font-semibold mb-6 text-center">{{ $t('login.title') }}</h1>
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