<template>
  <div class="about">
    <h1>聊天机器人</h1>
    <input type="text" v-model="value"><button @click="getData(value)">发送</button>
    <h1>回答：{{returnValue}}</h1>
  </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState,mapActions} = createNamespacedHelpers('wsl')
export default {
  data(){
    return{
      value:''
    }
  },
  computed:{
    ...mapState({
      returnValue:state=>state.returnValue,
    })
  },
  methods:{ 
    ...mapActions(['getData'])
  }
}
</script>
