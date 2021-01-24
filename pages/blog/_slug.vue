<template>
  <article class="prose mx-auto">
    <h1 v-text="page.title"></h1>
    <!-- Information -->
    <div>
      <p class="text-center text-gray-600">
        <!-- Author -->
        By <span class="text-dark-blue" v-text="page.author"></span>
        <!-- Date -->
        <span class="px-2">/</span>
        {{ page.date }}
        <!-- Reading Time -->
        <span class="px-2">/</span>
        {{ page.time }}
      </p>

      <!-- Tags -->
      <p class="text-center text-gray-600">
        <span v-for="tag in page.tags" :key="tag" class="mr-2">
          #<span class="underline">{{ tag }}</span>
        </span>
      </p>
    </div>
    <dynamic-image :filename="page.image"></dynamic-image>
    <p class="text-gray-500 px-4" v-text="page.description"></p>
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
