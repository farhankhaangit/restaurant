<template>
<div class="body">
  <img src="../assets/logo.png" alt="logo" class="logo">
  <h2>Create New Account</h2>
  <div class="register">
      <input type="text" placeholder="Name" required v-model="name">
      <input type="email" placeholder="Email" required v-model="email">
      <input type="password" placeholder="Password" required v-model="password">
      <button @click="signUp">SignUp</button>
      <p>Already Have Account? <router-link to="/Login">Login</router-link> Here!</p>
  </div>
</div>
</template>

<script>
import axios from 'axios'   
export default {
    name: 'SignUp',
    data(){
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp(){
            console.log(this.name, this.email, this.password)
            let result = await axios.post("http://localhost:3000/users",{
                name: this.name,
                email: this.email,
                password: this.password
            })
            console.log(result)
            if(result.status == 201){
                localStorage.setItem("user-info", JSON.stringify(result.data))
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
.register input{
    margin: 0 auto 20px auto;
    width: 300px;
    height: 40px;
    padding-left: 10px;
    display: block;
    background: rgb(233, 233, 233);
    border: 1px solid palegreen;
    border-radius: 10px;
}
.register ::placeholder{
    color: rgb(139, 139, 139);
}
.register button{
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background: palegreen;
    color: black;
    cursor: pointer;
    transition: 0.3s all;
    font-weight: bold;
}
.register button:hover{
    background: rgb(75, 172, 75);
}
a{
    text-decoration: none;
    font-weight: bold;
    color: rgb(75, 172, 75);
}

</style>