<template>
  <img :src="dynamicImage" />
</template>

<script>
export default {
  name: 'DynamicImage',

  props: {
    filename: {
      type: String,
      required: true,
    },
  },

  computed: {
    dynamicImage() {
      return require(`~/assets/img/${this.filename}`)
    },
  },
}
</script>
