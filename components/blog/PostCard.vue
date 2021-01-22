<template>
  <div
    class="mx-auto grid grid-cols-12 bg-white rounded-lg shadow-xl overflow-hidden"
  >
    <div class="col-span-3">
      <img
        :src="require(`~/assets/img/articles/${image}`)"
        alt="Post Image"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="col-span-9 flex flex-col justify-between">
      <div class="h-32 p-4">
        <h4 class="text-3xl text-gray-900 leading-tight" v-text="title"></h4>
        <p
          class="py-2 text-base text-gray-600 leading-normal overflow-hidden truncate"
          v-text="description"
        ></p>
        <div class="flex items-center text-teal-600">
          <clock-icon size="1x"></clock-icon>
          <span class="pl-2 text-sm"> {{ time }} minutes </span>
        </div>
      </div>
      <hr />
      <div class="flex justify-between items-center p-2">
        <!-- Pill Section -->
        <div class="flex">
          <Label
            v-for="tag in tags"
            :key="tag"
            :background-class="'bg-teal-500'"
            class="mr-2"
          >
            {{ tag }}
          </Label>
        </div>
        <NuxtLink :to="`/blog/${url}`">
          <Button :color-class="gradientClasses">Read</Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { ClockIcon } from 'vue-feather-icons'

import Button from '~/components/common/Button'
import Label from '~/components/common/Label'

export default {
  name: 'PostCard',

  components: {
    Button,
    Label,
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
    gradientClasses: {
      type: String,
      default: 'bg-gradient-to-r from-green-400 to-blue-500',
    },
  },
}
</script>
