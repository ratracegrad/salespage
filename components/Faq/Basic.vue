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
      class="text-left space-y-12 px-2 xl:px-16 mt-12"
    >
      <div class="mt-4 flex">
        <div>
          <div class="flex items-center h-16 border-l-4 border-primary dark:border-secondary">
            <span class="text-4xl px-4">Q.</span>
          </div>
          <div class="flex items-center h-16 border-l-4 border-gray-400">
            <span class="text-4xl px-4">A.</span>
          </div>
        </div>
        <div>
          <div class="flex items-center h-16">
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
