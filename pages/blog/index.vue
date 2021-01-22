<template>
  <div class="container mx-auto">
    <section class="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <div v-for="post in posts" :key="post.title">
        <PostCard
          :image="post.image"
          :title="post.title"
          :description="post.description"
          :url="post.slug"
          :tags="post.tags"
          :time="post.time"
        />
      </div>
    </section>
  </div>
</template>

<script>
import PostCard from '~/components/blog/PostCard'

export default {
  name: 'Blog',

  components: {
    PostCard,
  },

  layout: 'blog',

  async asyncData({ $content }) {
    const posts = await $content('articles').fetch()

    return {
      posts,
    }
  },

  head: {
    title: 'Marantesss 👋 - Blog',
  },
}
</script>

<style></style>
