<template>
  <SectionWrapper
    id="pricing"
    class="bg-pricingLightBackground text-pricingLightText dark:bg-pricingDarkBackground dark:text-pricingDarkText"
  >
    <div class="mx-auto max-w-md text-center">
      <PricingTitle />
    </div>
    <div class="mt-16 flex flex-col items-center justify-between lg:flex-row lg:items-start">
      <div class="order-2 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-1 lg:w-full lg:rounded-r-none">
        <div class="mb-7 flex items-center border-b border-gray-300 pb-7">
          <img
            src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
            alt=""
            class="size-20 rounded-3xl"
          >
          <div class="ml-5 text-gray-500">
            <span class="block text-2xl font-semibold">{{ $t(`${config.pricing[0].name}`) }}</span>
            <span><span class="align-top  text-xl font-medium">{{ config.pricing[0].currencySymbol }}</span><span class="text-3xl font-bold">{{ config.pricing[0].price }} </span></span>
          </div>
        </div>
        <ul class="mb-7 font-medium text-gray-500">
          <li
            v-for="(feature, fIdx) in config.pricing[0].features"
            :key="fIdx"
            class="mb-2 flex text-lg"
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

      <div class="order-1 w-full flex-1 rounded-3xl bg-gray-700 p-8 text-gray-400 shadow-xl sm:w-96 lg:order-2 lg:mt-0 lg:w-full">
        <div class="mb-8 flex items-center border-b border-gray-600 pb-8">
          <img
            src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
            alt=""
            class="size-20 rounded-3xl"
          >
          <div class="ml-5 text-white">
            <span class="block text-3xl font-semibold">{{ $t(`${config.pricing[1].name}`) }}</span>
            <span><span class="align-top text-xl font-medium">{{ config.pricing[1].currencySymbol }}</span><span class="text-3xl font-bold">{{ config.pricing[1].price }} </span></span>
          </div>
        </div>
        <ul class="mb-10 text-xl font-medium">
          <li
            v-for="(feature, fIdx) in config.pricing[1].features"
            :key="fIdx"
            class="mb-6 flex"
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

      <div class="order-3 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-3 lg:w-full lg:rounded-l-none">
        <div class="mb-7 flex items-center border-b border-gray-300 pb-7">
          <img
            src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
            alt=""
            class="size-20 rounded-3xl"
          >
          <div class="ml-5 text-gray-500">
            <span class="block text-2xl font-semibold">{{ $t(`${config.pricing[2].name}`) }}</span>
            <span><span class="align-top text-xl font-medium">{{ config.pricing[2].currencySymbol }}</span><span class="text-3xl font-bold">{{ config.pricing[2].price }} </span></span>
          </div>
        </div>
        <ul class="mb-7 font-medium text-gray-500">
          <li
            v-for="(feature, fIdx) in config.pricing[0].features"
            :key="fIdx"
            class="mb-2 flex text-lg"
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
