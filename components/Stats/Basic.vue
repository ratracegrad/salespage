<template>
  <SectionWrapper
    id="stats"
    class="bg-statsLightBackground text-statsLightText dark:bg-statsDarkBackground dark:text-statsDarkText"
  >
    <div class="mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div class="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 lg:gap-24">
        <div
          v-for="stat in config.stats"
          :key="stat.id"
          class="flex flex-col items-center justify-center"
        >
          <h4 class="text-lg font-semibold sm:text-xl">
            {{ $t(`${stat.title}`) }}
          </h4>
          <p class="mt-2 text-4xl font-bold sm:mt-3 sm:text-6xl">
            {{ stat.value }}
          </p>
          <p class="mt-1">
            {{ $t(`${stat.description}`) }}
          </p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import config from '~/config'
</script>

<style scoped>

</style>
