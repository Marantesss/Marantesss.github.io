<template>
  <div>
    <Navbar />
    <Header />
    <div class="container mx-auto my-6">
      <ExpertiseSection />
    </div>
    <div class="random-container">
      <div>
        <Logo />
        <h1 class="title">marantesss-website</h1>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/home/Header'
import Navbar from '~/components/common/Navbar'
import ExpertiseSection from '~/components/home/ExpertiseSection'

export default {
  name: 'Index',

  components: {
    Header,
    Navbar,
    ExpertiseSection,
  },

  data: () => ({}),
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.random-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Poiret One';
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
