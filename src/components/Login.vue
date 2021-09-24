<template>
<div class="body">
  <img src="../assets/logo.png" alt="logo" class="logo">
  <h2>Login to your Account</h2>
  <div class="login">
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button @click="login">Login</button>
      <p>Don't Have Account? <router-link to="/SignUp">SignUp</router-link> Here!</p>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login(){
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            console.log(result)
            if(result.status == 200 && result.data.length > 0){
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({name:'Home'})
            }
        }
    },
    mounted(){
        console.log("mounted")
        let user = localStorage.getItem("user-info")
        if(user){
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style scoped>
.body{
    margin-top: 70px;
}
.logo{
    width: 100px;
    height: 120px;
}
.login input{
    margin: 0 auto 20px auto;
    width: 300px;
    height: 40px;
    padding-left: 10px;
    display: block;
    background: rgb(233, 233, 233);
    border: 1px solid rgb(152, 244, 251);
    border-radius: 10px;
}
.login ::placeholder{
    color: rgb(139, 139, 139);
}
.login button{
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background: rgb(152, 244, 251);
    color: black;
    cursor: pointer;
    transition: 0.3s all;
    font-weight: bold;
}
.login button:hover{
    background: rgb(61, 193, 202);
}
a{
    text-decoration: none;
    font-weight: bold;
    color: rgb(61, 193, 202);
}
</style>