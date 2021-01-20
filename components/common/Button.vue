<template>
  <button type="button" class="my-button" :class="colorClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    colorClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.my-button {
  /* Normal properties */
  @apply uppercase inline-block py-2 px-4 text-white rounded-full;
  /* Transiution properties */
  @apply transition-all ease-out duration-200;
}

.my-button:hover {
  @apply opacity-75;
}
</style>
