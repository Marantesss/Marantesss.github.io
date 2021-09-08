<template>
  <div
    class="mx-auto lg:h-84 flex flex-col lg:flex-row bg-white rounded-lg shadow-xl overflow-hidden"
  >
    <!-- Image -->
    <div class="overflow-hidden lg:w-84 lg:h-full h-40">
      <img
        class="h-full w-full object-cover transform duration-500"
        :class="{ 'scale-125': isMouseOver }"
        :src="require(`~/assets/img/${image}`)"
      />
    </div>
    <!-- content -->
    <div class="w-full p-4 flex flex-col justify-between overflow-auto">
      <div class="lg:h-32 h-full">
        <!-- Title -->
        <h4
          class="text-2xl text-gray-900 font-bold leading-tight line-clamp-2"
          v-text="title"
        ></h4>
        <!-- Information -->
        <div
          class="py-2 grid grid-cols-3 items-center w-full text-sm text-gray-500"
        >
          <!-- Date -->
          <div class="col-span-1">Posted {{ formatDate(date) }}</div>
          <!-- Reading Time -->
          <div class="flex col-span-1 items-center justify-center">
            <clock-icon size="1x"></clock-icon>
            <span class="pl-2"> {{ time }} </span>
          </div>
          <!-- Tags -->
          <div class="col-span-1 flex justify-end">
            <span v-for="tag in tags" :key="tag" class="mr-2">
              #<span class="underline">{{ tag }}</span>
            </span>
          </div>
        </div>
        <!-- Description -->
        <p
          class="pt-2 text-base text-gray-500 leading-normal line-clamp-5"
          v-text="description"
        ></p>
      </div>
      <div class="flex justify-between items-center py-2">
        <!-- Author -->
        <div class="text-gray-500">
          By <span class="text-dark-blue" v-text="author"></span>
        </div>
        <NuxtLink :to="`/blog/${url}`">
          <Button
            is-text
            @mouseenter.native="toggleMouseOver"
            @mouseleave.native="toggleMouseOver"
            >Read Article</Button
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { ClockIcon } from 'vue-feather-icons'

import Button from '~/components/common/Button'

export default {
  name: 'PostCard',

  components: {
    Button,
    ClockIcon,
  },

  props: {
    image: {
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
    time: {
      type: String,
      default: '1 minute',
    },
    tags: {
      type: Array,
      default: () => [],
    },
    url: {
      type: String,
      default: undefined,
    },
    author: {
      type: String,
      default: 'Gonçalo Marantes',
    },
    date: {
      type: String,
      default: 'sometime',
    },
    gradientClasses: {
      type: String,
      default: 'bg-gradient-to-r from-green-400 to-blue-500',
    },
  },

  data: () => ({
    isMouseOver: false,
  }),

  methods: {
    toggleMouseOver() {
      this.isMouseOver = !this.isMouseOver
    },
    formatDate(date) {
      const dateObject = new Date(date)
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return dateObject.toLocaleDateString('en-US', options)
    },
  },
}
</script>
