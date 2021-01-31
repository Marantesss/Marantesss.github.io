<template>
  <div class="flex flex-col items-center w-64 h-64 text-center">
    <div
      class="rounded-full w-24 h-24 flex items-center justify-center"
      :style="{ backgroundColor: color }"
    >
      <img :src="require(`~/assets/img/icons/${imageName}.png`)" :alt="title" />
    </div>
    <h3
      class="text-lg text-gray-900 leading-tight uppercase py-4"
      v-text="title"
    ></h3>
    <p class="text-base text-gray-600 leading-normal" v-text="description"></p>
  </div>
</template>

<script>
export default {
  name: 'ExpertiseCard',

  props: {
    imageName: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>
