<template>
  <div class="m-0 p-0 w-screen h-screen flex items-center justify-center bg-loginLightBackground dark:bg-loginDarkBackground text-lightText dark:text-darkText">
    <div class="max-w-lg w-full mx-auto">
      <div
        class="bg-white w-full border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <form class="space-y-6" action="#">
          <h1 class="text-3xl font-semibold mb-6 text-center">{{ $t('login.title') }}</h1>
          <div>
            <label for="email" class="font-medium text-gray-900 block mb-2 dark:text-gray-300">{{ $t('login.email') }}</label>
            <input id="email" type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
          </div>
          <div>
            <div class="flex justify-between">
              <label for="password" class="font-medium text-gray-900 block mb-2 dark:text-gray-300">{{ $t('login.password') }}</label>
              <span class="text-primaryLink italic">{{ $t('login.forgot') }}</span>
            </div>
            <input id="password" type="password" name="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
          </div>
          <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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