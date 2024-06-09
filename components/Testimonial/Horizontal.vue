<template>
	  <SectionWrapper id="testimonial" class="bg-testimonialLightBackground text-testimonialLightText dark:bg-testimonialDarkBackground dark:text-testimonialDarkText">
    <div class="mx-auto max-w-xl text-center">
      <TestimonialTitle />
    </div>
    <div class="mx-auto mt-16 flow-root max-w-2xl lg:mx-0 sm:mt-20 lg:max-w-none">
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 sm:-mx-4 mx-auto">
        <div v-for="testimonial in config.testimonials" :key="testimonial.id" class="pt-8 sm:inline-block sm:w-full sm:px-4">
					<div class="flex flex-col items-center mx-auto rounded-lg shadow md:flex-row md:max-w-xl bg-white border border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
						<img class="object-cover object-center rounded-t-lg w-full h-96 min-h-96 md:w-64 md:rounded-none md:rounded-s-lg" :src="testimonial.img" alt="">
						<div class="flex flex-col justify-between p-4 leading-normal">
							<div class="font-semibold">
								{{ testimonial.name }}
							</div>
							<div>
								{{ testimonial.title }}
							</div>
							<p class="mt-3 font-normal">{{ $t(`${testimonial.testimony}`) }}</p>
							<UtilsStars :entry="testimonial" class="mt-2" />
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