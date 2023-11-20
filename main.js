const searchBtn = document.getElementById('search');
const coinList = document.getElementById('coinList');
const searchInput = document.getElementById('searchInput');
const form = document.getElementById('form');




const getCoin = async () => {

    coinList.innerHTML  =''

   
    try {
        const BASE_URL = 'https://api.coinranking.com/v2/coins';
        const res = await fetch(BASE_URL);
        const veri = await res.json();
        if (res.ok) {
    console.log(res);

        

         console.log(veri);
         const coins = veri.data.coins
         allcoins = coins
         console.log(allcoins);
        //  showCoin(coins)
    
         
        }else if(!res.ok){
            throw new Error(`Something went wrong:${res.status}`);
        }

        
    } catch (error) {
        console.log(error);
    }


};

getCoin()

let allcoins = []


const showCoin = (coin) => {

  
 coin.forEach((item)=>{

    const { name, symbol, price, iconUrl, change, color } = item



    if (!coinList.innerHTML.includes(name)){
         coinList.innerHTML += `
        <li class="coinClass">
        <i class="fa-solid fa-x"></i>
            <article class='article1'>
                <p class="name">${name}</p>
                <p class="symbol" style="color: ${color}">${symbol}</p>
            </article>
            <p class="price">$ ${price}</p>
            <div class="img svg-icon" style="background-image: url('${iconUrl}')"></div>
            <article class='change'><i class="fa-solid fa-chart-line"></i>
                <p class="change">${change}</p>
            </article>
        </li>`;
    }
   

        const classChange = document.querySelectorAll(".change")

    
        classChange.forEach((n)=>{
            if(n.textContent >= 0){n.classList.add("green")
        }else{
        n.classList.add("red")
        }
 })



 
})

}



window.addEventListener('load',()=>{

    searchInput.innerText =''
    getCoin()
})



form.addEventListener('submit',(e)=>{
    // coinList.innerHTML  =''
    e.preventDefault()

    if(!searchInput.value){

        alert('please enter a coin name')
    } else{
 const value = searchInput.value

        const filteredCoins = allcoins.filter(coin => coin.name.toLowerCase().includes(value.toLowerCase()));
        console.log(filteredCoins);
       showCoin(filteredCoins)

    }

   

       searchInput.value =''
  

})



const deleteİcon = document.querySelector('.fa-x')

coinList.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-x')) {
        e.target.closest('.coinClass').remove();
    }
});





// searchBtn.addEventListener('click',()=>{

//     const value = searchInput.value

//     const filteredCoins = allcoins.filter(coin => coin.name.toLowerCase().includes(value.toLowerCase()));
//     console.log(filteredCoins);
//    showCoin(filteredCoins)

//    searchInput.innerText =''

// })