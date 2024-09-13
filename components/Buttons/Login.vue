<template>
  <div class="flex md:flex-row flex-col items-center gap-3 box-border">
    <NuxtLink
      class="px-3.5 py-2.5 mt-4 w-full md:mt-0 text-sm text-center shadow-sm rounded-md bg-violet-900 text-white dark:bg-white dark:text-slate-900 border-violet-900 dark:border-slate-900 border-2"
      to="/login"
    >
      {{ $t('navbar.login') }}
    </NuxtLink>
    <NuxtLink
      class="px-3.5 py-2.5 mt-4 w-full md:mt-0 text-sm text-center shadow-sm rounded-md border-violet-500 text-slate-900 dark:bg-transparent dark:text-white dark:border-white border-2"
      to="/register"
    >
      {{ $t('navbar.register') }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
