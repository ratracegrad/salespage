<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <h2 class="tracking-light text-light-base sm-text-4xl dark:text-dark-base text-3xl font-bold">
    {{ config.blog.blogTitle }}
  </h2>
  <p class="text-light-baseLight dark:text-dark-baseLight mt-2 text-lg leading-8">
    {{ config.blog.blogDescription }}
  </p>
</template>

<style>
</style>
