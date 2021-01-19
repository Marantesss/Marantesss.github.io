<template>
  <section>
    <SectionTitle title="What I've been up to" />
    <div class="grid gap-6 grid-cols-1 xl:grid-cols-2 mt-12">
      <div v-for="card in cards" :key="card.title" class="w-full h-full p-2">
        <ProjectCard
          :image-name="card.imageName"
          :image-position="card.imagePosition"
          :title="card.title"
          :description="card.description"
          :gradient-classes="card.gradientClasses"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle'
import ProjectCard from '~/components/home/ProjectCard'

export default {
  name: 'ProjectSection',

  components: {
    SectionTitle,
    ProjectCard,
  },

  data: () => ({
    cards: [
      {
        imageName: 'test',
        imagePosition: 'right',
        title: 'Project: Orwell',
        description:
          'React, Bulma, Figma, Affinity Design, Node, Express, Knex, PostgreSQL',
        gradientClasses: ['from-blue-900', 'to-red-800'],
      },
      {
        imageName: 'test',
        imagePosition: 'left',
        title: 'Calculadora Fiscal',
        description: 'Nuxt, Bulma, Figma',
        gradientClasses: ['from-yellow-400', 'to-orange-500'],
      },
      {
        imageName: 'test',
        imagePosition: 'right',
        title: 'IEEE UP SB Website',
        description: 'Vue, Vuetify, Django, PostgreSQL',
        gradientClasses: ['from-green-400', 'to-blue-500'],
      },
      {
        imageName: 'test',
        imagePosition: 'left',
        title: 'Scope: 360 Dashboard',
        description: 'Vue, Vuetify, Node, Knex, PostgreSQL',
        gradientClasses: ['from-purple-400', 'to-red-500'],
      },
    ],
  }),
}
</script>

<style scoped></style>
