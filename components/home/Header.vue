<template>
  <div class="relative h-screen grid grid-cols-5 circle-clip header-min-height">
    <!-- background -->
    <div class="md:col-span-2 md:inline hidden h-full bg-dark-blue"></div>
    <div class="md:col-span-3 col-span-5 h-full bg-light-blue"></div>
    <!-- content -->
    <div class="absolute h-full w-full">
      <div class="h-full flex">
        <!-- photo -->
        <div class="md:w-1/2 md:flex hidden justify-center">
          <img src="~assets/img/test.png" />
        </div>
        <!-- title -->
        <div
          class="h-full flex items-center justify-center md:justify-start w-full md:w-1/2"
        >
          <div class="hero-card md:p-0 p-8">
            <h1 class="text-gray-700 text-left font-title hero-title">
              Gonçalo
            </h1>
            <h1 class="text-gray-700 text-right font-title hero-title">
              Marantes
            </h1>
            <h2 class="text-3xl font-title text-gray-700">
              I like anything software related. I also do pretty stuff like
              rainbows and unicorns.
            </h2>
            <Button :color-class="'bg-pink-400'">Get in touch with me</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/common/Button'

export default {
  name: 'Header',

  components: {
    Button,
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

.hero-card {
  width: 40rem;
}

.hero-title {
  font-size: 6rem;
}
</style>
