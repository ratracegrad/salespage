<template>
  <NuxtLink
    class="inline-block whitespace-nowrap text-xl font-bold leading-relaxed text-logoLight dark:text-logoDark"
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
