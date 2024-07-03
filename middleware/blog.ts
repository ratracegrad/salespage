import config from '~/config'

export default defineNuxtRouteMiddleware(() => {
  if (!config.blog.showBlog)
    return navigateTo('/')
})
