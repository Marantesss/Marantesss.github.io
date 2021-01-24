<template>
  <div class="bg-gray-200 header-min-height flex justify-center items-center">
    <div class="grid grid-cols-2 items-center container">
      <div class="col-span-2 md:col-span-1">
        <h1 class="text-gray-800 font-title text-6xl">Welcome to my blog</h1>
        <p class="text-gray-600">
          Here I will write about pretty much anything mildly interesting or
          miscellaneous goings-on in my life. There may or may not be some
          invited writers. Stay tuned!
        </p>
      </div>
      <div class="md:col-span-1 md:inline hidden justify-self-end">
        <Laptop class="h-96 overflow-visible" is-animated />
      </div>
    </div>
  </div>
</template>

<script>
import Laptop from '~/components/blog/Laptop'

export default {
  name: 'Header',

  components: {
    Laptop,
  },

  data: () => ({
    navbarItems: [
      {
        name: 'Home',
        route: '/',
      },
      {
        name: 'Blog',
        route: '/blog',
      },
    ],
  }),
}
</script>

<style scoped>
.header-min-height {
  min-height: 500px;
}
</style>
