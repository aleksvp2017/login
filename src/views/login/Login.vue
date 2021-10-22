<template>
 <div>
      <v-btn color="primary" class="white--text" @click="login">Login</v-btn>
 </div>
</template>

<script>
import {mapActions} from 'vuex'
import {getRoute} from '../../routes.js'

export default {
    
    data() {
      return {
        credencial :{
        },          
      }
    },
    methods : {
      ...mapActions(['ActionLogin']),
      login(){
        this.ActionLogin(this.credencial).then((response) => {
          this.$router.push(getRoute('Home'))
        }).catch (error => {
          console.log('Error: ', error)
        })
      },
    }
}
</script>