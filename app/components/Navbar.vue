<template>
  <section class="relative isolate w-full">
    <nav class="mx-auto max-w-7xl">
      <div class="relative mx-auto flex flex-col flex-wrap px-8 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex flex-row items-center justify-between gap-2 py-6">
          <div class="flex items-center gap-2">
            <ButtonsAppLogo />
            <ButtonsAppName />
          </div>
          <div class="cursor-pointer text-2xl focus:outline-none lg:hidden">
            <ButtonsNavbarOpen
              v-if="!showMenu"
              @toggle-navbar="toggleNavbar"
            />
            <ButtonsNavbarClose
              v-else
              @toggle-navbar="toggleNavbar"
            />
          </div>
        </div>
        <ul
          :class="{ 'scale-y-0 transform lg:transform-none': !showMenu, 'h-full': showMenu }"
          class="flex h-0 flex-grow origin-top flex-col gap-3 duration-100  lg:flex lg:h-auto lg:flex-row lg:items-center lg:justify-end lg:pb-0"
        >
          <ButtonsNavbarMenu />

        </ul>
      </div>
    </nav>
  </section>
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
