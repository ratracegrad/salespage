<template>
  <section
    id="register"
    class="bg-registerLightBackground text-registerLightText dark:bg-registerDarkBackground dark:text-registerDarkText"
  >
    <!-- <RegisterEmailOnly /> -->
    <RegisterSocialOnly />
    <!-- <RegisterEmailAndSocial /> -->
    <!-- <RegisterImageLeft /> -->
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
</script>

<style scoped>

</style>
