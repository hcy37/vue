<template>
  <div id="app">
    <button>重置数量</button>
    <ul>
      <li :key="index" v-for="(item,index) in arr">
        <span>{{item.name}}</span>
        <span>￥单价:</span>
        <span>{{item.price}}</span>
        <Child 
        :index='index'
        :num='item.num'
        @send="reduce(index)"
        @sd="add(index)"

        ></Child>
      </li>
    </ul>
    
    <h2><span>总数为：</span>{{count}}<span>总价为：</span>{{sum}}</h2>
  </div>
</template>

<script>
import Child from "./components/child.vue";
export default {
data () {
  return {
    arr:[{name:'香蕉',price:3.20,num:1},
    {name:'苹果',price:2.20,num:1},
    {name:'鸭梨',price:1.20,num:1}],
    
  }
},methods: {
  add:function(n){
    this.arr[n].num++
    // console.log(this.arr[n].num);
  },reduce:function(n){
    // console.log(n);
    if(this.arr[n].num>0){
      this.arr[n].num--
    }
  }
},computed:{
  count:function(){
    var c=0
    this.arr.some((item)=>{
      c+=item.num
    })
    return c
  },sum:function(){
    var s=0
    this.arr.some((item)=>{
      s+=(item.num*item.price)
    })
    return s.toFixed(2)
  }
},components:{
  Child
}
}
</script>

<style>

</style>