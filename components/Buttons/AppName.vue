<template>
  <NuxtLink
    class="text-logoLight dark:text-logoDark text-xl font-bold leading-relaxed inline-block whitespace-nowrap"
    to="/"
  >
    {{ $t(`${config.appName}`) }}
  </NuxtLink>
</template>

<script setup lang="ts">
import config from '~/config'
</script>

<style scoped>

</style>
