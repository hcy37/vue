<template>
<div>
   <h1>{{msg}}</h1>
   <input type="text" v-model="sj">
   <button @click="send">传值</button>
   <ul>
      <ul>
      <li :key='index' v-for="(item,index) in res">
       <span>{{item.id}}</span> <span>{{item.name}}</span> 
      </li>
    </ul>
   </ul>
</div>
   
</template>
<script>
export default {
   data () {
      return {
         sj:'',
         bd:[{
        id: 1,
        name: '三国演义',
        date: 2525609975000
    }, {
        id: 2,
        name: '水浒传',
        date: 2525609975000
    }, {
        id: 3,
        name: '红楼梦',
        date: 2525609975000
    }, {
        id: 4,
        name: '西游记',
        date: 252560997500
    }]
      }
   },
   props: ['msg','res'],
   methods:{
      send:function(){
         this.$emit('ex',this.bd)
      }
   }
}

</script>