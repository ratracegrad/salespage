<script setup lang="ts">
</script>

<template>
  <div id="videoPlayer" class="w-full flex  flex-col items-center-justify-center">
    <div class="mb-20 flex w-full flex-col text-center">
			<h2 class="text-4xl font-bold sm:text-6xl">
				Watch My Video
			</h2>
			<h3 class="text-xl font-semibold sm:text-lg mt-3">
				To learn more about The Bland SaaS
			</h3>
    </div>

    <div class="p-4 h-screen flex items-center justify-center">
      <div class="flex-1 p-4 rounded-lg shadow-xl max-w-5xl sm:p-8 bg-purple-700">
      <div class="aspect-video">
        <iframe class="w-full h-full inset-0" src="https://www.youtube.com/embed/a1zeS4S0CZ8?si=szEbTS_H7oN4s8ws" title="The Bland SaaS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped></style>
