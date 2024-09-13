<template>
  <SectionWrapper
    id="hero"
    class="bg-heroLightBackground text-heroLightText dark:bg-heroDarkBackground dark:text-heroDarkText"
  >
    <div class="w-12/12 mx-auto lg:w-11/12 xl:w-10/12">
      <div class="xxl:w-4/5 mx-auto text-center sm:w-4/5">
        <HeroTitle />
      </div>
      <img
        class="mx-auto my-10 aspect-video rounded-xl"
        src="~/assets/images/Hero1.jpg"
        alt="Hero Image"
      >
      <div class="mt-7 flex items-center justify-center gap-x-6">
        <ButtonsHero />
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
