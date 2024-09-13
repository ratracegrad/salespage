<template>
  <nav class="w-full border-b-2 border-primary bg-navbarLightBackground text-navbarLightText dark:bg-navbarDarkBackground dark:text-navbarDarkText">
    <div class="relative mx-auto flex flex-col px-8 md:flex-row md:items-center md:justify-between">
      <div class="flex w-full flex-row items-center justify-between py-6">
        <div class="flex items-center">
          <ButtonsAppLogo />
          <ButtonsAppName class="ml-3" />
          <ul
            :class="{ 'scale-y-0 transform md:transform-none': !showMenu, 'h-full': showMenu }"
            class="hidden h-0 flex-grow origin-top flex-col pb-4 duration-300 md:flex md:h-auto md:flex-row md:items-center md:justify-end md:pb-0 lg:flex"
          >
            <ButtonsNavbarMenu />
          </ul>
        </div>
        <div class="hidden items-center justify-start gap-3 lg:flex">
          <UtilsLanguageToggle v-if="config.navbar.showLanguageToggle" />
          <UtilsDarkToggle v-if="config.navbar.showDarkToggle" />
          <ButtonsLogin />
        </div>
        <button class="cursor-pointer text-2xl focus:outline-none lg:hidden">
          <ButtonsNavbarOpen
            v-if="!showMenu"
            @toggle-navbar="toggleNavbar"
          />
          <ButtonsNavbarClose
            v-else
            @toggle-navbar="toggleNavbar"
          />
        </button>
      </div>
      <ul
        :class="{ 'scale-y-0 transform md:transform-none': !showMenu, 'h-full': showMenu }"
        class="flex h-0 flex-grow origin-top flex-col pb-4 duration-300 md:hidden"
      >
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
