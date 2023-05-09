<template>
  <section class="w-full">
    <SectionTitle title="Where I've Been" />
    <div class="grid gap-6 grid-cols-4 mt-12">
      <div
        v-for="card in cards"
        :key="card.title"
        class="p-2 w-full col-span-4 md:col-span-2 lg:col-span-1"
      >
        <ExperienceCard
          :image-name="card.imageName"
          :title="card.title"
          :description="card.description"
          :period="card.period"
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
        description: 'Student',
        period: '2017 - 2022',
      },
      {
        imageName: 'microchip',
        title: 'SPeCS',
        description: 'Intern',
        period: '2020',
      },
      {
        imageName: 'football-ball',
        title: 'ZeroZero',
        description: 'Software Developer',
        period: '2021',
      },
      {
        imageName: 'idea',
        title: 'INESC-TEC',
        description: 'Intern',
        period: '2021 - 2022',
      },
      {
        imageName: 'cogwheel',
        title: 'Infraspeak',
        description: 'Software Developer',
        period: '2022 - Present',
      },
    ],
  }),
}
</script>

<style scoped></style>
