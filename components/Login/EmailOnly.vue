<template>
  <div class="m-0 flex h-screen w-screen items-center justify-center bg-loginLightBackground p-0 text-lightText dark:bg-loginDarkBackground dark:text-darkText">
    <div class="mx-auto w-full max-w-lg">
      <div
        class="w-full rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-8"
      >
        <form
          class="space-y-6"
          action="#"
        >
          <h1 class="mb-6 text-center text-3xl font-semibold">
            {{ $t('login.title') }}
          </h1>
          <div>
            <label
              for="email"
              class="mb-2 block font-medium text-gray-900 dark:text-gray-300"
            >{{ $t('login.email') }}</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              autocomplete="email"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 sm:text-sm"
              required
            >
          </div>
          <div>
            <div class="flex justify-between">
              <label
                for="password"
                class="mb-2 block font-medium text-gray-900 dark:text-gray-300"
              >{{ $t('login.password') }}</label>
              <span class="text-primaryLink italic">{{ $t('login.forgot') }}</span>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              autocomplete="current-password"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 sm:text-sm"
              required
            >
          </div>
          <button
            type="submit"
            class="w-full rounded-3xl bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {{ $t('login.submit') }}
          </button>
          <ButtonsCreateAccount />
          <ButtonsReturnHome />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
