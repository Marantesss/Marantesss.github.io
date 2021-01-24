<template>
  <div class="mx-auto h-84 flex bg-white rounded-lg shadow-xl overflow-hidden">
    <dynamic-image
      class="w-84 h-full object-cover"
      :filename="image"
    ></dynamic-image>
    <div class="w-full p-4 flex flex-col justify-between overflow-auto">
      <div class="h-32">
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
          <div class="col-span-1">Posted {{ date }}</div>
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
          class="pt-2 text-base text-gray-500 leading-normal line-clamp-6"
          v-text="description"
        ></p>
      </div>
      <div class="flex justify-between items-center p-2">
        <!-- Author -->
        <div class="text-gray-600">
          By <span class="text-dark-blue" v-text="author"></span>
        </div>
        <NuxtLink :to="`/blog/${url}`">
          <Button is-text>Read Article</Button>
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
      type: Number,
      default: 1,
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
}
</script>
