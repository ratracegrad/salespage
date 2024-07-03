<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <div class="flex items-center flex-wrap gap-x-2">
    <template v-for="social in config.social" :key="social.name" >
      <NuxtLink v-if="social.show" :to="social.url" class="hover:text-lightText/70 dark:hover:text-darkText/70" :aria-label="social.ariaLabel">
        <Icon :name="social.icon" size="24px" />
      </NuxtLink>
    </template>
  </div>
</template>

<style scoped>

</style>
