<template>
  <nav>
    <XIcon
      v-if="isMenuOpen"
      class="menu-button"
      :class="{ 'detached-menu-button': isDetached && !isMenuOpen }"
      size="4x"
      @click="toggleMenu"
    />
    <MenuIcon
      v-else
      class="menu-button"
      :class="{ 'detached-menu-button': isDetached }"
      size="4x"
      @click="toggleMenu"
    />
    <div class="menu" :class="{ 'opened-menu': isMenuOpen }">
      <ul class="flex flex-col place-items-center m-auto">
        <!-- Main Routes -->
        <li
          v-for="route in routes"
          :key="route.name"
          class="menu-item"
          :class="$nuxt.$route.path === route.path ? 'underline' : ''"
          @click="toggleMenu"
        >
          <NuxtLink class="menu-link" :to="route.path">
            {{ route.name }}
          </NuxtLink>
        </li>
        <!-- CV -->
        <li class="menu-item" @click="toggleMenu">
          <a
            class="menu-link"
            target="_blank"
            :href="cvRoute.path"
            v-text="cvRoute.name"
          ></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { MenuIcon, XIcon } from 'vue-feather-icons'

export default {
  name: 'Navbar',

  components: {
    MenuIcon,
    XIcon,
  },

  data: () => ({
    isMenuOpen: false,
    scrollPosition: null,
    routes: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Blog',
        path: '/blog',
      },
    ],
    cvRoute: {
      name: 'CV',
      path: '/CV-GoncaloMarantes.pdf',
    },
  }),

  computed: {
    isDetached() {
      return this.scrollPosition > 50
    },
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style scoped>
.menu-button {
  @apply right-0 top-0 bg-transparent m-2 fixed z-20 rounded-lg cursor-pointer;
}

.menu-button:hover {
  @apply bg-gray-400;
}

.detached-menu-button {
  @apply bg-light-blue shadow-lg;
}

.menu {
  @apply fixed z-10 top-0 left-0 h-screen w-screen bg-light-blue flex items-center justify-center;
  /* Bubble animation */
  clip-path: circle(0px at 100% 0%);
  -webkit-clip-path: circle(0px at 100% 0%);
  @apply transition-all ease-out duration-1000;
}

.opened-menu {
  /* very large numbers */
  clip-path: circle(200% at 100% 0%);
  -webkit-clip-path: circle(200% at 100% 0%);
}

.menu-item {
  @apply font-title text-6xl my-4;
}

.menu-link:hover {
  @apply underline;
}
</style>
