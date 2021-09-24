<template>
<Header/>
  <h1>Add Restaurant Page</h1><br><br>
  <h4>Enter new restaurant details: </h4>
  <form class="addRest">
    <input type="text" placeholder="Enter Restaurant Name" v-model="restaurant.name">
    <input type="text" placeholder="Enter Restaurant Address" v-model="restaurant.address">
    <input type="text" placeholder="Enter Restaurant Contact" v-model="restaurant.contact">
    <button type="button" @click="addResto">ADD</button>
  </form> 
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
  components: { Header },
  data(){
    return{
      restaurant: {
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  methods: {
    async addResto(){
      console.log(this.restaurant)
      let result = await axios.post("http://localhost:3000/restaurants",{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            })
            console.log(result)
            if(result.status == 201){
                this.$router.push({name:'Home'})
            }
    }
  }

}
</script>

<style scoped>
h1{
    margin-top: 70px;
}
.addRest input{
  display: block;
  width: 300px;
  height: 50px; 
  border: none;
  border-radius: 20px;
  background: rgb(233, 232, 232);
  margin: 20px auto;
  padding-left: 30px;
}
.addRest button{
  border:none;
  border-radius: 10px;
  padding: 15px 40px;
  font-weight: bold;
  background: rgb(73, 111, 235);
  cursor: pointer;
}
.addRest button:hover{
  background: rgb(46, 92, 245);
}
</style>