<template>
  <div class="weer">
    <h1>Weer:</h1>
    <h2>{{ this.data.name }}</h2>
    <form>
        <input type="text" v-model="city" v-debounce:1s.cancelonempty="getData">
    </form>
    <br />
    {{ this.data.main }} <br>
    {{ this.data.temp }}
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'Weer',
  data() {
      return {
        city: "Zwolle",
        data: {
          main: "",
          temp: 0
        }
      }
  },
  methods: {    
    getData() {
      const apikey = '4771f9256f16f2137dca6ca2dad803bf';

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`)
      .then((response) => {
          this.data.main = response.data.weather[0].main;
          this.data.temp = (response.data.main.temp - 273).toFixed(1) + ' °C';
          this.data.name = response.data.name;

      }).catch(() => {
          this.data.main = "";
          this.data.temp = "";
          this.data.name = this.city + " is geen stad!";
        console.log("city not found")
      })
    }
  },
  mounted() {
    this.getData();
  }
}
</script>
