<template>
	<nav class="bg-navbarLightBackground dark:bg-navbarDarkBackground text-navbarLightText dark:text-navbarDarkText border-b-2 border-primary">
		<div class="relative flex flex-wrap items-center justify-between px-8 py-3 mb-3 ">
			<div class="flex items-center">
				<ButtonsAppLogo />
				<ButtonsAppName class="ml-3"/>
			</div>
			<div class="lg:hidden">
				<ButtonsNavbarOpen @toggleNavbar="toggleNavbar" />
			</div>
			<ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
				<ButtonsNavbarMenu />
			</ul>
			<div class="hidden lg:flex items-center gap-3 lg:ml-auto">
				<UtilsLanguageToggle v-if="config.navbar.showLanguageToggle" />
				<UtilsDarkToggle v-if="config.navbar.showDarkToggle" />
				<ButtonsLogin />
			</div>
		</div>
	</nav>
	<div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="relative z-50 ">
		<div class="navbar-backdrop inset-0 bg-gray-800 opacity-25"></div>
		<nav class="top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto bg-navbarLightBackground dark:bg-navbarDarkBackground text-navbarLightText dark:text-navbarDarkText">
			<div class="flex items-center justify-between mb-8">
				<div class="flex items-center">
					<ButtonsAppLogo />
					<ButtonsAppName class="ml-3"/>
				</div>
				<ButtonsNavbarClose @toggleNavbar="toggleNavbar" />
			</div>
			<div>
				<ul>
					<ButtonsNavbarMenu />
				</ul>
			</div>
				<ButtonsLogin />
		</nav>
	</div>
</template>

<script setup lang="ts">
import config from '~/config'

const showMenu = ref(false)

const toggleNavbar = () => {
	console.log('toggleNavbar')
  showMenu.value = !showMenu.value
}
</script>

<style scoped>

</style>