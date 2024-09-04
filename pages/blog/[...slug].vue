<script setup>
const { path } = useRoute()

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

definePageMeta({
  layout: 'blog',
})
</script>

<template>
  <SectionWrapper id="blog">
    <div class="flex flex-col border border-b border-gray-300 -mt-12 mr-0 mb-12 ml-0 relative">
      <div class="title py-14 px-12 text-2xl font-semibold uppercase leading-7 tracking-wide">
        {{ blogPost.title }}
      </div>
      <div>
        {{ blogPost.description }}
      </div>
      
    </div>
    <pre><ContentDoc /></pre>
  </SectionWrapper>
  <!-- <main>
    <TheHero>
      <template #default>
        {{ blogPost.title }}
      </template>

      <template #subtitle>
        <BlogPostMeta
          :author="blogPost.author"
          :date="blogPost.published"
          color="dark"
        />
      </template>
    </TheHero>
    <div class="container">
      <section class="articles">
        <div class="column is-8 is-offset-2">
          <section class="blog-post-card card article">
            <div class="card-content">
              <div class="content article-body is-size-5">
                <ContentDoc />
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </main> -->
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
