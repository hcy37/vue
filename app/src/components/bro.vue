<template>
<div>
      <h1>Bro</h1>
  <h2>{{msg}}</h2>
  <h3>{{gg}}</h3>
</div>

</template>

<script>
import { computed } from 'vue';
import store from "../store";
export default {
data () {
    return {
        msg:store.state.message
    }
},computed:{
        gg:function(){
           return store.setStateMessage()
        }
    }
}
</script>

<style>

</style>