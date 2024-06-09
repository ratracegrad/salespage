<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <section id="banner">
    <div class="flex items-center justify-center px-6 py-2.5 bg-snowflake">
      <p class="text-semibold text-center">
        <NuxtLink :to="config.banner.url">
          {{ $t(`${config.banner.message}`) }}
        </NuxtLink>
      </p>
    </div>
  </section>
</template>

<style scoped>

</style>
