<template>
  <span>
    <button @click="send">-</button>
    <input type="text" class="it" v-model="num">
    <button @click="sd">+</button>
  </span>
</template>

<script>
export default {
    props:['index','num'],
    data () {
        return {
            
        }
    },
methods: {
    send:function(){
        this.$emit('send',this.index)
    },
    sd:function(){
        this.$emit('sd',this.index)
    }
}
}
</script>

<style>
.it{
  width: 40px;
    height: 25px;
    padding: 1px 2px;
    text-align: center;
}
</style>