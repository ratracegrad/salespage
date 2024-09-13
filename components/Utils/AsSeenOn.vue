<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <SectionWrapper
    id="asSeenOn"
    class="relative isolate w-full bg-asSeenOnLightBackground text-asSeenOnLightText dark:bg-asSeenOnDarkBackground dark:text-asSeenOnDarkText"
  >
    <div class="mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-2xl font-bold sm:text-4xl">
          {{ $t('asSeenOn.title') }}
        </h2>
      </div>

      <div class="mt-24 flex flex-wrap items-center justify-center gap-12 sm:gap-12">
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
