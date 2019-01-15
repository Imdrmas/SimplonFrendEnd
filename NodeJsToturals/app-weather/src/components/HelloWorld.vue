<template>
  <div id="MyDiv">
       <ul>
    <li v-for="item in items" :class="{activeclass: item.isActive}" :key="item">
      <div class="item-text">
        {{ item.name }}
      </div>
      <button @click="toggle(item)">show</button>
      <div v-show="item.isActive" class="item-desc">
        {{ item.weather }} <br/>
        {{item.temp}}
      </div>
    </li>
  </ul>
  </div>
</template>
<script>
 export default {
    data () {
      return {
        items: [
          {
            isActive: false,
            name: "Paris", weather: 8.9, temp: "Neige",
          },
            {
            isActive: false,
            name: "London", weather: 20, temp: "Sunny",

          },
          {
            isActive: false,
            name: "Tokyo", weather: 13,  temp: "Cloudy"
          }
        ],
      }
    },
    methods: {
      toggle: function (item) {
        item.isActive = !item.isActive;
      }
    },
  }
</script>
<style>
* {
  box-sizing: border-box;
}
body{
    background: #000;
}
@media only screen and (max-width: 600px) {
  #MyDiv {
    width: 100%;
  }
}
#MyDiv button{
  font-size: 20px;
  padding: 5px 20px;
  background: indianred;
  color: #FFF;
  font-weight: unset;
}
#MyDiv{
 background: #D7D7D7;
}
#MyDiv li {
padding: 10px 20px;
display: block;
font-size: 30px;
}

#MyDiv ul{
    display: flex;
}

.item-desc{
background: #FFF;
padding: 2px;
}

</style>
