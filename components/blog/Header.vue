<template>
  <div class="bg-dark-blue header-min-height">
    <div class="text-white text-4xl flex justify-center h-full">
      WIP
      <dynamic-image class="h-64" filename="workspace.svg"></dynamic-image>
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
    /*
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
      */
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

.hero-title {
  font-size: 6rem;
}
</style>
