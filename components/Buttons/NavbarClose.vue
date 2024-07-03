<template>
	<button class="cursor-pointer text-2xl block lg:hidden focus:outline-none" type="button" @click="$emit('toggleNavbar')">
		<Icon name="mdi:close" />
	</button>
</template>

<script lang="ts" setup>
defineEmits(['toggleNavbar'])
</script>

<style lang="scss" scoped>

</style>