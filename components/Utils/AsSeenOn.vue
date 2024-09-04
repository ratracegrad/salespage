<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <SectionWrapper
    id="asSeenOn"
    class="relative isolate w-full bg-asSeenOnLightBackground dark:bg-asSeenOnDarkBackground text-asSeenOnLightText dark:text-asSeenOnDarkText"
  >
    <div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-2xl font-bold sm:text-4xl">
          {{ $t('asSeenOn.title') }}
        </h2>
      </div>

      <div class="flex justify-center items-center flex-wrap mt-24 gap-12 sm:gap-12">
        <Icon
          v-for="entry in config.asSeenOn"
          :key="entry.id"
          :name="entry.icon"
          size="48px"
        />
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>

</style>
