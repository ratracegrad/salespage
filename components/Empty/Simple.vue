<template>
  <div
    class="grid min-h-full place-items-center bg-white px-6 py-32 text-center sm:py-60 lg:px-8"
  >
    <p class="text-base font-semibold text-violet-600 dark:text-slate-900">
      {{ $t('empty.subtitle') }}
    </p>

    <h1
      class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
    >
      {{ $t('empty.title') }}
    </h1>

    <p class="mt-6 text-base leading-7 text-gray-600">
      {{ $t('empty.description') }}
    </p>

    <div class="mt-10 flex items-center justify-center gap-x-6">
      <NuxtLink
        :to="'/'"
        class="mb-2 mr-2 rounded-lg border-2 border-white bg-violet-700 px-6 py-4 text-white dark:border-slate-900 dark:bg-white dark:text-slate-900"
      >
        {{ $t('empty.back') }}
      </NuxtLink>
    </div>
  </div>
</template>
