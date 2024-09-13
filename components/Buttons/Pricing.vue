<template>
  <button class="dark:text-Text group w-full rounded-full border-2 border-primary bg-transparent px-7 py-5 text-center text-xl font-bold text-lightText hover:bg-gray-100">
    {{ $t(`${plan.buttonText}`) }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  plan: {
    priceId: string
    name: string
    description: string
    price: number
    priceAnchor: number
    currencySymbol: string
    currencyUnit: string
    features: {
      i18n: string
      allowed: boolean
    }[]
    buttonText: string
    isFeatured: boolean
  }
}>()
</script>

<style scoped>

</style>
