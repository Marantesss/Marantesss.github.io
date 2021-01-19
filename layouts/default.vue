<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/common/Navbar'
import Footer from '~/components/common/Footer'

export default {
  name: 'Default',

  components: {
    Navbar,
    Footer,
  },
}
</script>

<style>
body {
  position: relative;
  /* always show scrollbar */
  overflow-y: scroll;
}

body::after {
  content: '';
  display: block;
  @apply h-40;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
