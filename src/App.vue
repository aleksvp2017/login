<template>
 <v-app>
 <navigation/>
 <v-main>
 <router-view/>
 </v-main>
 </v-app>
</template>

<script>
import Navigation from './views/navigation/Navigation.vue'

export default {
 components: {
 'navigation': Navigation
    },    
  }
</script>