<template>
  <div class="relative inline-block text-left">
    <button
      id="menu-button"
      type="button"
      class="inline-flex w-full justify-center gap-x-1.5 rounded-md border-2 border-primary px-3 py-3.5 text-sm font-semibold text-slate-900 dark:text-white"
      aria-expanded="true"
      aria-haspopup="true"
      @click="toggle"
    >
      <Icon :name="language.flag" />
      <Icon name="mdi:chevron-down" />
    </button>

    <Transition class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div
        v-if="isOpen"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div
          class="py-1"
          role="none"
        >
          <button
            v-for="item in locales"
            :key="item.code"
            href="#"
            class="flex w-full items-center gap-3 px-4 py-2 text-sm text-gray-700"
            :class="{ 'bg-gray-100 text-gray-900': language.code === item.code }"
            role="menuitem"
            tabindex="-1"
            @click="change(item)"
          >
            <Icon :name="item.flag" />
            {{ item.name }}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()

const isOpen = ref(false)

const language = computed(() => {
  return locales.value.find(item => item.code === locale.value)
})

const open = () => {
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
}

const toggle = () => {
  if (isOpen.value) {
    close()
  }
  else {
    open()
  }
}

const change = async (locale) => {
  close()
  await setLocale(locale.code)
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
