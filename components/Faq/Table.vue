<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <SectionWrapper id="faq" class="bg-faqLightBackground text-faqLightText dark:bg-faqDarkBackground dark:text-faqDarkText">
    <FaqTitle />
    <dl class="mt-10 space-y-8 divide-y divide-gray-900/10">
      <div v-for="faq in config.faqs" :key="faq.id" class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <dt class="text-md font-semibold lg:col-span-5">
          {{ $t(`${faq.question}`) }}
        </dt>
        <dd class="text-md lg:col-span-7 lg:mt-0">
          {{ $t(`${faq.answer}`) }}
        </dd>
      </div>
    </dl>
  </SectionWrapper>
</template>

<style scoped>

</style>
