<template>

   
  <div id="app">
    <HelloWorld/>
<div class="columns" v-for="item in cityList" :key="item">
  <img v-bind:src="require('./assets/' + item.img)">
    <ul class="price">
    <li class="header">Tempeparture</li>
    <li class="grey">{{item.name}}</li>
    <li class="grey">{{item.weather}}</li>
    <li class="grey">{{item.temp}}</li>
  </ul>
  </div>
  </div>

  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
    props: ['temperature'],
    data(){
     return{
        cityList:[
          {name: "Paris", weather: 8.9, img: "paris.png", temp: "Neige"},
          {name: "London", weather: 20, img: "london.png", temp: "Sunny"},
          {name: "Tokyo", weather: 13,  img: "tokyo.png", temp: "Cloudy"}
        ]
     }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.columns {
  float: left;
  width: 33.3%;
  padding: 8px;
}

.price {
  list-style-type: none;
  border: 1px solid #eee;
  margin: 0;
  padding: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.price:hover {
  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
}

.price .header {
  background-color: #111;
  color: white;
  font-size: 25px;
}

.price li {
  border-bottom: 1px solid #E6E6E6;
  padding: 20px;
  text-align: center;
  border: 1px solid #FFF;
}

.price .grey {
  background-color: #eee;
  font-size: 20px;
}

.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
}

@media only screen and (max-width: 600px) {
  .columns {
    width: 100%;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 10px;
  margin-top: -10px;
}
img{
   width: 397px;
  height: 200px;
  border: 3px solid #333;
}
</style>
