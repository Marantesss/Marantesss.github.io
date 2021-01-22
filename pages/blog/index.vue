<template>
  <div>
    <h1>HELLO</h1>
    <p>All blog posts</p>
    <div v-text="posts"></div>
  </div>
</template>

<script>
export default {
  name: 'Blog',

  layout: 'default',

  async asyncData({ $content }) {
    const posts = await $content().fetch()

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
