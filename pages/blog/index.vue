<script setup lang="ts">
definePageMeta({
  middleware: [
    'blog',
    // Add in more middleware here
  ],
})
</script>

<template>
  <section class="py-24 sm:py-32">
    <main class="mx-auto max-w-7xl">
      <BlogHero />
      <BlogPostList />
    </main>
  </section>
</template>
