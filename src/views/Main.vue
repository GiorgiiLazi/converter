<template>
  <div v-if="currentCurrency === 'RUB'" class="container">
    <form action="">
        <div>
            <h1>1 USD = <span>&#8381;</span> {{ usdRub}} RUB</h1>
            <h1>1 EUR = <span>&#8381;</span> {{ euroRub}} RUB</h1>
        </div>
    </form>
  </div>
  <div v-if="currentCurrency === 'USD'" class="container">
    <form action="">
        <div>
            <h1>1 RUB = <span>&#36;</span> {{ rubUsd}} USD</h1>
            <h1>1 EUR = <span>&#36;</span> {{ euroUsd}} USD</h1>
        </div>
    </form>
  </div>
  <div v-if="currentCurrency === 'EUR'" class="container">
    <form action="">
        <div>
            <h1>1 USD = <span>&#8364;</span> {{ usdEuro}} EUR</h1>
            <h1>1 RUB = <span>&#8364;</span> {{ rubEuro}} EUR</h1>
        </div>
    </form>
  </div>
  
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
 setup(){
    let currentCurrency = ref('USD')

    setInterval(() =>{
        if(localStorage.getItem('selectedCurrency') === 'RUB' ){
        currentCurrency.value = 'RUB'
    }
    else if(localStorage.getItem('selectedCurrency') === 'USD' ){
        currentCurrency.value = 'USD'
    }
    else if(localStorage.getItem('selectedCurrency') === 'EUR' ){
        currentCurrency.value = 'EUR'
    } 
    },1000)
    
    // let currencies = ref(['RUB', 'USD', "EUR"])

    let usdRub = ref([])
    let euroRub = ref([])

    let rubUsd = ref([])
    let euroUsd = ref([])

    let usdEuro = ref([])
    let rubEuro = ref([])
    
    const fetchingEuro = async () => {
        try{
            let response = await fetch('https://open.er-api.com/v6/latest/EUR')
            let fetchedData = await response.json()
            // euroRub.value.push(fetchedData)
            // euroUsd.value.push(fetchedData)

            euroRub.value = await fetchedData.rates.RUB
            euroUsd.value =  await fetchedData.rates.USD 
            // console.log(euroRub.value[0].rates.RUBs)
        }
        catch(error){
            console.log(error)
        }
    }
    const fetchingRub = async () => {
        try{
            let response = await fetch('https://open.er-api.com/v6/latest/RUB')
            let fetchedData = await response.json()
            // euroRub.value.push(fetchedData)
            // usdRub.value.push(fetchedData)

            rubEuro.value = await fetchedData.rates.EUR
            rubUsd.value = await fetchedData.rates.USD
            // console.log(euroRub.value[0].rates.RUB)
        }
        catch(error){
            console.log(error)
        }
    }
    const fetchingUSD = async () => {
        try{
            let response = await fetch('https://open.er-api.com/v6/latest/USD')
            let fetchedData = await response.json()
            // usdEuro.value.push(fetchedData)
            // usdRub.value.push(fetchedData)

            usdEuro.value = await fetchedData.rates.EUR
            usdRub.value = await fetchedData.rates.RUB
            // console.log(euroRub.value[0].rates.RUB)
        }
        catch(error){
            console.log(error)
        }
    }
    
    

    onMounted (() =>{
        fetchingEuro(),
        fetchingRub(),
        fetchingUSD()
    })
    return { usdRub,
            euroRub, 
            currentCurrency,
            rubUsd,
            euroUsd,
            usdEuro, 
            rubEuro,  
            fetchingEuro,
            fetchingUSD,
            fetchingRub}
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
    .container form div{
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        color:hsl(213, 84%, 46%)
        
    }
    h1{
        margin: 20px;
    }
</style>