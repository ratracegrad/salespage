<template>
	<button class="cursor-pointer text-2xl lg:hidden focus:outline-none" type="button" @click="$emit('toggleNavbar')">
		<Icon name="mdi:menu" />
	</button>
</template>

<script setup lang="ts">
defineEmits(['toggleNavbar'])
</script>

<style scoped>

</style>