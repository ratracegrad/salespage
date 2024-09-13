<template>
  <div class="align-center flex flex-col justify-center gap-3 md:flex-row">
    <div class="flex justify-start -space-x-5">
      <div
        v-for="testimonial in config.testimonials"
        :key="testimonial.id"
      >
        <img
          class="size-12 rounded-full object-cover object-center"
          :src="testimonial.img"
          alt=""
        >
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-1 text-xl font-semibold md:items-start">
      <UtilsStars :entry="{ stars: 5 }" />
      {{ $t('testimonials.headComment') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import config from '~/config'
</script>

<style scoped>

</style>
