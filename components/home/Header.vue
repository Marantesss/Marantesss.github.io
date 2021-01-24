<template>
  <div
    ref="headerContainer"
    class="relative h-screen grid grid-cols-5 circle-clip header-min-height overflow-hidden"
  >
    <!-- background -->
    <div class="md:col-span-2 md:inline hidden h-full bg-dark-blue"></div>
    <div class="md:col-span-3 col-span-5 h-full bg-light-blue"></div>
    <!-- content -->
    <div class="absolute h-full w-full">
      <div class="h-full flex">
        <!-- photo -->
        <div ref="heroPhoto" class="md:w-1/2 md:flex hidden justify-center">
          <img class="object-cover" src="~assets/img/test.png" />
        </div>
        <!-- title -->
        <div
          class="h-full flex items-center justify-center md:justify-start w-full md:w-1/2"
        >
          <div ref="heroCard" class="hero-card md:p-0 p-8">
            <h1 class="text-gray-700 text-left font-title text-8xl">Gonçalo</h1>
            <h1 class="text-gray-700 text-right font-title text-8xl">
              Marantes
            </h1>
            <h2 class="text-3xl font-title text-gray-700 pb-4">
              I like anything software related. I also do pretty stuff like
              rainbows and unicorns.
            </h2>
            <!--
              TODO Figure out what to do with this
            <Button
              :color-class="'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'"
              >Get in touch with me</Button
            >
            -->
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

  mounted() {
    const heroCard = this.$refs.heroCard
    const heroPhoto = this.$refs.heroPhoto
    const headerContainer = this.$refs.headerContainer

    // create timeline
    const timeline = this.$gsap.timeline()

    timeline
      // curve header
      .fromTo(
        headerContainer,
        { clipPath: 'none' },
        {
          clipPath: 'circle(300vh at 50% -200vh)',
          duration: 2,
          ease: 'power2.inOut',
        }
      )
      // slide from right to left
      .fromTo(
        heroCard,
        { opacity: 0, x: '200%' },
        { opacity: 1, x: '0%', duration: 1, ease: 'power2.out' },
        '-=1'
      )
      // slide from left to right
      .fromTo(
        heroPhoto,
        { opacity: 0, x: '-200%' },
        { opacity: 1, x: '0%', duration: 1, ease: 'power2.out' },
        '-=1'
      )
  },
}
</script>

<style scoped>
@media only screen and (max-height: 500px) {
  .circle-clip {
    clip-path: none !important;
  }
}

.circle-clip {
  clip-path: circle(300vh at 50% -200vh);
}

.header-min-height {
  min-height: 500px;
}

.hero-card {
  width: 40rem;
}
</style>
