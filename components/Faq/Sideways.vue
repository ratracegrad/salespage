<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <SectionWrapper id="faq" class="bg-faqLightBackground text-faqLightText dark:bg-faqDarkBackground dark:text-faqDarkText">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-5">
        <FaqTitle />
      </div>
      <div class="mt-10 lg:col-span-7 lg:mt-0">
        <dl class="space-y-8">
          <div v-for="faq in config.faqs" :key="faq.id" class="flex flex-col space-y-8">
            <dt class="text-md font-semibold">
              {{ $t(`${faq.question}`) }}
            </dt>
            <dd class="text-md mt-4">
              {{ $t(`${faq.answer}`) }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>

</style>
