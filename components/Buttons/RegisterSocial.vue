<template>
	<div class="mt-4 flex flex-col items-center justify-between gap-2">
		<div v-if="config.social.google.login" class="w-full">
			<button type="button" class="w-full flex justify-center items-center gap-2 bg-zinc-100 text-sm p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
				<Icon name="i-logos-google-icon" />
				{{ $t('register.google') }} 
			</button>
		</div>
		<div v-if="config.social.github.login" class="w-full">
			<button type="button" class="w-full flex justify-center items-center gap-2 bg-zinc-100 text-sm p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
				<Icon name="i-logos-github-icon" />
				{{ $t('register.github') }} 
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import config from '~/config'
</script>

<style scoped>

</style>