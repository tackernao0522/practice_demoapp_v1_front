<template>
  <user-form-card>
    <template #user-form-card-content>
      <v-form v-model="isValid">
        <user-form-name />
        <user-form-email />
        <user-form-password />
        <v-btn
          :disabled="!isValid"
          block
          color="appblue"
          class="white--text"
        >
          登録する
        </v-btn>
      </v-form>
    </template>
  </user-form-card>
</template>

<script>
import UserFormCard from '../components/User/UserFormCard.vue'
import UserFormEmail from '../components/User/UserFormEmail.vue'
import UserFormName from '../components/User/UserFormName.vue'
import UserFormPassword from '../components/User/UserFormPassword.vue'
export default {
  components: { UserFormName, UserFormEmail, UserFormPassword, UserFormCard },
  layout: 'before-login',
  data() {
    return {
      isValid: false
    }
  }
}
</script>
