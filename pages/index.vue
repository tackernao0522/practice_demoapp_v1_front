<template>
  <v-app>
    <home-app-bar />
    <v-sheet>
      <v-container fluid :style="{ maxWith: '1280px' }">
        <v-row v-for="(menu, i) in menus" :key="`menu-${i}`">
          <v-col cols="12">
            <div :is="`Home-${menu.title}`" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '../components/App/AppFooter.vue'
import HomeAbout from '../components/Home/HomeAbout.vue'
import HomeAppBar from '../components/Home/HomeAppBar.vue'
import HomeCompany from '../components/Home/HomeCompany.vue'
import HomeContact from '../components/Home/HomeContact.vue'
import HomePrice from '../components/Home/HomePrice.vue'
import HomeProducts from '../components/Home/HomeProducts.vue'
export default {
  components: { HomeAbout, HomeCompany, HomeContact, HomePrice, HomeProducts, HomeAppBar, AppFooter },
  data() {
    return {
      menus: [
        {
          title: 'about',
          subtitle:
            'このサイトはブログ"独学プログラマ"で公開されているチュートリアルのデモアプリケーションです'
        },
        { title: 'products', subtitle: '他にはない優れた機能の数々' },
        { title: 'price', subtitle: '会社の成長に合わせた３つのプラン' },
        { title: 'contact', subtitle: 'お気軽にご連絡を' },
        { title: 'company', subtitle: '私たちの会社' }
      ]
    }
  }
}
</script>
