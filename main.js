const searchBtn = document.getElementById('search');
const coinList = document.getElementById('coinList');
const searchInput = document.getElementById('searchInput');
const form = document.getElementById('form');

// let allcoins = []
// console.log(allcoins);


const getCoin = async () => {

    coinList.innerHTML = '';
    const BASE_URL = 'https://api.coinranking.com/v2/coins';
        const res = await fetch(BASE_URL);

    try {
        
        if (res.ok) {
            const BASE_URL = 'https://api.coinranking.com/v2/coins';
        const res = await fetch(BASE_URL);

            const veri = await res.json();
            console.log(veri);
            allcoins = veri.data.coins
            console.log(allcoins);
            showCoin(veri)
          
         
        }else if(!res.ok){
            throw new Error(`Something went wrong:${res.status}`);
        }
    } catch (error) {
        console.log(error);
    }
};



getCoin()

const showCoin = (coin) => {

  console.log(coin);
 

    const { name, symbol, price, iconUrl, change, color } = coin


    coinList.innerHTML += `
        <li class="coinClass">
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

    const div = document.querySelector('.change');

    if (change) {
        change >= 0 ? div.classList.add('green') : div.classList.add('red');
    }

 
       

};


window.addEventListener('click',()=>{

    getCoin()
})



// searchBtn.addEventListener('click',(e)=>{
//     e.preventDefault()

//     const searchTerm = searchInput.value.trim().toLowerCase();

//     if (searchTerm) {
//         // Filter coins based on the exact match of the name
//         const filteredCoins = allcoins.filter(coin => coin.name.toLowerCase() == searchTerm);
//         console.log(filteredCoins);
//        showCoin(filteredCoins)
//        searchInput.innerText =''
//     } else {
//         alert('Please enter a value.');
//     }

// })


