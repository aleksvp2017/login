<template>
 <v-app-bar app color="#0D2F52" dark>
 <v-toolbar-title>
 <h2>
 <v-btn color="#0D2F52" dark elevation="0" to="/">
 <v-icon dark right color="#389F9E">mdi-home</v-icon>
 </v-btn> 
 <span style="color:#389F9E;font-family: 'Montserrat';" >
                    Simple UI
 </span>
 </h2>
 </v-toolbar-title>
 <v-spacer></v-spacer>
 <div >
 <v-btn color="#0D2F52" x-large v-for="(route, index) in routes" :key="index"
                    :to="route.path"> 
                    {{route.name}}
 </v-btn>
 </div>
 </v-app-bar>
</template>

<script>
import { routes } from '../../routes.js'

export default {
 data() {
 return {
 routes,
        }
    },
}

</script>