<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <p class="leading-5">
    &copy; {{ new Date().getFullYear() }} {{ $t(`${config.appName}`) }} {{ $t(`${config.footer.copyright}`) }}
  </p>
</template>

<style scoped>

</style>
