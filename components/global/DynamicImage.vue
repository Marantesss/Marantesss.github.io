<template>
  <figure v-if="caption">
    <img class="object-contain h-full w-full" :src="dynamicImage" />
    <figcaption v-text="caption"></figcaption>
  </figure>
  <img v-else :src="dynamicImage" />
</template>

<script>
export default {
  name: 'DynamicImage',

  props: {
    filename: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: false,
      default: undefined,
    },
  },

  computed: {
    dynamicImage() {
      return require(`~/assets/img/${this.filename}`)
    },
  },
}
</script>
