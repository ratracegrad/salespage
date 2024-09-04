<template>
  <div class="text-sm font-medium text-gray-500 dark:text-gray-300 mt-3">
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
