<template>
  <form action="">
    <select @change="handleChange" v-model="selectedCurrency" id="">
      <option value="RUB">RUB</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
  </select>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  data(){
    return {
      selectedCurrency: ref('RUB')
    }
  },
  methods:{
    handleChange(){
      localStorage.setItem('selectedCurrency', this.selectedCurrency )
    }
  },
}
</script>

<style scoped>
  form{
    display: inline-block;
    margin-right: 20px;
  }
</style>