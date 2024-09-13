<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <SectionWrapper
    id="features"
    class="bg-featureLightBackground text-featureLightText dark:bg-featureDarkBackground dark:text-featureDarkText"
  >
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-5">
        <FeaturesTitle />
      </div>
      <div class="mt-10 lg:col-span-7 lg:mt-0">
        <dl class="space-y-8">
          <div
            v-for="feature in config.features"
            :key="feature.id"
            class="flex flex-col space-y-8"
          >
            <dt class="text-md font-semibold">
              {{ $t(`${feature.title}`) }}
            </dt>
            <dd class="text-md mt-4">
              {{ $t(`${feature.description}`) }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>

</style>
