<script setup lang="ts">
const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})
</script>

<template>
  <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
    <article
      v-for="blogPost in blogPostList"
      :key="blogPost._path"
      class="relative isolate flex flex-col gap-8 lg:flex-row"
    >
      <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <img
          :src="blogPost.imageUrl"
          alt=""
          class="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
        >
        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div class="flex items-center gap-x-4 text-xs">
          <time
            :datetime="blogPost.published"
            class="text-light-baseLight dark:text-dark-baseLight"
          >{{ blogPost.published }}</time>
          <span class="text-light-base relative z-10 rounded-full bg-gray-300 px-3 py-1.5 font-medium hover:bg-gray-100">{{ blogPost.category }}</span>
        </div>
        <div class="group relative max-w-xl">
          <h3 class="text-light-base dark:text-dark-base mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
            <NuxtLink :to="blogPost._path">
              <span class="absolute inset-0" />
              {{ blogPost.title }}
            </NuxtLink>
          </h3>
          <p class="text-light-baseLight dark:text-dark-baseLight mt-5 text-sm leading-6">
            {{ blogPost.description }}
          </p>
        </div>
        <div class="mt-6 flex border-t border-gray-900/5 pt-6 dark:border-gray-100/5">
          <div class="relative flex items-center gap-x-4">
            <!-- <img :src="blogPost.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50"> -->
            <div class="text-sm leading-6">
              <p class="text-light-base dark:text-dark-base font-semibold">
                <!-- <a :href="blogPost.author.href"> -->
                <span class="absolute inset-0" />
                {{ blogPost.author }}
                <!-- </a> -->
              </p>
              <!-- <p class="text-gray-600">
                {{ blogPost.author.role }}
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>

  <!-- <section class="articles">
    <div class="column is-8 is-offset-2">
      <div
        v-for="blogPost in blogPostList"
        :key="blogPost._path"
        class="card article"
      >
        <NuxtLink :to="blogPost._path">
          <section class="card article blog-post-card">
            <div class="media">
              <div class="has-text-centered media-content">
                <h3 class="title article-title has-text-weight-bold">
                  {{ blogPost.title }}
                </h3>
                <BlogPostMeta
                  :author="blogPost.author"
                  :date="blogPost.dates.published"
                />
              </div>
            </div>
            <div class="card-content">
              <div class="content article-body is-size-5">
                {{ blogPost.description }}
              </div>
            </div>
          </section>
        </NuxtLink>
      </div>
    </div>
  </section> -->
</template>

<style>
.blog-post-card {
  padding-top: 2.5rem;
  padding-bottom: 3rem;
}

.blog-post-card .card-content {
  padding: 1rem;
}

.blog-post-card .title {
  margin-bottom: 1rem;
}
</style>
