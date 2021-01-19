<template>
  <nav>
    <XIcon
      v-if="isMenuOpen"
      class="menu-button"
      :class="{ 'detached-menu-button': isDetached }"
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
    <div
      class="menu"
      :class="{ 'opened-menu': isMenuOpen, 'closed-menu': !isMenuOpen }"
    >
      <ul class="text-center m-auto p-2">
        <li
          v-for="item in navbarItems"
          :key="item.name"
          class="font-title text-4xl py-4"
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
  @apply right-0 bg-transparent top-0 m-2 fixed z-20 rounded-lg cursor-pointer;
}

.menu-button:hover {
  @apply bg-gray-400;
}

.detached-menu-button {
  @apply bg-gray-200 shadow-lg mt-4;
}

.menu {
  @apply fixed z-10 top-0 left-0 h-screen w-screen bg-white flex items-center justify-center;
}

.closed-menu {
  @apply hidden;
}

.opened-menu {
  @apply visible;
}
</style>
