<template>
  <section>
    <SectionTitle title="What I've been up to" />
    <div class="grid gap-6 grid-cols-2 mt-12">
      <!-- 4 projects card -->
      <div
        v-for="card in cards"
        :key="card.title"
        class="w-full h-full col-span-2 lg:col-span-1"
      >
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
        imageName: 'projects/project-orwell.jpg',
        imagePosition: 'right',
        title: 'Project: Orwell',
        description:
          'React, Bulma, Node, Express, Knex, PostgreSQL, Redis, Traefik',
        url: 'https://project-orwell.pt/',
        gradientClasses: 'bg-gradient-to-r from-blue-900 to-red-800',
      },
      {
        imageName:
          'articles/the-making-of-decorators-to-options-api/vs-code-task.gif',
        imagePosition: 'left',
        title: 'Decorators to Object API Transpiler',
        description: 'TypeScript, ts-morph, Compilers',
        url:
          'https://github.com/Marantesss/decorators-to-object-api-transpiler',
        gradientClasses:
          'bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900',
      },
      {
        imageName: 'projects/ieee-up-sb.jpg',
        imagePosition: 'right',
        title: 'IEEE UP SB Website',
        description: 'Vue, Vuetify, Django, PostgreSQL',
        url: 'https://ieee.fe.up.pt',
        gradientClasses: 'bg-gradient-to-r from-green-400 to-blue-500',
      },
      {
        imageName: 'projects/ray-tracing-scala.png',
        imagePosition: 'left',
        title: 'Ray Tracing in Scala',
        description: 'Scala 3, ScalaTest, Scalafmt',
        url: 'https://github.com/Marantesss/ray-tracing-scala',
        gradientClasses: 'bg-gradient-to-r from-purple-400 to-red-500',
      },
    ],
  }),
}
</script>

<style scoped></style>
