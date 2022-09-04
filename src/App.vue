<template>
  <v-app>
    <v-main>
      <PortfolioNavBar />
      <router-view/>
      <PortfolioFooter/>
    </v-main>
  </v-app>
</template>

<script>
import PortfolioNavBar from './components/PortfolioNavBar.vue';
import PortfolioFooter from './components/PortfolioFooter.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { PortfolioNavBar, PortfolioFooter }
};
</script>
