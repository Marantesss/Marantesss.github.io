<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="antialiased text-gray-900 flex-grow">
      <div
        class="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl"
      >
        <article>
          <h1 class="sr-only">Nuxt + Tailwind CSS Typography</h1>
          <Nuxt />
        </article>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/common/Navbar'
import Footer from '~/components/common/Footer'

export default {
  name: 'Blog',

  components: {
    Navbar,
    Footer,
  },
}
</script>
