<template>
  <nav class="fixed w-full top-0 bg-transparent z-10">
    <ul class="flex justify-end navbar-items p-2">
      <li
        v-for="item in navbarItems"
        :key="item.name"
        class="navbar-items text-2xl p-2 w-32 text-center"
      >
        <NuxtLink :to="item.route">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data: () => ({
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
}
</script>

<style scoped>
.navbar-items {
  font-family: 'Poiret One';
}
</style>
