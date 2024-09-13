<template>
  <div class="box-border flex flex-col items-center gap-2 md:flex-row">
    <NuxtLink
      class="mt-4 w-full rounded-md border-2 border-violet-900 bg-violet-900 px-3.5 py-2.5 text-center text-sm text-white shadow-sm dark:border-slate-900 dark:bg-white dark:text-slate-900 md:mt-0"
      to="/login"
    >
      {{ $t('navbar.login') }}
    </NuxtLink>
    <NuxtLink
      class="mt-4 w-full rounded-md border-2 border-violet-500 px-3.5 py-2.5 text-center text-sm text-slate-900 shadow-sm dark:border-white dark:bg-transparent dark:text-white md:mt-0"
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
