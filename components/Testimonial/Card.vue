<template>
  <SectionWrapper id="testimonials" class="bg-testimonialLightBackground text-testimonialLightText dark:bg-testimonialDarkBackground dark:text-testimonialDarkText">
    <div class="mx-auto max-w-xl text-center">
      <TestimonialTitle />
    </div>
    <div class="mx-auto mt-16 flow-root max-w-2xl lg:mx-0 sm:mt-20 lg:max-w-none">
      <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 sm:-mx-4">
        <div v-for="testimonial in config.testimonials" :key="testimonial.id" class="pt-8 sm:inline-block sm:w-full sm:px-4">
					<div class="flex flex-col bg-white border border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
						<img :src="testimonial.img" alt="" class="object-cover object-center w-full h-60 max-w-full rounded-t-lg" >
						<div class="p-4">
							<div class="font-semibold">
								{{ testimonial.name }}
							</div>
							<div>
								{{ testimonial.title }}
							</div>
							<UtilsStars :entry="testimonial" />
							<div class="mt-4">
								{{ $t(`${testimonial.testimony}`) }}
							</div>
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