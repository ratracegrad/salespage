<script setup lang="ts">
import config from '~/config'

const testimonials = config.testimonials.slice(0, 3)
</script>

<template>
  <SectionWrapper
    id="testimonial"
    class="bg-testimonialLightBackground text-testimonialLightText dark:bg-testimonialDarkBackground dark:text-testimonialDarkText"
  >
    <div class="mx-auto max-w-xl text-center">
      <TestimonialTitle />
    </div>
    <div class="mx-auto mt-16 flow-root max-w-2xl lg:mx-0 sm:mt-20 lg:max-w-none">
      <div class="grid lg:grid-cols-3 sm:grid-cols-1 sm:-mx-4">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="pt-8 sm:inline-block sm:w-full sm:px-4"
        >
          <figure class="rounded-2xl p-8 text-sm leading-6 bg-white border border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <blockquote>
              <p>{{ $t(`${testimonial.testimony}`) }}</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img
                class="h-10 w-10 rounded-full"
                :src="testimonial.img"
                alt=""
              >
              <div class="flex flex-col justify-center">
                <div class="font-semibold">
                  {{ testimonial.name }}
                </div>
                <div>
                  {{ testimonial.title }}
                </div>
                <UtilsStars :entry="testimonial" />
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
