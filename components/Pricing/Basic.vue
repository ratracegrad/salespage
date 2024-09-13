<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <SectionWrapper
    id="pricing"
    class="bg-pricingLightBackground text-pricingLightText dark:bg-pricingDarkBackground dark:text-pricingDarkText"
  >
    <div class="mb-20 flex w-full flex-col text-center">
      <PricingTitle />
    </div>

    <div class="relative flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
      <div
        v-for="plan in config.pricing"
        :key="plan.priceId"
        class="relative w-full max-w-lg"
      >
        <div
          v-if="plan.isFeatured"
          class="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2"
        >
          <span
            class="rounded-full border-0 bg-primary p-3.5 text-xs font-semibold"
          >
            {{ $t('pricing.featured') }}
          </span>
        </div>

        <div class="relative z-10 flex h-full flex-col gap-5 rounded-3xl bg-white p-8 text-pricingLightText dark:bg-white dark:text-pricingLightText lg:gap-8">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-xl font-semibold leading-8 lg:text-2xl">
                {{ $t(`${plan.name}`) }}
              </p>
              <p
                v-if="plan.description"
                class="mt-2 font-semibold"
              >
                {{ $t(`${plan.description}`) }}
              </p>
            </div>
          </div>
          <div class="flex justify-center gap-2">
            <div
              v-if="plan.priceAnchor"
              class="mb-[4px] flex flex-col justify-end text-lg"
            >
              <p class="relative">
                <span class="line-through">
                  {{ plan.priceAnchor }}
                </span>
              </p>
            </div>

            <p class="text-5xl font-extrabold tracking-tight">
              {{ plan.currencySymbol }}{{ plan.price }}
            </p>
            <div class="mb-[4px] flex flex-col justify-end">
              <p class="text-xs font-semibold uppercase">
                {{ plan.currencyUnit }}
              </p>
            </div>
          </div>
          <ul
            v-if="plan.features"
            class="flex-1 space-y-2.5 leading-relaxed"
          >
            <li
              v-for="(feature, fIdx) in plan.features"
              :key="fIdx"
              class="flex items-center gap-2"
            >
              <Icon
                v-if="feature.allowed"
                name="i-iconoir-check-circle"
                size="18px"
                class="shrink-0 font-bold text-green-700"
                aria-hidden="true"
              />
              <Icon
                v-else
                name="i-iconoir-xmark-circle"
                size="18px"
                class="shrink-0 font-bold text-red-600"
                aria-hidden="true"
              />
              <span>{{ $t(`${feature.i18n}`) }}</span>
            </li>
          </ul>

          <div class="space-y-2">
            <ButtonsPricing :plan="plan" />
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
/* #pricing {
  background-image: url('/pricingBackground.svg');
  background-size: cover;
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-blend-mode: unset;
} */
</style>
