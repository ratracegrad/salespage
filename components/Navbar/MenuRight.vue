<template>
	<nav class="bg-navbarLightBackground dark:bg-navbarDarkBackground text-navbarLightText dark:text-navbarDarkText border-b-2 border-primary pb-4">
		<div class="relative flex flex-wrap flex-col px-8 mx-auto lg:items-center lg:justify-between lg:flex-row">
				<div class="flex flex-row items-center justify-between gap-2 py-6">
					<div class="flex items-center gap-2">
						<ButtonsAppLogo />
						<ButtonsAppName />
					</div>
          <div class="cursor-pointer text-2xl lg:hidden focus:outline-none">
            <ButtonsNavbarOpen v-if="!showMenu" @toggle-navbar="toggleNavbar" />
            <ButtonsNavbarClose v-else @toggle-navbar="toggleNavbar" />
          </div>
				</div>
				<ul :class="{ 'transform lg:transform-none scale-y-0': !showMenu, 'h-full': showMenu }" class="h-0 lg:h-auto flex flex-col flex-grow lg:items-center gap-3  lg:pb-0 lg:flex lg:justify-end lg:flex-row origin-top duration-100">
          <ButtonsNavbarMenu />
					<UtilsLanguageToggle v-if="config.navbar.showLanguageToggle" class="hidden lg:block" />
					<div class="hidden lg:block">
						<UtilsDarkToggle v-if="config.navbar.showDarkToggle" />
					</div>
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