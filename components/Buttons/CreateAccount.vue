<template>
	<div class="text-sm font-medium text-gray-500 dark:text-gray-300 mt-3">
		{{ $t('login.notRegistered') }} 
		<NuxtLink to="/register" class="text-blue-700 hover:underline dark:text-blue-500">{{ $t('login.createAccount') }}</NuxtLink>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>