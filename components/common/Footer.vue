<template>
  <footer class="h-40 w-full bg-dark-blue text-white py-4 absolute bottom-0">
    <!-- SOCIAL ICONS -->
    <div class="w-64 py-2 mx-auto flex justify-around">
      <a
        v-for="social in socials"
        :key="social.link"
        class="footer-button"
        :href="social.link"
        target="_blank"
      >
        <component :is="social.icon" />
      </a>
    </div>
    <!-- Copyright and Props -->
    <div class="py-2 mx-auto text-center">
      <p>
        All icons provided by
        <a class="underline" target="_blank" href="https://feathericons.com/"
          >Feather</a
        >
        and
        <a class="underline" target="_blank" href="https://www.flaticon.com/"
          >Flaticon</a
        >
      </p>
      <p>
        {{ getCurrentYear }} - <span class="font-bold">Gonçalo Marantes</span>
      </p>
    </div>
  </footer>
</template>

<script>
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
  MailIcon,
} from 'vue-feather-icons'

export default {
  name: 'Footer',

  components: {
    GithubIcon,
    LinkedinIcon,
    InstagramIcon,
    TwitterIcon,
    MailIcon,
  },

  data: () => ({
    socials: [
      {
        icon: GithubIcon,
        link: 'https://github.com/Marantesss',
      },
      {
        icon: LinkedinIcon,
        link: 'https://www.linkedin.com/in/goncalomarantes/',
      },
      {
        icon: InstagramIcon,
        link: 'https://www.instagram.com/marantesss/',
      },
      {
        icon: TwitterIcon,
        link: 'https://twitter.com/marantesss',
      },
      {
        icon: MailIcon,
        link: 'mailto:goncalojmarantes@gmail.com',
      },
    ],
  }),

  computed: {
    getCurrentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
.footer-button {
  @apply transition duration-200 ease-in-out p-2 rounded-full;
}

.footer-button:hover {
  @apply bg-gray-600;
}
</style>
