<template>
  <div class="flex justify-center items-center flex-col text-center">
    <h1 class="font-title text-4xl uppercase" v-text="title"></h1>
    <span class="w-32 h-1 bg-blue-900"></span>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',

  props: {
    title: {
      type: String,
      default: 'Title',
    },
  },
}
</script>

<style scoped></style>
