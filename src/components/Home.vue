<template>
    <Header/>
  <h1>Hello <span>{{name}}</span>, Welcome to the Restaurants Association</h1>
  <br><br>
  <h3>All the registered restaurants are displayed below:</h3><br>
  <table>
      <tr class="labelRow">
          <td>ID</td>
          <td>Name</td>
          <td>Address</td>
          <td>Contact</td>
          <td>Actions</td>
      </tr>
      <tr v-for="item in restaurants" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.address}}</td>
          <td>{{item.contact}}</td>
          <td><router-link :to="'/UpdateRestaurant/'+item.id">Edit</router-link> |
          <router-link @click="deleteResto(item.id)" to="">Delete</router-link></td>
      </tr>
  </table>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name: "Name",
    components: { Header },
    data(){
        return {
            name:'',
            restaurants: [],
        }
    },
    methods: {
        async deleteResto(id){
            let result = await axios.delete("http://localhost:3000/restaurants/"+id)
            console.log(result.status)
            if(result.status==200){
                this.loadData()
            }
        },
        async loadData(){
        let user = localStorage.getItem("user-info")
        console.log(user)
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        this.name = JSON.parse(user).name

        let result = await axios.get("http://localhost:3000/restaurants")
        this.restaurants = result.data
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>

<style scoped>
table{
    text-align: center;
    border: 1px solid black;
    margin: 0px auto;
    background: rgb(221, 221, 221);
}
td{
    padding: 10px 50px;
}
.labelRow{
    font-weight: bold;
    font-size: 1.5rem;
    color: black;
}
span{
    text-transform: uppercase;
}
</style>