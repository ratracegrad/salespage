<template>
	<SectionWrapper id="features" class="bg-featureLightBackground dark:bg-featureDarkBackground text-featureLightText dark:text-featureDarkText">
    <img class="w-full aspect-video mx-auto object-cover rounded-xl" src="https://images.unsplash.com/photo-1624571409412-1f253e1ecc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description">
		
		<div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
			<div class="lg:col-span-1">
				<h2 class="font-bold text-2xl md:text-3xl">
					{{ $t('features.bylineTitle') }}
				</h2>
				<p class="mt-2 md:mt-4">
					{{ $t('features.bylineDescription') }}
				</p>
			</div>

			<div class="lg:col-span-2">
				<div class="grid sm:grid-cols-2 gap-8 md:gap-12">
					<div v-for="feature in config.features" :key="feature.id" class="flex gap-x-5">
						<Icon :name="feature.icon" class="flex-shrink-0 mt-1 size-8 text-primary" />
						<div class="grow">
							<h3 class="text-lg font-semibold">
								{{ $t(`${feature.title}`) }}
							</h3>
							<p class="mt-1">
								{{ $t(`${feature.description}`) }}
							</p>
						</div>
					</div>
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