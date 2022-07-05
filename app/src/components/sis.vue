<template>
<div><h1>SIS</h1>
  <h2>{{msg}}</h2>
  <button @click="gb">啊啊啊</button>
  </div>
  
</template>

<script>
import store from "../store";
export default {
data () {
    return {
        msg:'浩浩乎'
    }
},methods:{
    gb:function(){
        store.setStateMessage(this.msg)
    }
}
}
</script>

<style>

</style>