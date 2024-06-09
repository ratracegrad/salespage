<template>
	<div class="m-0 p-0 w-screen h-screen flex items-center justify-center bg-loginLightBackground text-lightText dark:bg-loginDarkBackground dark:text-darkText">
		<div class="max-w-lg w-full mx-auto">
			<div
        class="bg-white w-full border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
				<h1 class="text-3xl font-semibold mb-6 text-center">{{ $t('login.title') }}</h1>
				<ButtonsLoginSocial />
				<div class="mt-4 text-sm text-center">
					<p>{{ $t('login.or') }}</p>
				</div>
				<form action="#" method="POST" class="space-y-4">
					<div>
						<label for="email" class="block text-sm font-medium">{{ $t('login.email') }}</label>
						<input id="email" type="text" name="email" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300">
					</div>
					<div>
						<label for="password" class="block text-sm font-medium">{{ $t('login.password') }}</label>
						<input id="password" type="password" name="password" class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300">
					</div>
					<div>
						<button type="submit" class="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">{{ $t('login.submit') }}</button>
					</div>
				</form>
				<ButtonsCreateAccount />
				<ButtonsReturnHome />
			</div>
			
		</div>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>