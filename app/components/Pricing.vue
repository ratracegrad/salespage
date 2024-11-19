<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <SectionWrapper id="pricing">
    <div class="mb-20 flex w-full flex-col text-center">
      <h2 class="text-4xl font-bold sm:text-6xl">
        Pricing
      </h2>
      <h3 class="text-xl font-semibold sm:text-lg">
        Choose the plan that works best for you
      </h3>
    </div>

    <div class="relative flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
      <div
        v-for="plan in config.pricing"
        :key="plan.priceId"
        class="relative w-full max-w-lg border-2 border-purple-700 p-8"
      >
        <div
          v-if="plan.isFeatured"
          class="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900 px-3 py-2"
        >
          <span
            class="text-xs font-semibold"
          >
            Recommended
          </span>
        </div>

        <div class="relative z-10 flex h-full flex-col gap-5 rounded-3xl  lg:gap-8">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-xl font-semibold lg:text-2xl">
                {{ plan.name }}
              </p>
              <p
                v-if="plan.description"
                class="mt-2 font-semibold"
              >
                {{ plan.description }}
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
                class="font-bold text-green-700"
                aria-hidden="true"
              />
              <Icon
                v-else
                name="i-iconoir-xmark-circle"
                size="18px"
                class="shrink-0 font-bold text-red-600"
                aria-hidden="true"
              />
              <span>{{ feature.i18n }}</span>
            </li>
          </ul>

          <div class="space-y-2">
            <nuxt-link to="https://theblandsaas.lemonsqueezy.com/affiliates">
              <button class="w-full rounded-full bg-hibiscus px-7 py-5 text-center text-xl font-bold">
              {{ plan.buttonText }}
            </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>

</style>
