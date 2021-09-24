<template>
<Header/>
  <h1>Update Restaurant Page</h1><br> <br>
  <h4>Enter restaurant's new details: </h4>
  <form class="addRest">
    <input type="text" placeholder="Enter New Name" v-model="restaurant.name">
    <input type="text" placeholder="Enter New Address" v-model="restaurant.address">
    <input type="text" placeholder="Enter New Contact" v-model="restaurant.contact">
    <button type="button" @click="updateResto">UPDATE</button>
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
      async updateResto(){
      let result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id,{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            })
            console.log(result)
            if(result.status == 200){
                this.$router.push({name:'Home'})
            }

      }
  },
  async mounted(){
      let result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id)
      console.log(result)
      this.restaurant = result.data
  }
}
</script>

<style>
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