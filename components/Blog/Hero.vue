<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <h2 class="tracking-light text-3xl font-bold text-light-base sm-text-4xl dark:text-dark-base">
    {{ config.blog.blogTitle }}
  </h2>
  <p class="mt-2 text-lg leading-8 text-light-baseLight dark:text-dark-baseLight">
    {{ config.blog.blogDescription }}
  </p>
</template>

<style>
</style>

