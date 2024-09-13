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
      <div class="mt-20 grid gap-6 sm:grid-cols-2">
        <div
          v-for="feature in config.features"
          :key="feature.id"
          class="group h-full rounded-lg border bg-white p-8 text-featureLightText lg:p-10"
        >
          <div class="flex flex-col gap-x-10 gap-y-6 sm:gap-y-8 lg:flex-row">
            <div class="relative mx-auto flex w-16 items-center justify-center lg:w-[98px]">
              <Icon
                :name="feature.icon"
                size="100px"
                class="text-primary"
              />
            </div>
            <div class="flex-1 text-center lg:text-left">
              <div class="mb-4 text-xl font-semibold lg:text-2xl">
                {{ $t(`${feature.title}`) }}
              </div>
              <p class="mb-5 line-clamp-2">
                {{ $t(`${feature.description}`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
</style>
