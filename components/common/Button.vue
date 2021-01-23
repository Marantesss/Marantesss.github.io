<template>
  <button
    type="button"
    class="my-button"
    :class="[
      colorClass,
      {
        'my-button-text': isText,
        'my-button-regular': !isText,
      },
    ]"
  >
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
    isText: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.my-button {
  /* Normal properties */
  @apply uppercase inline-block py-2 px-4;
  /* Transiution properties */
  @apply transition-all ease-out duration-200;
}

.my-button:hover {
  @apply opacity-75;
}

.my-button-regular {
  @apply text-white rounded-full shadow-lg;
}

.my-button-text {
  @apply text-dark-blue;
}
</style>
