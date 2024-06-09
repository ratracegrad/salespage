<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <SectionWrapper id="testimonials" class="bg-testimonialLightBackground text-testimonialLightText dark:bg-testimonialDarkBackground dark:text-testimonialDarkText">
    <div class="mx-auto max-w-xl text-center">
      <TestimonialTitle />
    </div>
    <div class="mx-auto mt-16 flow-root max-w-2xl lg:mx-0 sm:mt-20 lg:max-w-none">
      <div class="grid lg:grid-cols-3 sm:grid-cols-1 sm:-mx-4">
        <div v-for="testimonial in config.testimonials" :key="testimonial.id" class="pt-8 sm:inline-block sm:w-full sm:px-4">
          <figure class="rounded-2xl text-sm leading-6 bg-white border border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <blockquote class="p-8">
              <p>{{ $t(`${testimonial.testimony}`) }}</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4 h-24 bg-testimonialDarkBackground dark:bg-testimonialLightBackground px-8 text-testimonialDarkText dark:text-testimonialLightText">
              <img class="h-10 w-10 object-cover object-center rounded-full" :src="testimonial.img" alt="">
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
