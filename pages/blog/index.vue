<template>
  <div>
    <Header />
    <!-- Content -->
    <div class="container mx-auto">
      <section class="my-32 grid grid-cols-1 gap-4">
        <div v-for="post in posts" :key="post.title">
          <PostCard
            :image="post.image"
            :title="post.title"
            :description="post.description"
            :author="post.author"
            :date="post.date"
            :url="post.slug"
            :tags="post.tags"
            :time="post.time"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PostCard from '~/components/blog/PostCard'
import Header from '~/components/blog/Header'

export default {
  name: 'Blog',

  components: {
    PostCard,
    Header,
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
