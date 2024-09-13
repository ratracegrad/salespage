<script setup lang="ts">

</script>

<template>
  <SectionWrapper
    id="hero"
    class="bg-heroLightBackground text-heroLightText dark:bg-heroDarkBackground dark:text-heroDarkText"
  >
    <div class="hero mx-auto auto-rows-fr justify-items-center rounded-3xl bg-emerald-200 px-10 py-24 text-center sm:py-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:text-left">
      <div class="flex max-w-lg flex-col justify-center">
        <HeroTitle />
        <div class="mt-10">
          <ButtonsHero class="mt-10" />
        </div>
      </div>
      <div class="flex max-w-lg flex-col justify-center">
        <img
          class="relative z-10 object-scale-down"
          src="~/assets/images/heroImage.png"
          alt="App screenshot"
        >
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
.hero {
  background-image: url('~/assets/images/dotPattern.png');
  background-size: 30px;
}
</style>
