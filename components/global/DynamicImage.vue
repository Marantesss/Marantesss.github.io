<template>
  <figure v-if="caption">
    <img
      class="object-contain h-full w-full"
      :class="shadowClass"
      :src="dynamicImage"
      :alt="alt"
    />
    <figcaption v-text="caption"></figcaption>
  </figure>
  <img v-else :class="shadowClass" :src="dynamicImage" :alt="alt" />
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
    noShadow: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  computed: {
    dynamicImage() {
      return require(`~/assets/img/${this.filename}`)
    },
    shadowClass() {
      return this.noShadow ? '' : 'shadow-xl'
    },
  },
}
</script>
