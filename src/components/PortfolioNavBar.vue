<template>
    <v-container>
        <v-app-bar app>
            <v-app-bar-title class="text-center">
                <h2>misaki's portfolio</h2>
            </v-app-bar-title>
            <template v-slot:extension>
                <v-tabs grow>
                    <v-tab v-for="item in items" :key="item" v-bind:to=item.path>
                            {{item.title}}       
                    </v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
    
    </v-container>
</template>

<script>
export default {
    name: 'PortfolioNavBar',

    data: () => ({
        items:[
            {title:'About Me', path:'/'}, 
            {title:'Works', path:'/works'}],
    }),
}
</script>

