<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/AddRestaurant">Add Restaurant</router-link>
    <a href="" @click="logOut">Log Out</a>
</div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logOut(){
            console.log("logged out")
            localStorage.clear()
            this.$router.push({name:'Login'})
        }
    }

}
</script>

<style scoped>
.nav{
    background: rgb(13, 37, 37);
    overflow: hidden;
}
.nav a{
    float: left;
    color:  rgb(255, 255, 255);
    text-decoration: none;
    text-align: center;
    padding: 15px 20px;
    font-weight: bold;
}
.nav a:hover{
    background: silver;
    color: black;
}
.nav a:last-child{
    float: right;
    margin-right: 30px;
}
.nav a:first-child{
    margin-left: 30px;
}
</style>