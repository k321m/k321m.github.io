<template>
    <v-footer padless class="text-center">
        <v-card-text>
          <v-btn
            v-for="button in buttons" :key="button" icon v-bind:href=button.path>
            <v-icon size="24px">
              {{ button.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text>
            {{ new Date().getFullYear() }} — <strong>Misaki.K</strong>
        </v-card-text>
  </v-footer>
</template>

<script>
export default ({
    name: "PortfolioFooter",
    data: () => ({
        buttons: [
            {icon: "mdi-email-outline", path:"mailto:19fi037@ms.dendai.ac.jp"},
            {icon: "mdi-github", path:"https://github.com/k321m"},
            {icon: "mdi-web", path:"https://www.wantedly.com/id/misaki_kishi_b"}
        ]
    }),
})
</script>
