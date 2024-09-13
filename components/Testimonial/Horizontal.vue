<template>
  <SectionWrapper
    id="testimonial"
    class="bg-testimonialLightBackground text-testimonialLightText dark:bg-testimonialDarkBackground dark:text-testimonialDarkText"
  >
    <div class="mx-auto max-w-xl text-center">
      <TestimonialTitle />
    </div>
    <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
      <div class="mx-auto grid sm:-mx-4 sm:grid-cols-1 lg:grid-cols-2">
        <div
          v-for="testimonial in config.testimonials"
          :key="testimonial.id"
          class="pt-8 sm:inline-block sm:w-full sm:px-4"
        >
          <div class="mx-auto flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row">
            <NuxtImg
              class="h-96 w-full rounded-t-lg object-cover object-center md:w-64 md:rounded-none md:rounded-s-lg"
              fit="fill"
              loading="lazy"
              width="16rem"
              height="24rem"
              sizes="xs:450px md:24rem"
              :src="testimonial.img"
              :alt="testimonial.name"
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="font-semibold">
                {{ testimonial.name }}
              </div>
              <div>
                {{ testimonial.title }}
              </div>
              <p class="mt-3 font-normal">
                {{ $t(`${testimonial.testimony}`) }}
              </p>
              <UtilsStars
                :entry="testimonial"
                class="mt-2"
              />
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
