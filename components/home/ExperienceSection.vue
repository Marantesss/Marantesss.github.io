<template>
  <section>
    <SectionTitle title="Where I've Been" />
    <div class="flex flex-wrap mt-12 justify-center">
      <div v-for="card in cards" :key="card.title" class="p-2">
        <ExperienceCard
          :image-name="card.imageName"
          :title="card.title"
          :description="card.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle'
import ExperienceCard from '~/components/home/ExperienceCard'

export default {
  name: 'ExperienceSection',

  components: {
    SectionTitle,
    ExperienceCard,
  },

  data: () => ({
    cards: [
      {
        imageName: 'graduation',
        title: 'FEUP',
        description: 'MIEIC',
      },
      {
        imageName: 'microchip',
        title: 'SPeCS',
        description: 'Intern',
      },
    ],
  }),
}
</script>

<style scoped></style>
