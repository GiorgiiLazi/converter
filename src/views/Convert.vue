<template>
  <div class="container">
    <form action="">
     
      <div>
        <select @change="handleInputChange" id="convertFrom" v-model="firstSelect">
          <option value="RUB">RUB</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
      </select>
      <input @change="handleInputChange" @keyup="handleInputChange" type="number" name="" id="" v-model="firstInput">
      <br>
      <br>
      </div>
      
      <div>
        <select @change="handleInputChange" id="convertTo" v-model="secondSelect">
          <option value="RUB">RUB</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
      </select>
      <input disabled type="number" v-model="secondInput" name="" id="">
      </div>
        
    </form>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  
 setup(){
    let firstInput = ref(1)
    let secondInput = ref()
    let firstSelect = ref('RUB')
    let secondSelect = ref('USD')
    let exchangeRate = ref([])

    onMounted(()=>{
      handleInputChange()
    })

    const handleInputChange = async() =>{
        // fetching data
        exchangeRate = []
        let responseEur = await fetch('https://open.er-api.com/v6/latest/EUR')
        let fetchedDataEur = await responseEur.json()

        let responseUsd = await fetch('https://open.er-api.com/v6/latest/USD')
        let fetchedDataUsd = await responseUsd.json()

        let responseRub = await fetch('https://open.er-api.com/v6/latest/RUB')
        let fetchedDataRub = await responseRub.json()

        // saving data to object
        let exchange = {
          euroRub: fetchedDataEur.rates.RUB,
          euroUsd: fetchedDataEur.rates.USD,
          rubEuro: fetchedDataRub.rates.EUR,
          rubUsd: fetchedDataRub.rates.USD,
          usdEuro: fetchedDataUsd.rates.EUR,
          usdRub: fetchedDataUsd.rates.RUB
        }

        // pushing data to a variable
        exchangeRate.push(exchange)

        // console.log(exchangeRate[0].rubUsd)
        // console.log(secondInput.value)

        // conditionals

        if(firstInput.value < 0){
          alert('You cant have negative values')
          firstInput.value = 0
        }
        else if(firstSelect.value === 'RUB' && secondSelect.value === 'USD'){
          secondInput.value = firstInput.value * exchangeRate[0].rubUsd
        }
        else if(firstSelect.value === 'RUB' && secondSelect.value === 'EUR'){
          secondInput.value = firstInput.value * exchangeRate[0].rubEuro
        }
        else if(firstSelect.value === 'USD' && secondSelect.value === 'RUB'){
          secondInput.value = firstInput.value * exchangeRate[0].usdRub
        }
        else if(firstSelect.value === 'USD' && secondSelect.value === 'EUR'){
          secondInput.value = firstInput.value * exchangeRate[0].usdEuro
        }
        else if(firstSelect.value === 'EUR' && secondSelect.value === 'RUB'){
          secondInput.value = firstInput.value * exchangeRate[0].euroRub
        }
        else if(firstSelect.value === 'EUR' && secondSelect.value === 'USD'){
          secondInput.value = firstInput.value * exchangeRate[0].euroUsd
        }

    }

    

    return {firstInput, secondInput, firstSelect, secondSelect, handleInputChange}


 }
}
</script>

<style scoped>
  .container {
        display: flex;
        align-content: center;
       justify-content: center;
  }
  .container form {
        margin-top: 50px;
        display: flex;
        height: 300px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
        background-color:hsl(from rgb(150, 233, 150) h s l);
        border: 1px solid black;
        border-radius: 40px;
  }
  form{
    display: inline-block;
    margin-right: 10px;
  }
  select, input{
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    }
  select{
    background: hsla(0, 25%, 74%, 0.785) ;
    color: white;
    margin-right: 20px;
    padding: 10px 20px;
  }
  *:disabled {
    background: white;
  }
</style>

