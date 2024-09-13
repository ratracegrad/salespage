<template>
  <div class="relative isolate pt-14">
    <svg
      class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M100 200V.5M.5 .5H200"
            fill="none"
          />
        </pattern>
      </defs>
      <svg
        x="50%"
        y="-1"
        class="overflow-visible fill-gray-50"
      >
        <path
          d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
          stroke-width="0"
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
      />
    </svg>
    <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 px-6 py-24 sm:py-32 lg:grid-cols-2">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <HeroTitle />
        <div class="mt-10 flex items-center gap-x-6">
          <ButtonsHero />
        </div>
      </div>
      <div class="mt-16 sm:mt-24 lg:mt-0 ">
        <NuxtImg
          src="/images/Hero8.png"
          alt="Hero Image"
          class="mx-auto h-auto w-full drop-shadow-xl"
          fit="cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
