<template>
  <SectionWrapper
    id="features"
    class="bg-featureLightBackground text-featureLightText dark:bg-featureDarkBackground dark:text-featureDarkText"
  >
    <img
      class="mx-auto aspect-video w-full rounded-xl object-cover"
      src="https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
      alt="Image Description"
    >

    <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12">
      <div class="lg:col-span-1">
        <h2 class="text-2xl font-bold md:text-3xl">
          {{ $t('features.bylineTitle') }}
        </h2>
        <p class="mt-2 md:mt-4">
          {{ $t('features.bylineDescription') }}
        </p>
      </div>

      <div class="lg:col-span-2">
        <div class="grid gap-8 sm:grid-cols-2 md:gap-12">
          <div
            v-for="feature in config.features"
            :key="feature.id"
            class="flex gap-x-5"
          >
            <Icon
              :name="feature.icon"
              class="mt-1 size-8 flex-shrink-0 text-featureLightText dark:text-featureDarkText"
            />
            <div class="grow">
              <h3 class="text-lg font-semibold">
                {{ $t(`${feature.title}`) }}
              </h3>
              <p class="mt-1">
                {{ $t(`${feature.description}`) }}
              </p>
            </div>
          </div>
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
