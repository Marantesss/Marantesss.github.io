<template>
  <div
    class="h-84 grid grid-cols-12 bg-white rounded-lg shadow-xl overflow-hidden"
  >
    <div
      class="col-span-4 md:col-span-6 h-full overflow-hidden"
      :class="imagePosition === 'right' ? 'order-last' : 'order-first'"
    >
      <img
        :src="require(`~/assets/img/projects/${imageName}`)"
        alt="ChitChat Logo"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="col-span-8 md:col-span-6 ml-6 p-6 flex flex-col justify-between"
    >
      <div>
        <h4 class="text-4xl text-gray-900 leading-tight" v-text="title"></h4>
        <p
          class="pt-2 text-base text-gray-600 leading-normal"
          v-text="description"
        ></p>
      </div>
      <a v-if="url" target="_blank" :href="url">
        <Button class="w-full" :color-class="gradientClasses"
          >View Project</Button
        >
      </a>
      <Button v-else class="w-full" :color-class="gradientClasses"
        >View Project</Button
      >
    </div>
  </div>
</template>

<script>
import Button from '~/components/common/Button'

export default {
  name: 'ProjectCard',

  components: {
    Button,
  },

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
    url: {
      type: String,
      default: undefined,
    },
    gradientClasses: {
      type: String,
      default: 'bg-gradient-to-r from-green-400 to-blue-500',
    },
  },
}
</script>
