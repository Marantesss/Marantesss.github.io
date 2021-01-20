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
      <ul class="text-center m-auto p-2">
        <li
          v-for="item in navbarItems"
          :key="item.name"
          class="menu-item"
          @click="toggleMenu"
        >
          <NuxtLink :to="item.route">
            {{ item.name }}
          </NuxtLink>
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
    navbarItems: [
      {
        name: 'Home',
        route: '/',
      },
      {
        name: 'Blog',
        route: '/blog',
      },
    ],
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
  @apply font-title text-4xl py-4 transition-all duration-200 ease-in-out;
}

.menu-item:hover {
  @apply underline;
}
</style>
