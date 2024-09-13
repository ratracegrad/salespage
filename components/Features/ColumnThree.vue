<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <SectionWrapper
    id="features"
    class="bg-featureLightBackground text-featureLightText dark:bg-featureDarkBackground dark:text-featureDarkText"
  >
    <div class="text-center">
      <FeaturesTitle />
      <div class="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="feature in config.features"
          :key="feature.id"
          class="group h-full rounded-lg bg-white p-8 text-featureLightText lg:p-10"
        >
          <div class="flex flex-col gap-x-10 gap-y-6 text-left sm:gap-y-8">
            <Icon
              :name="feature.icon"
              size="60px"
              class="text-primary"
            />
            <div class="mb-4 text-xl font-semibold lg:text-2xl">
              {{ $t(`${feature.title}`) }}
            </div>
            <p class="mb-5 line-clamp-3">
              {{ $t(`${feature.description}`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
</style>
