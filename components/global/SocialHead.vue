<template>
  <span v-if="false" />
</template>

<script>
export default {
  name: 'SocialHead',

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default:
        'Hello, I am Gonçalo Marantes, a Software Engineering student from Portugal. And this is my personal website and blog about anything mildly interesting.',
    },
    image: {
      type: String,
      required: false,
      default: `/social-card.png`,
    },
  },

  head() {
    return {
      title: `Marantesss 👋 - ${this.title}`,
      link: [
        // canonical
        {
          hid: 'canonical',
          rel: 'canonical',
          href: process.env.baseUrl.concat(this.$route.path),
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        // Twitter
        // Test on: https://cards-dev.twitter.com/validator
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: process.env.baseUrl.concat(this.image),
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title,
        },

        // Open Graph
        // Test on: https://developers.facebook.com/tools/debug/
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: process.env.baseUrl.concat(this.image),
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: process.env.baseUrl.concat(this.image),
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title,
        },
      ],
    }
  },
}
</script>

<style></style>
