<template>
  <div>
    <!-- Navbar -->
    <nav class="fixed w-full top-0 bg-transparent z-10">
      <ul class="flex justify-end navbar-items p-2">
        <li
          v-for="item in navbarItems"
          :key="item.name"
          class="navbar-items text-2xl p-2 w-32 text-center"
          v-text="item.name"
        ></li>
      </ul>
    </nav>
    <!-- header -->
    <div class="relative h-screen grid grid-cols-5 circle-clip">
      <!-- background -->
      <div class="sm:col-span-2 sm:inline hidden h-full bg-blue-900"></div>
      <div class="sm:col-span-3 col-span-5 h-full bg-blue-100"></div>
      <!-- content -->
      <div class="absolute h-screen grid grid-cols-2 w-full">
        <!-- photo -->
        <div class="col-span-1 h-full flex justify-center">
          <img src="~assets/img/test.png" />
        </div>
        <!-- title -->
        <div class="flex items-center justify-start col-span-1 h-full">
          <div class="hero-card">
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
.navbar-items {
  font-family: 'Poiret One';
}

.hero-card {
  width: 40rem;
  height: 20rem;
}

.hero-title {
  font-size: 6rem;
}
</style>
