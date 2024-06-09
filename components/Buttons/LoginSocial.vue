<template>
	<div class="mt-4 flex flex-col items-center justify-between gap-2 w-full">
		<div v-if="showSocial('google')" class="w-full">
			<button type="button" class="w-full flex justify-center items-center gap-2 bg-zinc-50 text-sm p-2 rounded-md hover:bg-zinc-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
				<Icon name="i-logos-google-icon" />
				{{ $t('login.google') }} 
			</button>
		</div>
		<div v-if="showSocial('github')" class="w-full">
			<button type="button" class="w-full flex justify-center items-center gap-2 bg-zinc-50 text-sm p-2 rounded-md hover:bg-zinc-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
				<Icon name="i-logos-github-icon" />
				{{ $t('login.github') }} 
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import config from '~/config'

function showSocial(brand: string): boolean {
	return config.social.some(social => social.name.toLowerCase() === brand.toLowerCase() && social.login)
}
</script>

<style scoped>

</style>