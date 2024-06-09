<template>
	<button class="w-full group rounded-full px-7 py-5 text-center text-xl font-bold bg-transparent text-darkText border-2 border-secondary hover:bg-gray-100 hover:text-lightText">
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