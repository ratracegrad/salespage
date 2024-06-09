<template>
	<SectionWrapper id="stats" class="bg-statsLightBackground text-statsLightText dark:bg-statsDarkBackground dark:text-statsDarkText">
		<div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<div class="flex justify-center items-center flex-wrap mt-10 gap-6 sm:gap-12 lg:gap-24">

				<div v-for="stat in config.stats" :key="stat.id" class="flex flex-col justify-center items-center">
					<h4 class="text-lg sm:text-xl font-semibold">{{ $t(`${stat.title}`) }}</h4>
					<p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-primary">{{ stat.value }}</p>
					<p class="mt-1">{{ $t(`${stat.description}`) }}</p>
				</div>
			</div>
		</div>
	</SectionWrapper>
</template>

<script setup lang="ts">
import config from '~/config'
</script>

<style scoped>

</style>