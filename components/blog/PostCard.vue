<template>
  <div
    class="mx-auto grid grid-cols-12 bg-white rounded-lg shadow-xl overflow-hidden"
  >
    <div class="col-span-2">
      <img
        :src="require(`~/assets/img/articles/${image}`)"
        alt="Post Image"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="col-span-10 flex flex-col justify-between">
      <div class="h-32 p-4">
        <h4 class="text-3xl text-gray-900 leading-tight" v-text="title"></h4>
        <p
          class="pt-2 text-base text-gray-600 leading-normal"
          v-text="description"
        ></p>
      </div>
      <hr />
      <div class="flex justify-between items-center p-2">
        <div>
          <!-- Pill Section -->
          <div class="flex">
            <Label v-for="tag in tags" :key="tag" class="mr-2">
              {{ tag }}
            </Label>
          </div>
        </div>
        <NuxtLink :to="`/blog/${url}`">
          <Button :color-class="gradientClasses">Read</Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/common/Button'
import Label from '~/components/common/Label'

export default {
  name: 'PostCard',

  components: {
    Button,
    Label,
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

<style scoped>
.card-button {
  width: fit-content;
}
</style>
