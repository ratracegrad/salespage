<template>
  <SectionWrapper
    id="pricing"
    class="bg-pricingLightBackground text-pricingLightText dark:bg-pricingDarkBackground dark:text-pricingDarkText"
  >
    <div class="max-w-md mx-auto text-center">
      <PricingTitle />
    </div>
    <div class="flex flex-col justify-between items-center lg:flex-row lg:items-start mt-16">
      <div class="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
        <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
          <img
            src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
            alt=""
            class="rounded-3xl w-20 h-20"
          >
          <div class="ml-5 text-gray-500">
            <span class="block text-2xl font-semibold">{{ $t(`${config.pricing[0].name}`) }}</span>
            <span><span class="font-medium  text-xl align-top">{{ config.pricing[0].currencySymbol }}</span><span class="text-3xl font-bold">{{ config.pricing[0].price }} </span></span>
          </div>
        </div>
        <ul class="mb-7 font-medium text-gray-500">
          <li
            v-for="(feature, fIdx) in config.pricing[0].features"
            :key="fIdx"
            class="flex text-lg mb-2"
          >
            <Icon
              v-if="feature.allowed"
              name="i-fa6-solid-check"
              size="24px"
              class="shrink-0 text-green-700"
              aria-hidden="true"
            />
            <Icon
              v-else
              name="i-fa6-solid-x"
              size="24px"
              class="shrink-0 text-red-600"
              aria-hidden="true"
            />
            <span class="ml-3">{{ $t(`${feature.i18n}`) }}</span>
          </li>
        </ul>
        <ButtonsPricing :plan="config.pricing[0]" />
      </div>

      <div class="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-700 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
        <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
          <img
            src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
            alt=""
            class="rounded-3xl w-20 h-20"
          >
          <div class="ml-5 text-white">
            <span class="block text-3xl font-semibold">{{ $t(`${config.pricing[1].name}`) }}</span>
            <span><span class="font-medium text-xl align-top">{{ config.pricing[1].currencySymbol }}</span><span class="text-3xl font-bold">{{ config.pricing[1].price }} </span></span>
          </div>
        </div>
        <ul class="mb-10 font-medium text-xl">
          <li
            v-for="(feature, fIdx) in config.pricing[1].features"
            :key="fIdx"
            class="flex mb-6"
          >
            <Icon
              v-if="feature.allowed"
              name="i-fa6-solid-check"
              size="24px"
              class="shrink-0 text-green-700"
              aria-hidden="true"
            />
            <Icon
              v-else
              name="i-fa6-solid-x"
              size="24px"
              class="shrink-0 text-red-600"
              aria-hidden="true"
            />
            <span class="ml-3 text-white">{{ $t(`${feature.i18n}`) }}</span>
          </li>
        </ul>
        <ButtonsPricingDark :plan="config.pricing[1]" />
      </div>

      <div class="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
        <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
          <img
            src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
            alt=""
            class="rounded-3xl w-20 h-20"
          >
          <div class="ml-5 text-gray-500">
            <span class="block text-2xl font-semibold">{{ $t(`${config.pricing[2].name}`) }}</span>
            <span><span class="font-medium text-xl align-top">{{ config.pricing[2].currencySymbol }}</span><span class="text-3xl font-bold">{{ config.pricing[2].price }} </span></span>
          </div>
        </div>
        <ul class="mb-7 font-medium text-gray-500">
          <li
            v-for="(feature, fIdx) in config.pricing[0].features"
            :key="fIdx"
            class="flex text-lg mb-2"
          >
            <Icon
              v-if="feature.allowed"
              name="i-fa6-solid-check"
              size="24px"
              class="shrink-0 text-green-700"
              aria-hidden="true"
            />
            <Icon
              v-else
              name="i-fa6-solid-x"
              size="24px"
              class="shrink-0 text-red-600"
              aria-hidden="true"
            />
            <span class="ml-3">{{ $t(`${feature.i18n}`) }}</span>
          </li>
        </ul>
        <ButtonsPricing :plan="config.pricing[2]" />
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import config from '~/config'
</script>

<style scoped>

</style>
