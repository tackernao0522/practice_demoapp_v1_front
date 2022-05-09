<template>
  <v-app>
    <logged-in-app-bar />
    <v-main>
      <Nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '../components/App/AppFooter.vue'
import LoggedInAppBar from '../components/loggedIn/LoggedInAppBar.vue'
export default {
  components: { LoggedInAppBar, AppFooter }

}
</script>
