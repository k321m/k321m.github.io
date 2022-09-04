<template>
  <v-container>
    <AboutMeProfile />
    <AboutMeEducatoin />
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import AboutMeProfile from '../components/AboutMe/AboutMeProfile.vue';
import AboutMeEducatoin from '@/components/AboutMe/AboutMeEducatoin.vue';

// Components
export default defineComponent({
    name: "AboutMeView",
    
    components: { AboutMeProfile, AboutMeEducatoin }
});
</script>

