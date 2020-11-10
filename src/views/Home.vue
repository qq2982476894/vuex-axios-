<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{name}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import {createNamespacedHelpers} from 'vuex';
import {mapGetters} from 'vuex';
const {mapGetters:wslMapGetters} = createNamespacedHelpers('wsl')
export default {
  name: 'Home',
  data(){
    return{
      name:'',
    }
  },
  components: {
  },
  computed:{
    ...wslMapGetters(['getUserId'])
  },
  mounted(){
   this.name = this.getUserId(2).name;
  }
  
}
</script>
