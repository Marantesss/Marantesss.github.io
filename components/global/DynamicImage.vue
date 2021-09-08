<template>
  <figure v-if="caption">
    <img
      class="object-contain h-full w-full shadow-2xl"
      :src="dynamicImage"
      :alt="alt"
    />
    <figcaption v-text="caption"></figcaption>
  </figure>
  <img v-else class="shadow-2xl" :src="dynamicImage" :alt="alt" />
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
    alt: {
      type: String,
      required: false,
      default: 'Image',
    },
  },

  computed: {
    dynamicImage() {
      return require(`~/assets/img/${this.filename}`)
    },
  },
}
</script>
