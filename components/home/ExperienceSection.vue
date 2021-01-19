<template>
  <section>
    <SectionTitle title="Where I've Been" />
    <div class="flex flex-wrap mt-12">
      <div
        v-for="card in cards"
        :key="card.title"
        class="w-full md:w-1/2 lg:w-1/3 flex justify-center"
      >
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
        color: '#CCD4BF',
      },
      {
        imageName: 'microchip',
        title: 'SPeCS',
        description: 'Intern',
        color: '#E7CBA9',
      },
    ],
  }),
}
</script>

<style scoped></style>
