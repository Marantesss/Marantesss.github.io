<template>
  <div>
    <Header />
    <!-- Content -->
    <div class="container mx-auto">
      <section class="my-4">
        <!-- Featured Post -->
        <h2 class="text-2xl text-gray-500">
          <span class="text-dark-blue">Latest</span> Article
        </h2>
        <div class="py-4">
          <PostCard
            :image="latestPost.image"
            :title="latestPost.title"
            :description="latestPost.description"
            :author="latestPost.author"
            :date="latestPost.createdAt"
            :url="latestPost.slug"
            :tags="latestPost.tags"
            :time="latestPost.time"
          />
        </div>
        <!-- All Posts -->
        <h2 class="text-2xl text-gray-500">
          <span class="text-dark-blue">All</span> Articles
        </h2>
        <div v-for="post in posts" :key="post.title" class="py-4">
          <PostCard
            :image="post.image"
            :title="post.title"
            :description="post.description"
            :author="post.author"
            :date="post.createdAt"
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
    const posts = await $content('articles')
      .sortBy('createdAt', 'desc')
      .without(['body', 'toc'])
      .fetch()

    // get and remove latest post from posts array
    const latestPost = posts.shift()

    return {
      latestPost,
      posts,
    }
  },

  head: {
    title: 'Marantesss 👋 - Blog',
  },
}
</script>

<style></style>
