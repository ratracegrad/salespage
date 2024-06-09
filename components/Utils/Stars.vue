<template>
	<div class="flex flex-row items-center">
		<Icon v-for="star in entry.stars" :key="entry.id" name="i-fa6-solid-star" class="text-yellow-500" />
	</div>
</template>

<script setup lang="ts">
defineProps({
	entry: {
		type: Object,
		required: true
	}
})
</script>

<style scoped>

</style>