<template>
	<div class="flex md:flex-row flex-col items-center gap-2 box-border">
		<NuxtLink class="px-3.5 py-2.5 mt-4 w-full md:mt-0 text-sm text-center shadow-sm rounded-md bg-transparent text-lightText dark:text-darkText border-2 border-primary" to="/login">{{ $t('navbar.login') }}</NuxtLink>
		<NuxtLink class="px-3.5 py-2.5 mt-4 w-full md:mt-0 text-sm text-center shadow-sm rounded-md bg-primary text-darkText dark:text-darkText" to="/register">{{ $t('navbar.register') }}</NuxtLink>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>