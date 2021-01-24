<template>
  <section>
    <SectionTitle title="What I Know" />
    <div class="flex flex-wrap mt-12">
      <div
        v-for="card in cards"
        :key="card.title"
        class="w-full md:w-1/2 lg:w-1/3 flex justify-center p-4"
      >
        <ExpertiseCard
          :image-name="card.imageName"
          :title="card.title"
          :description="card.description"
          :color="card.color"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle'
import ExpertiseCard from '~/components/home/ExpertiseCard'

export default {
  name: 'ExpertiseSection',

  components: {
    SectionTitle,
    ExpertiseCard,
  },

  data: () => ({
    cards: [
      {
        imageName: 'ui-ux',
        title: 'UI/UX',
        description:
          'I use all the mainstream design programs to build landing pages, user flow, wireframing, prototyping',
        color: '#CCD4BF',
      },
      {
        imageName: 'branding',
        title: 'Branding',
        description:
          'I really enjoy creating brands and visual identities. I usually make marketing materials, color and tyopography kits',
        color: '#E7CBA9',
      },
      {
        imageName: 'frontend',
        title: 'Frontend Development',
        description:
          'I don’t just envison and design pretty stuff, I can also implement it',
        color: '#EEBAB2',
      },
      {
        imageName: 'backend',
        title: 'Backend Development',
        description: 'Besides the casual vanilla PHP I mostly use nodeJS',
        color: '#F7F6CF',
      },
      {
        imageName: 'database',
        title: 'Database Development',
        description:
          'Have no fear, relational databases are also a comfort area for me',
        color: '#DFF2F6',
      },
      {
        imageName: 'teamwork',
        title: 'Teamwork',
        description:
          'I’m a team player and I’m not really fond of  working alone',
        color: '#BEB4C5',
      },
    ],
  }),
}
</script>

<style scoped></style>
