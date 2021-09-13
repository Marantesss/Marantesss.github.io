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
        <div class="text-gray-500 flex flex-wrap justify-between">
          <h2 class="text-2xl">
            <span class="text-dark-blue">All</span> Articles
          </h2>
          <div class="flex items-center justify-center">
            <Button
              is-text
              :disabled="currentPage === 1"
              @click.native="downCurrentPage"
            >
              <ChevronLeftIcon size="1.0x" />
            </Button>
            <span class="text-dark-blue" v-text="currentPage" />
            /
            <span v-text="totalPages" />
            <Button
              is-text
              :disabled="currentPage === totalPages"
              @click.native="upCurrentPage"
            >
              <ChevronRightIcon size="1.0x" />
            </Button>
          </div>
        </div>
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
import { ChevronLeftIcon, ChevronRightIcon } from 'vue-feather-icons'
import PostCard from '~/components/blog/PostCard'
import Header from '~/components/blog/Header'
import Button from '~/components/common/Button'

export default {
  name: 'Blog',

  components: {
    PostCard,
    Header,
    Button,
    ChevronLeftIcon,
    ChevronRightIcon,
  },

  Layout: 'default',

  async asyncData({ $content }) {
    const currentPage = 1
    const perPage = 4
    const totalPages = Math.ceil(
      ((await $content('blog').fetch()).length - 1) / perPage
    )

    // get all posts except latest
    const posts = await $content('blog')
      .sortBy('publishedAt', 'desc')
      .without(['body', 'toc'])
      .limit(perPage)
      .skip(1 + perPage * (currentPage - 1))
      .fetch()

    // get latest post
    const [latestPost] = await $content('blog')
      .sortBy('publishedAt', 'desc')
      .without(['body', 'toc'])
      .limit(1)
      .fetch()

    return {
      currentPage,
      perPage,
      totalPages,
      latestPost,
      posts,
    }
  },

  watch: {
    async currentPage() {
      this.posts = await this.$content('blog')
        .sortBy('publishedAt', 'desc')
        .without(['body', 'toc'])
        .limit(this.perPage)
        .skip(1 + this.perPage * (this.currentPage - 1))
        .fetch()
    },
  },

  methods: {
    upCurrentPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    downCurrentPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
  },
}
</script>

<style></style>
