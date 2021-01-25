<template>
  <div>
    <SocialHead title="Home" />
    <Header />
    <!-- Content -->
    <div class="container mx-auto px-2 md:px-0">
      <div class="mt-32 flex justify-center items-center">
        <ExpertiseSection />
      </div>
      <div class="mt-32 flex justify-center items-center">
        <ExperienceSection />
      </div>
      <div class="my-32 flex justify-center items-center">
        <ProjectSection />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/home/Header'
import ExpertiseSection from '~/components/home/ExpertiseSection'
import ExperienceSection from '~/components/home/ExperienceSection'
import ProjectSection from '~/components/home/ProjectSection'

export default {
  name: 'Index',

  layout: 'default',

  components: {
    Header,
    ExpertiseSection,
    ExperienceSection,
    ProjectSection,
  },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
