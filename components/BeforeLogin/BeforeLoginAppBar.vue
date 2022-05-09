<template>
  <v-app-bar
    app
    :height="homeAppBarHeight"
    color="white"
  >
    <nuxt-link
      to="/"
      class="text-decoration-none"
    >
      <app-logo />
    </nuxt-link>

    <app-title
      class="hidden-mobile-and-down"
    />

    <v-spacer />

    <before-login-app-bar-signup-button />
    <before-login-app-bar-login-button />
  </v-app-bar>
</template>

<script>
import AppLogo from '../App/AppLogo.vue'
import AppTitle from '../App/AppTitle.vue'
import BeforeLoginAppBarLoginButton from './BeforeLoginAppBarLoginButton.vue'
import BeforeLoginAppBarSignupButton from './BeforeLoginAppBarSignupButton.vue'
export default {
  components: { AppLogo, BeforeLoginAppBarSignupButton, BeforeLoginAppBarLoginButton, AppTitle },
  data ({ $store }) {
    return {
      homeAppBarHeight: $store.state.styles.homeAppBarHeight
    }
  }
}
</script>
