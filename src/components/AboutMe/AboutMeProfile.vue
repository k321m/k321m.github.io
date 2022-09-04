<template>
  <div class="align-center">
    <v-row>
      <v-col>
        <v-img :width="400" :src="imgPath"/>
      </v-col>
      <v-col class="mt-5">
        <div>
          <h1 class="mt-3">岸 美咲希</h1>
          <h3 class="mt-n1">Kishi Misaki</h3>
        </div>
          <p class="mt-3">東京電機大学未来科学部情報メディア学科 学部４年<br>
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
