<template>
  <Navbar></Navbar>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {Navbar},
  setup(){
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Space+Mono&display=swap');
body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Oswald", sans-serif;
  color:hsl(from rgb(6, 111, 6) h s l)
}

</style>
