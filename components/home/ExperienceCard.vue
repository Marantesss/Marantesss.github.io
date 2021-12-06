<template>
  <div class="mx-auto flex p-6 bg-white rounded-lg shadow-xl">
    <div class="flex-shrink-0">
      <img
        class="h-12 w-12"
        :src="require(`~/assets/img/icons/${imageName}.png`)"
        :alt="title"
      />
    </div>
    <div class="ml-6 pt-1 flex-grow-1">
      <h4 class="text-lg text-gray-900 leading-tight" v-text="title"></h4>
      <p
        class="text-base text-gray-600 leading-normal"
        v-text="description"
      ></p>
      <p class="text-base text-gray-500 leading-normal" v-text="period"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',

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
    period: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped></style>
