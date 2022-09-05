<template>
    <div class="my-10">
        <h1>Education</h1>
        <v-row class="mt-3">
            <v-timeline dense>
                <v-timeline-item v-for="item in items" :key="item">
                    <div class="text--secondary">
                        {{item.time}}
                    </div>
                    <strong>
                        {{item.title}}
                    </strong>
                </v-timeline-item>
            </v-timeline>
        </v-row>
    </div>
</template>

<script>
export default ({
    name: 'AboutMeEducation',
    data: () => ({
        items:[
           {title:"東京女学館高等学校 卒業", time:"2019年3月"},
           {title:"東京電機大学未来科学部情報メディア学科 入学", time:"2019年4月"},
           {title:"東京電機大学未来科学部情報メディア学科 卒業予定", time:"2023年3月"},
           {title:"東京電機大学大学院未来科学科情報メディア学専攻 進学予定", time:"2023年4月"} 
        ]

    }),
});
</script>
