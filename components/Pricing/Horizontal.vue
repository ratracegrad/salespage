<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <SectionWrapper id="pricing" class="bg-pricingLightBackground text-pricingLightText dark:bg-pricingDarkBackground dark:text-pricingDarkText">
    <div class="max-w-md mx-auto text-center">
      <PricingTitle />
    </div>

    <div v-for="plan in config.pricing" :key="plan.priceId" class="mx-auto mt-16 max-w-2xl items-stretch rounded-3xl bg-white ring-1 ring-gray-200 lg:mx-0 sm:mt-20 lg:max-w-none lg:flex">
      <div class="p-8 lg:flex-auto sm:p-10">
        <h3 class="text-2xl font-bold tracking-tight text-gray-900">
          {{ $t(`${plan.name}`) }}
        </h3>
        <p class="mt-6 text-base leading-7 text-gray-600">
          {{ $t(`${plan.description}`) }}
        </p>
        <div class="mt-10 flex items-center gap-x-4">
          <h4 class="flex-none font-semibold leading-6 text-gray-600">
            {{ $t('pricing.included') }}
          </h4>
          <div class="h-px flex-auto bg-gray-700" />
        </div>
        <ul role="list" class="grid grid-cols-1 mt-8 gap-4 text-gray-600 sm:grid-cols-2 sm:gap-6">
          <li v-for="(feature, fIdx) in plan.features" :key="fIdx" class="flex items-center gap-x-3">
            <Icon v-if="feature.allowed" name="i-fa6-solid-check" size="24px" class="shrink-0 text-green-700" aria-hidden="true" />
            <Icon v-else name="i-fa6-solid-x" size="24px" class="shrink-0 text-red-600" aria-hidden="true" />
            <span>{{ $t(`${feature.i18n}`) }}</span>
          </li>
        </ul>
      </div>
      <div class="p-2 -mt-2 lg:mt-0 lg:max-w-md lg:w-full lg:flex-shrink-0">
        <div class="h-full rounded-2xl bg-gray-800 text-pricingDarkText py-10 text-center ring-1 ring-gray-900/5 ring-inset lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div class="mx-auto max-w-xs px-8">
            <p class="text-base font-semiboldLight line-throughLight">
              {{ $t('pricing.previously') }} {{ plan.currencySymbol }}{{ plan.priceAnchor }} {{ plan.currencyUnit }}
            </p>
            <p class="mt-6 flex items-baseline justify-center gap-x-2">
              <span class="dark:dark-base text-5xl font-bold tracking-tight">
                {{ plan.currencySymbol }}{{ plan.price }}
              </span>
              <span class="text-3xl font-semibold leading-6 tracking-wideLightLight">{{ plan.currencyUnit }}</span>
            </p>
            <ButtonsPricingDark :plan="plan" class="mt-5" />
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>

</style>
