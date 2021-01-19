<template>
  <div
    class="w-full h-84 mx-auto grid grid-cols-12 bg-white rounded-lg shadow-xl overflow-hidden"
  >
    <div
      class="col-span-4 md:col-span-6"
      :class="imagePosition === 'right' ? 'order-last' : 'order-first'"
    >
      <img
        :src="require(`~/assets/img/projects/${imageName}.jpg`)"
        alt="ChitChat Logo"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="col-span-8 md:col-span-6 ml-6 p-12 lg:p-6 flex flex-col justify-between"
    >
      <div>
        <h4 class="text-4xl text-gray-900 leading-tight" v-text="title"></h4>
        <p
          class="pt-2 text-base text-gray-600 leading-normal"
          v-text="description"
        ></p>
      </div>
      <button
        type="button"
        class="uppercase inline-block py-2 px-4 text-white rounded-full bg-gradient-to-r"
        :class="gradientClasses"
      >
        View Project
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',

  props: {
    imageName: {
      type: String,
      default: '',
    },
    imagePosition: {
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
    gradientClasses: {
      type: Array,
      default: () => ['from-green-400', 'to-blue-500'],
    },
  },
}
</script>

<style scoped>
.card-button {
  width: fit-content;
}
</style>
