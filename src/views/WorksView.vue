<template>
  <div>
    <v-container>
      <div class="mt-10">
        <h1 class="mb-5">Works</h1>
      </div>
      <WorksCards/>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import WorksCards from '@/components/Works/WorksCards.vue';
  
  // Components
  export default defineComponent({
    name: 'WorksView',
  
    components: { WorksCards },
  });
</script>