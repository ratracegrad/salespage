<template>
  <li
    v-for="nav in config.navbar.menu"
    :key="nav.id"
  >
    <NuxtLink
      class="flex items-center px-3 py-2 hover:opacity-75 sm:mt-2 lg:mt-0"
      :to="nav.url"
    >
      {{ nav.name }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import config from '~/config'
</script>

<style scoped>

</style>
