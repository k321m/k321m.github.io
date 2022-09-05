<template>
    <div>
        <v-row>
            <v-col v-for="work in works" :key="work" cols="6">
                <v-card height="300">
                    <v-card-title class="text-h5 font-weight-bold">{{work.title}}</v-card-title>
                        <v-chip label class="ml-4" v-for="technique in work.usedTechniques" :key="technique">
                            <v-icon left>mdi-label</v-icon>
                            {{technique}}
                        </v-chip>
                     <v-card-text class="text-body-1">
                        {{work.description}}
                     </v-card-text>
                     <v-spacer></v-spacer>
                        <v-card-actions class="justify-end">
                            <v-btn outlined large color="indigo" class="ma-5 card-actions">detail</v-btn>
                        </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default ({
    name: "WorksCards",
    data: () => ({
        works:[
            {title: "ポートフォリオ", 
            description: "GitHubPagesを用いてポートフォリを作成しました。Vue.jsを勉強したかったためVueCLIで作成しました。", 
            usedTechniques: ["Vue.js", "Node.js"]},
            {title: "Adobe XDワークショップに登壇",
            description: "「アドビ株式会社」が本学でAdobe XDのワークショップを開催するにあたり、学生講師として指名され、モバイル名刺のプロトタイプおよびその教材を、アドビのエバンジェリストの方と二人で開発しました。",
            usedTechniques: ["Adobe XD"]},
            {title: "GamePit インディーズゲーム開発",
            description: "「ストライキ・ストライク」という3DCGアクションゲームを制作し、GamePit Tokyo 2022に出展しました。",
            usedTechniques: ["Unity", "C#"]},
            {title: "Webアプリケーション開発",
            description: "大学の授業で4名1チームとなり、JavaでWebアプリケーションを開発しました。",
            usedTechniques: ["Java", "Java Servlet", "JSP"]
            }
            
        ],
        
    }),

})
</script>

<style scoped>
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>