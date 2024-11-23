<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
useSeoMeta({
  titleTemplate: '',
  title: page.value?.title,
  ogTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description
})
</script>

<template>
  <!-- <AppHeader /> -->
   <!-- <Navbar /> -->
  
   <UMain>
    <ULandingSection
      :title="page?.features.title"
      :links="page?.features.links"
    >
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) of page?.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>
  </UMain>
</template>
