<template>
  <SectionWrapper
    id="faq"
    class="bg-faqLightBackground text-faqLightText dark:bg-faqDarkBackground dark:text-faqDarkText"
  >
    <FaqTitle />
    <div class="mt-20">
      <dl class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
        <div
          v-for="faq in config.faqs"
          :key="faq.id"
        >
          <dt class="text-base font-semibold leading-7">
            {{ $t(`${faq.question}`) }}
          </dt>
          <dd class="mt-2 text-base leading-7">
            {{ $t(`${faq.answer}`) }}
          </dd>
        </div>
      </dl>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import config from '~/config'
</script>

<style scoped>

</style>
