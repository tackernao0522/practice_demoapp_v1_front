<template>
  <div>
    <before-login-app-bar />
    <v-main>
      <Nuxt />
    </v-main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '../components/App/AppFooter.vue'
import BeforeLoginAppBar from '../components/BeforeLogin/BeforeLoginAppBar.vue'
export default {
  components: { BeforeLoginAppBar, AppFooter }

}
</script>
