<template>
  <nav>
    <img src="../assets/image-1.png" alt="">
    <div>
        <router-link to="/">ГЛАВНАЯ</router-link>
        <router-link to="/convert">КОНВЕРТАЦИЯ</router-link>
    </div>
    <DropdownMenu/>
  </nav>
  <router-view/>
</template>

<script>
import DropdownMenu from './UI elements/DropdownMenu.vue';

export default {
components:{DropdownMenu},


}
</script>

<style scoped>
    nav{
        position: relative;
        display: flex;
        justify-content: space-between;
        top: 0;
        height: 100px;
        width: 100%;
        background-color:hsl(from rgb(150, 233, 150) h s l)
    }
    nav div{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    nav div a{
        text-decoration: none;
        color:hsl(from rgb(6, 111, 6) h s l)
    }
    nav div a.router-link-exact-active {
        color: hsl(250, 47%, 49%);
        text-decoration: underline;
  
    }
    img{
        width: 100px;
        height: auto;
        margin-left: 50px;
    }
</style>