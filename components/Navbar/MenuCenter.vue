<template>
  <nav class="bg-navbarLightBackground text-navbarLightText dark:bg-navbarDarkBackground dark:text-navbarDarkText">
    <div class="relative mb-3 flex flex-wrap items-center justify-between px-8 py-3 ">
      <div class="flex items-center gap-2">
        <ButtonsAppLogo />
        <ButtonsAppName />
      </div>
      <div class="lg:hidden">
        <ButtonsNavbarOpen @toggle-navbar="toggleNavbar" />
      </div>
      <ul class="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6">
        <ButtonsNavbarMenu />
      </ul>
      <div class="hidden items-center gap-3 lg:ml-auto lg:flex">
        <UtilsLanguageToggle v-if="config.navbar.showLanguageToggle" />
        <UtilsDarkToggle v-if="config.navbar.showDarkToggle" />
        <ButtonsLogin />
      </div>
    </div>
  </nav>
  <div
    :class="{ hidden: !showMenu, flex: showMenu }"
    class="relative z-50 "
  >
    <div class="navbar-backdrop inset-0 bg-gray-800 opacity-25" />
    <nav class="inset-y-0 left-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-navbarLightBackground p-6 text-navbarLightText dark:bg-navbarDarkBackground dark:text-navbarDarkText">
      <div class="mb-8 flex items-center justify-between">
        <div class="flex items-center">
          <ButtonsAppLogo />
          <ButtonsAppName class="ml-3" />
        </div>
        <ButtonsNavbarClose @toggle-navbar="toggleNavbar" />
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
  showMenu.value = !showMenu.value
}
</script>

<style scoped>

</style>
