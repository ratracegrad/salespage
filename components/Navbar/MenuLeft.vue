<template>
	<nav class="w-full bg-navbarLightBackground dark:bg-navbarDarkBackground text-navbarLightText dark:text-navbarDarkText border-b-2 border-primary">
		<div class="relative flex flex-col  px-8 mx-auto md:items-center md:justify-between md:flex-row">
				<div class="flex flex-row items-center justify-between py-6 w-full">
					<div class="flex items-center">
						<ButtonsAppLogo />
						<ButtonsAppName class="ml-3"/>
						<ul :class="{ 'transform md:transform-none scale-y-0': !showMenu, 'h-full': showMenu }" class="h-0 md:h-auto hidden lg:flex flex-col flex-grow md:items-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300">
							<ButtonsNavbarMenu />
						</ul>
					</div>
					<div class="hidden lg:flex justify-start items-center gap-3">
						<UtilsLanguageToggle v-if="config.navbar.showLanguageToggle" />
						<UtilsDarkToggle v-if="config.navbar.showDarkToggle" />
						<ButtonsLogin />
					</div>
          <button class="cursor-pointer text-2xl lg:hidden focus:outline-none">
            <ButtonsNavbarOpen v-if="!showMenu" @toggle-navbar="toggleNavbar" />
            <ButtonsNavbarClose v-else @toggle-navbar="toggleNavbar" />
          </button>
				</div>
				<ul :class="{ 'transform md:transform-none scale-y-0': !showMenu, 'h-full': showMenu }" class="h-0 flex flex-col flex-grow pb-4 md:hidden origin-top duration-300">
          <ButtonsNavbarMenu />
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