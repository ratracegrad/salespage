<template>
	<section :id="id" :class="`relative isolate w-full`">
		<div class="mx-auto max-w-7xl px-6 py-10 lg:py-20 lg:px-8">
			<slot />
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps({
	id: {
		type: String,
		required: true
	}
})
</script>

<style scoped>

</style>