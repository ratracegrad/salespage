<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <SectionWrapper
    id="testimonials"
    class="bg-testimonialLightBackground text-testimonialLightText dark:bg-testimonialDarkBackground dark:text-testimonialDarkText"
  >
    <div class="mx-auto max-w-xl text-center">
      <TestimonialTitle />
    </div>
    <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
      <div class="grid sm:-mx-4 sm:grid-cols-1 lg:grid-cols-3">
        <div
          v-for="testimonial in config.testimonials"
          :key="testimonial.id"
          class="pt-8 sm:inline-block sm:w-full sm:px-4"
        >
          <figure class="rounded-2xl border border-gray-200 bg-white text-sm leading-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <blockquote class="p-8">
              <p>{{ $t(`${testimonial.testimony}`) }}</p>
            </blockquote>
            <figcaption class="mt-6 flex h-24 items-center gap-x-4 bg-testimonialDarkBackground px-8 text-testimonialDarkText dark:bg-testimonialLightBackground dark:text-testimonialLightText">
              <img
                class="size-10 rounded-full object-cover object-center"
                :src="testimonial.img"
                alt=""
              >
              <div>
                <div class="font-semibold">
                  {{ testimonial.name }}
                </div>
                <div>
                  {{ testimonial.title }}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>

</style>
