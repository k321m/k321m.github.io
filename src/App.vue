<template>
  <v-app>
    <v-main>
      <PortfolioNavBar />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import PortfolioNavBar from './components/PortfolioNavBar.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { PortfolioNavBar }
};
</script>
