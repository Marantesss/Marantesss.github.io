<template>
  <span class="my-label" :class="backgroundClass">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Label',

  props: {
    backgroundClass: {
      type: String,
      default: 'bg-gray-500',
    },
  },
}
</script>

<style scoped>
.my-label {
  /* style */
  @apply rounded-full px-2 h-6 text-sm text-white;
  /* position */
  @apply flex justify-center items-center;
}
</style>
