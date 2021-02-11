<template>
  <article class="prose lg:prose-lg mx-auto">
    <SocialHead
      :title="page.title"
      :description="page.description"
      :image="require(`~/assets/img/${page.image}`)"
    />
    <h1 v-text="page.title"></h1>
    <!-- Information -->
    <div>
      <p class="text-center text-gray-500">
        By <span class="text-dark-blue" v-text="page.author"></span>
        <span class="px-2">/</span>
        {{ formatDate(page.publishedAt) }}
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
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return dateObject.toLocaleDateString('en-US', options)
    },
  },
}
</script>

<style>
/*
https://github.com/tailwindlabs/tailwindcss-typography/issues/18
Tailwind typography >3.0 is supposed to be used for tailwind >2.0
Since I'm using tailwind 1 and tailwind typography 4.0 I can't override
syles in tailwind.config.js
*/
.prose code::before {
  content: '';
}

.prose code::after {
  content: '';
}
</style>
