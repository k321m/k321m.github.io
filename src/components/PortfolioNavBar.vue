<template>
    <v-app-bar app height="90">
        <v-spacer />
        <v-app-bar-title>
            <h1 class="text-center mt-5">Misaki's Portfolio Page</h1>
        </v-app-bar-title>
        <v-spacer />
        <template v-slot:extension>
            <v-tabs grow>
                <v-tab v-for="item in items" :key="item" v-bind:to=item.path>
                        {{item.title}}       
                </v-tab>
            </v-tabs>
        </template>
    </v-app-bar>
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

