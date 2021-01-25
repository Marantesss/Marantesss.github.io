<template>
  <article class="prose mx-auto">
    <h1 v-text="page.title"></h1>
    <!-- Information -->
    <div>
      <p class="text-center text-gray-500">
        <!-- Author -->
        By <span class="text-dark-blue" v-text="page.author"></span>
        <!-- Date -->
        <span class="px-2">/</span>
        {{ formatDate(page.createdAt) }}
        <!-- Reading Time -->
        <span class="px-2">/</span>
        {{ page.time }}
      </p>

      <!-- Tags -->
      <p class="text-center text-gray-500">
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
    const page = await $content('blog', slug)
      .fetch()
      .catch((_err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
    }
  },

  methods: {
    formatDate(date) {
      const dateObject = new Date(date)
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return dateObject.toLocaleDateString('en-US', options)
    },
  },

  head() {
    return {
      title: `Marantesss 👋 - ${this.page.title}`,
    }
  },
}
</script>
