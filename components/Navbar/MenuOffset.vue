<template>
	<nav class="w-full relative h-40 flex items-center justify-center bg-navbarLightBackground dark:bg-navbarDarkBackground text-navbarLightText dark:text-navbarDarkText">	
    <div class="w-full max-w-7xl flex items-center justify-between rounded-3xl px-6 py-6 bg-navbarLightOffsetBackground dark:bg-navbarDarkOffsetBackground">
      <div class="relative flex items-center justify-between">
				<div class="flex items-center gap-2">
					<ButtonsAppLogo />
					<ButtonsAppName />
				</div>
				<ButtonsNavbarOpen v-if="!showMenu" @toggle-navbar="toggleNavbar" />
				<ButtonsNavbarClose v-else @toggle-navbar="toggleNavbar" />
      </div>
      <div :class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow justify-between items-center">
        <ul class="flex flex-col lg:flex-row lg:justify-between list-none ml-auto gap-2">
					<ButtonsNavbarMenu />
        </ul>
				<!-- <UtilsLanguageToggle v-if="config.navbar.showLanguageToggle" class="hidden lg:flex" /> -->
				<UtilsDarkToggle v-if="config.navbar.showDarkToggle" class="hidden lg:flex" />
				<ButtonsLogin />
      </div>
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