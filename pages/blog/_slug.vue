<template>
  <NuxtContent class="prose mx-auto" :document="page" />
</template>

<script>
export default {
  layout: 'blog',

  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(slug)
      .fetch()
      .catch((_err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
    }
  },
}
</script>
