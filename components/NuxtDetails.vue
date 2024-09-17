<template>
	<SectionWrapper id="nuxtDetails">
		<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<li v-for="tech in technology" :key="tech.id" class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-neutral-800 shadow">
				<div class="flex flex-1 flex-col p-8">
					<div class="flex justify-center items-center mb-5 rounded-lg h-12 w-12">
						<img class="h-32 w-32 flex-shrink-0 rounded-full" :src="tech.imageUrl" alt="" />
					</div>
					<h3 class="mt-6 text-sm font-medium text-[#fffff5db]">{{ tech.name }}</h3>
					<dl class="mt-1 flex flex-grow flex-col justify-between">
						<dt class="sr-only">Description</dt>
						<dd class="text-sm text-[#ebebf599]">{{ tech.description }}</dd>
					</dl>
				</div>
			</li>
		</ul>
	</SectionWrapper>
</template>

<script setup lang="ts">
const technology = [
  {
		id: 1,
    name: 'NuxtJS',
    description: 'The intuitive Framework For Building Modern Web Applications',
    imageUrl: '/nuxt.svg',
  },
  {
		id: 2,
    name: 'Tailwind CSS',
    description: 'Rapidly build modern websites without ever leaving your HTML',
    imageUrl: '/tailwind.svg',
  },
	{
		id: 3,
    name: 'Supabase',
    description: 'Postgres as a service, with realtime subscriptions and more',
    imageUrl: '/supabase.svg',
  },
	{
		id: 4,
    name: 'Prisma',
    description: 'The Premier Tool to simplify database interactions, schema evolution, and data management',
    imageUrl: '/prisma.svg',
  },
]
</script>

<style scoped>

</style>