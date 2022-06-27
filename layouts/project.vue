<template>
  <v-app>
    <logged-in-app-bar clipped-left>
      <template #navigation-toggle-button>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </template>
    </logged-in-app-bar>

    <project-navigation-drawer :drawer.sync="drawer" />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import LoggedInAppBar from '../components/loggedIn/LoggedInAppBar.vue'
import ProjectNavigationDrawer from '../components/Project/ProjectNavigationDrawer.vue'
export default {
  components: { LoggedInAppBar, ProjectNavigationDrawer },
  middleware: ['authentication', 'get-project-list', 'get-project-current'],
  data() {
    return {
      drawer: null
    }
  }
}
</script>
