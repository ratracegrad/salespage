<template>
  <button
    class="cursor-pointer text-2xl focus:outline-none lg:hidden"
    type="button"
    @click="$emit('toggleNavbar')"
  >
    <Icon name="mdi:menu" />
  </button>
</template>

<script setup lang="ts">
defineEmits(['toggleNavbar'])
</script>

<style scoped>

</style>
