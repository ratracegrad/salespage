<template>
  <button
    class="block cursor-pointer text-2xl focus:outline-none lg:hidden"
    type="button"
    @click="$emit('toggleNavbar')"
  >
    <Icon name="mdi:close" />
  </button>
</template>

<script lang="ts" setup>
defineEmits(['toggleNavbar'])
</script>

<style lang="scss" scoped>

</style>
