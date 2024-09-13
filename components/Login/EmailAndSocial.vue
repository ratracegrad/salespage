<template>
  <div class="m-0 flex h-screen w-screen items-center justify-center bg-loginLightBackground p-0 text-lightText dark:bg-loginDarkBackground dark:text-darkText">
    <div class="mx-auto w-full max-w-lg">
      <div
        class="w-full rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-8"
      >
        <h1 class="mb-6 text-center text-3xl font-semibold">
          {{ $t('login.title') }}
        </h1>
        <ButtonsLoginSocial />
        <div class="mt-4 text-center text-sm">
          <p>{{ $t('login.or') }}</p>
        </div>
        <form
          action="#"
          method="POST"
          class="space-y-4"
        >
          <div>
            <label
              for="email"
              class="block text-sm font-medium"
            >{{ $t('login.email') }}</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email address"
              autocomplete="email"
              class="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
          </div>
          <div>
            <label
              for="password"
              class="block text-sm font-medium"
            >{{ $t('login.password') }}</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              autocomplete="current-password"
              class="mt-1 w-full rounded-md border p-2 transition-colors duration-300 focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
          </div>
          <div>
            <button
              type="submit"
              class="w-full rounded-md bg-black p-2 text-white transition-colors duration-300 hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              {{ $t('login.submit') }}
            </button>
          </div>
        </form>
        <ButtonsCreateAccount />
        <ButtonsReturnHome />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
