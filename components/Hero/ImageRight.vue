<template>
  <SectionWrapper id="hero" class="bg-heroLightBackground text-heroLightText dark:bg-heroDarkBackground dark:text-heroDarkText">
    <div class="my-10space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
      <div class="flex flex-col justify-center items-center">
        <div class="text-center">
          <HeroTitle />
        </div>
        <div class="mt-10">
          <ButtonsHero />
        </div>
        <UtilsHeads class="mt-7"/>
      </div>
      <div class="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
        <NuxtImg src='/images/Hero4.png' alt="hero image" class="mx-auto rounded-xl" width="580" height="390" sizes="xs:340px md:460px lg:580" />
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>