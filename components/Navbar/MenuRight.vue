<template>
	<nav class="w-full bg-navbarLightBackground dark:bg-navbarDarkBackground text-navbarLightText dark:text-navbarDarkText border-b-2 border-primary">
		<div class="relative flex flex-col px-8 mx-auto md:items-center md:justify-between md:flex-row">
				<div class="flex flex-row items-center justify-between gap-2 py-6">
					<div class="flex items-center gap-2">
						<ButtonsAppLogo />
						<ButtonsAppName />
					</div>
          <div class="cursor-pointer text-2xl md:hidden focus:outline-none">
            <ButtonsNavbarOpen v-if="!showMenu" @toggle-navbar="toggleNavbar" />
            <ButtonsNavbarClose v-else @toggle-navbar="toggleNavbar" />
          </div>
				</div>
				<ul :class="{ 'transform md:transform-none scale-y-0': !showMenu, 'h-full': showMenu }" class="h-0 md:h-auto flex flex-col flex-grow md:items-center gap-3 pb-4 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300">
          <ButtonsNavbarMenu />
					<UtilsLanguageToggle v-if="config.navbar.showLanguageToggle" class="hidden md:block" />
					<UtilsDarkToggle v-if="config.navbar.showDarkToggle" class="hidden md:block" />
					<ButtonsLogin />
				</ul>
		</div>
	</nav>
</template>

<script setup lang="ts">
import config from '~/config'

const showMenu = ref(false)

const toggleNavbar = () => {
	showMenu.value = !showMenu.value
}
</script>

<style scoped>

</style>