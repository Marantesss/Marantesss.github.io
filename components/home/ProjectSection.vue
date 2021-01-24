<template>
  <section>
    <SectionTitle title="What I've been up to" />
    <div class="grid gap-6 grid-cols-1 xl:grid-cols-2 mt-12">
      <!-- 4 projects card -->
      <div v-for="card in cards" :key="card.title" class="w-full h-full p-2">
        <ProjectCard
          :image-name="card.imageName"
          :image-position="card.imagePosition"
          :title="card.title"
          :description="card.description"
          :url="card.url"
          :gradient-classes="card.gradientClasses"
        />
      </div>
      <!-- All projects button -->
      <div class="col-span-2 flex justify-center">
        <a target="_blank" href="https://github.com/Marantesss">
          <Button
            :color-class="'bg-gradient-to-r from-gray-600 via-gray-700 to-black'"
            >View all my Projects</Button
          >
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle'
import ProjectCard from '~/components/home/ProjectCard'
import Button from '~/components/common/Button'

export default {
  name: 'ProjectSection',

  components: {
    SectionTitle,
    ProjectCard,
    Button,
  },

  data: () => ({
    cards: [
      {
        imageName: 'project-orwell.jpg',
        imagePosition: 'right',
        title: 'Project: Orwell',
        description:
          'React, Bulma, Figma, Affinity Design, Node, Express, Knex, PostgreSQL',
        url: 'https://project-orwell.pt/',
        gradientClasses: 'bg-gradient-to-r from-blue-900 to-red-800',
      },
      {
        imageName: 'calculadora-fiscal.jpg',
        imagePosition: 'left',
        title: 'Calculadora Fiscal',
        description: 'Nuxt, Bulma, Figma',
        url: 'https://calculadora-fiscal.pt',
        gradientClasses: 'bg-gradient-to-r from-yellow-400 to-orange-500',
      },
      {
        imageName: 'ieee-up-sb.jpg',
        imagePosition: 'right',
        title: 'IEEE UP SB Website',
        description: 'Vue, Vuetify, Django, PostgreSQL',
        url: 'https://ieee.fe.up.pt',
        gradientClasses: 'bg-gradient-to-r from-green-400 to-blue-500',
      },
      {
        imageName: 'scope-360-dashboard.jpg',
        imagePosition: 'left',
        title: 'Scope: 360 Dashboard',
        description: 'Vue, Vuetify, Node, Knex, PostgreSQL',
        url: 'https://github.com/Marantesss/feup-sinf',
        gradientClasses: 'bg-gradient-to-r from-purple-400 to-red-500',
      },
    ],
  }),
}
</script>

<style scoped></style>
