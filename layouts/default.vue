<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <Nuxt class="flex-grow" />
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
