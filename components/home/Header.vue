<template>
  <div class="relative h-screen grid grid-cols-5 circle-clip header-min-height">
    <!-- background -->
    <div class="md:col-span-2 md:inline hidden h-full bg-blue-900"></div>
    <div class="md:col-span-3 col-span-5 h-full bg-blue-100"></div>
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
            <h1 class="text-left title-font hero-title">Gonçalo</h1>
            <h1 class="text-right title-font hero-title">Marantes</h1>
            <h2 class="text-3xl title-font">
              I like anything software related. I also do pretty stuff like
              rainbows and unicorns.
            </h2>
            <button
              class="mt-2 uppercase bg-pink-300 hover:bg-pink-400 text-white py-2 px-4 rounded-full"
            >
              Get in touch with me
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

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
