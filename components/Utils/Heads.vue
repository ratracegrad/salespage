<template>
  <div class="flex flex-col md:flex-row justify-center align-center gap-3">
    <div class="-space-x-5 flex justify-start">
      <div
        v-for="testimonial in config.testimonials"
        :key="testimonial.id"
      >
        <img
          class="w-12 h-12 object-cover object-center rounded-full"
          :src="testimonial.img"
          alt=""
        >
      </div>
    </div>
    <div class="flex flex-col justify-center items-center md:items-start gap-1 font-semibold text-xl">
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
