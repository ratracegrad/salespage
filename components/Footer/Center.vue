<script setup lang="ts">
import config from '~/config'

const navigation = [...config.footer.links, ...config.footer.legal]
</script>

<template>
  <footer id="footer" class="relative isolate bg-footerLightBackground text-footerLightText dark:bg-footerDarkBackground dark:text-footerDarkText border-t-2 border-primary">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 lg:px-8">
      <nav class="my-10 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        <div v-for="item in navigation" :key="item.name">
          <NuxtLink :to="item.href" class="leading-6 hover:text-lightText/70 dark:hover:text-darkText/70">
            {{ $t(`${item.name}`) }}
          </NuxtLink>
        </div>
      </nav>
      <div class="mb-10 flex justify-center items-center">
        <ButtonsSocialLinks  />
      </div>
        
      <UtilsCopyrightNotice class="text-center text-sm mb-10" />
    </div>
  </footer>
</template>

<style scoped>

</style>
