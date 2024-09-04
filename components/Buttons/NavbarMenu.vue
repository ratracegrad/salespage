<template>
  <li
    v-for="nav in config.navbar.menu"
    :key="nav.id"
  >
    <NuxtLink
      class="px-3 py-2 sm:mt-2 lg:mt-0 flex items-center hover:opacity-75"
      :to="nav.url"
    >
      {{ $t(`${nav.i18n}`) }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import config from '~/config'
</script>

<style scoped>

</style>
