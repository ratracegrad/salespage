<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <footer
    id="footer"
    aria-labelledby="footer-heading"
    class="relative isolate bg-footerLightBackground text-footerLightText dark:bg-footerDarkBackground dark:text-footerDarkText border-t-2 border-footerLightBackground"
  >
    <div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <div class="flex items-center gap-x-3">
            <ButtonsAppLogo /><ButtonsAppName />
          </div>
          <ButtonsSocialLinks class="flex sm:space-x-6" />
          <UtilsCopyrightNotice />
        </div>
        <div class="grid grid-cols-2 mt-16 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div class="mt-10 md:mt-0">
              <h3 class="font-semibold leading-6">
                {{ $t('footer.links') }}
              </h3>
              <ul
                role="list"
                class="mt-6 space-y-4"
              >
                <li
                  v-for="item in config.footer.links"
                  :key="item.name"
                >
                  <NuxtLink
                    :to="item.href"
                    class="leading-6 hover:text-lightText/70 dark:hover:text-darkText/70"
                  >
                    {{ $t(`${item.name}`) }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="font-semibold leading-6">
                {{ $t('footer.legal') }}
              </h3>
              <ul
                role="list"
                class="mt-6 space-y-4"
              >
                <li
                  v-for="item in config.footer.legal"
                  :key="item.name"
                >
                  <NuxtLink
                    :to="item.href"
                    class="leading-6 hover:text-lightText/70 dark:hover:text-darkText/70"
                  >
                    {{ $t(`${item.name}`) }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
