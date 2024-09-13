<template>
  <SectionWrapper
    id="faq"
    class="bg-faqLightBackground text-faqLightText dark:bg-faqDarkBackground dark:text-faqDarkText"
  >
    <div class="text-center">
      <FaqTitle />
    </div>
    <div
      v-for="faq in config.faqs"
      :key="faq.id"
      class="mt-12 space-y-12 px-2 text-left xl:px-16"
    >
      <div class="mt-4 flex">
        <div>
          <div class="flex h-16 items-center border-l-4 border-primary dark:border-secondary">
            <span class="px-4 text-4xl">Q.</span>
          </div>
          <div class="flex h-16 items-center border-l-4 border-gray-400">
            <span class="px-4 text-4xl">A.</span>
          </div>
        </div>
        <div>
          <div class="flex h-16 items-center">
            <span class="text-lg font-bold">{{ $t(`${faq.question}`) }}</span>
          </div>
          <div class="flex items-center py-2">
            <span>{{ $t(`${faq.answer}`) }}</span>
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
