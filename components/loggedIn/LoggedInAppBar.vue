<template>
  <div>
    <v-app-bar
      app
      dense
      elevation="1"
      :clipped-left="clippedLeft"
      color="white"
    >
      <nuxt-link :to="homePath" class="text-decoration-none">
        <app-logo />
      </nuxt-link>

      <app-title :class="{ 'hidden-mobile-and-down': isNotHomePath }" />

      <logged-in-app-bar-breadcrumbs v-if="isNotHomePath" />

      <v-spacer />

      <logged-in-app-bar-account-menu />
    </v-app-bar>
  </div>
</template>

<script>
import AppLogo from '../App/AppLogo.vue'
import AppTitle from '../App/AppTitle.vue'
import LoggedInAppBarAccountMenu from './LoggedInAppBarAccountMenu.vue'
import LoggedInAppBarBreadcrumbs from './LoggedInAppBarBreadcrumbs.vue'
export default {
  components: {
    AppLogo,
    AppTitle,
    LoggedInAppBarAccountMenu,
    LoggedInAppBarBreadcrumbs
  },
  props: {
    clippedLeft: {
      type: Boolean,
      default: false
    }
  },
  data({ $store }) {
    return {
      homePath: $store.state.loggedIn.homePath
    }
  },
  computed: {
    isNotHomePath() {
      return this.$route.name !== this.homePath.name
    }
  }
}
</script>
