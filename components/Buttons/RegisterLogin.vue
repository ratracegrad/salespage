<template>
  <div class="mt-3 text-sm font-medium text-gray-500 dark:text-gray-300">
    {{ $t('register.haveAccount') }}
    <NuxtLink
      to="/login"
      class="text-blue-700 hover:underline dark:text-blue-500"
    >
      {{ $t('register.login') }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
