<template>
  <span class="my-label" :class="backgoundClass">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Label',

  props: {
    backgoundClass: {
      type: String,
      default: 'bg-gray-300',
    },
  },
}
</script>

<style scoped>
.my-label {
  /* style */
  @apply rounded-full px-2 h-6 text-sm text-gray-600;
  /* position */
  @apply flex justify-center items-center;
}
</style>
