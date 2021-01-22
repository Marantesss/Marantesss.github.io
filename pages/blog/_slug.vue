<template>
  <article class="prose mx-auto">
    <h1 v-text="page.title"></h1>
    <p class="text-gray-500" v-text="page.description"></p>
    <NuxtContent :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'blog',

  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content('articles', slug)
      .fetch()
      .catch((_err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
    }
  },

  head() {
    return {
      title: `Marantesss 👋 - ${this.page.title}`,
    }
  },
}
</script>
