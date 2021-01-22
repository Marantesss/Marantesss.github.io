<template>
  <div class="container mx-auto">
    <h1>HELLO</h1>
    <p>All blog posts</p>
    <section class="grid grid-rows-1 gap-4">
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

  layout: 'default',

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
