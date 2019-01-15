<template>
  <div id="app">
 <div>
    <h3>Create a new movie</h3>
     <IndexComonents />
  </div>
  </div>
  
 
</template>

<script>
import IndexComonents from './components/index.vue'

export default {
  name: 'app',
    components:{
    IndexComonents
  },
   date(){
     return{

     }
   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin-top: 60px;
  font-size: 30px;
}
body{
  background-color: #DDD;
}
</style>
