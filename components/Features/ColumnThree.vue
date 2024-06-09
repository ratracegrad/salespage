<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <SectionWrapper id="features" class="bg-featureLightBackground dark:bg-featureDarkBackground text-featureLightText dark:text-featureDarkText">
    <div class="text-center">
      <FeaturesTitle />
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-20">
        <div v-for="feature in config.features" :key="feature.id" class="group rounded-lg bg-white text-featureLightText p-8 lg:p-10 h-full">
          <div class="flex flex-col gap-x-10 gap-y-6 sm:gap-y-8 text-left">
						<Icon :name="feature.icon" size="60px" class="text-primary"  />
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
