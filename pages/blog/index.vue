<template>
  <div>
    <SocialHead title="Blog" />
    <Header />
    <!-- Content -->
    <div class="container mx-auto px-2 md:px-0">
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
            :date="latestPost.publishedAt"
            :url="latestPost.slug"
            :tags="latestPost.tags"
            :time="latestPost.time"
          />
        </div>
        <!-- All Posts -->
        <h2 class="text-2xl text-gray-500">
          <span class="text-dark-blue">All</span> Articles
        </h2>
        <template v-if="posts.length !== 0">
          <div v-for="post in posts" :key="post.title" class="py-4">
            <PostCard
              :image="post.image"
              :title="post.title"
              :description="post.description"
              :author="post.author"
              :date="post.publishedAt"
              :url="post.slug"
              :tags="post.tags"
              :time="post.time"
            />
          </div>
        </template>
        <template v-else>
          <div class="flex justify-center py-6">
            <p class="text-gray-500">
              Hmmm... Nothing seems to be here. Looks like you'll have to wait a
              while for me be creative!
            </p>
          </div>
        </template>
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
    // get all posts except latest
    const posts = await $content('blog')
      .sortBy('publishedAt', 'desc')
      .without(['body', 'toc'])
      .skip(1)
      .fetch()

    // get latest post
    const [latestPost] = await $content('blog')
      .sortBy('publishedAt', 'desc')
      .without(['body', 'toc'])
      .limit(1)
      .fetch()

    return {
      latestPost,
      posts,
    }
  },
}
</script>

<style></style>
