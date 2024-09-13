<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <section id="banner">
    <div class="flex items-center justify-center bg-bannerLightBackground px-6 py-2.5 text-bannerLightText hover:bg-bannerLightBackground/70 dark:bg-bannerDarkBackground dark:text-bannerDarkText dark:hover:bg-bannerDarkBackground/70">
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
