<template>
  <div class="align-center">
    <v-row>
      <v-col>
        <v-img :width="400" :src="imgPath"/>
      </v-col>
      <v-col class="mt-5" align-self="center">
        <div>
          <span class="mt-3 text-h4 font-weight-black">岸 美咲希</span>
          <span class="text-h5 font-weight-medium text--secondary ml-3">Kishi Misaki</span>
        </div>
          <p class="mt-3">
            東京電機大学未来科学部情報メディア学科 学部４年<br>
            メディア応用研究室所属
          </p>
      </v-col>
    </v-row>
  </div>    
</template>

<script>
export default ({
    name: "AboutMeProfile",

    data: () => ({
        imgPath: require("../../assets/profile.jpg")
    }),
    
})
</script>
