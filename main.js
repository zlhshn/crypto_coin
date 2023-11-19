const searchBtn = document.getElementById('search');
const coinList = document.getElementById('coinList');
const searchInput = document.getElementById('searchInput');
const form = document.getElementById('form');

// let allcoins = []
// console.log(allcoins);

const getCoin = async () => {

    coinList.innerHTML = '';

    try {
        const BASE_URL = 'https://api.coinranking.com/v2/coins';
        const res = await fetch(BASE_URL);
        if (res.ok) {

            const data = await res.json();
            console.log(data);
            allcoins = data
          
    
            showCoin(data.data.coins);
           
        }else if(!res.ok){

            throw new Error(`Something went wrong:${res.status}`);
        }

      

        
    } catch (error) {
        console.log(error);
    }
};


const showCoin = (coins) => {



  coins.forEach((item) => {
        const { name, symbol, price, iconUrl, change, color } = item;

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
    });

   
};



searchBtn.addEventListener('click', ()=>{

    const value = searchInput.value.toLowerCase().trim();
    console.log(value);

    if (value) {
        // const filteredCoins = allcoins.filter((coin) =>
        //     coin.name.toLowerCase().includes(value) || coin.symbol.toLowerCase().includes(value)
        // );
        showCoin();
    } else {
        alert('Lütfen bir kullanıcı ismi giriniz.');
    }
});

// const search = () => {
//     const value = searchInput.value.toLowerCase().trim();
//     console.log(value);

//     if (value) {
//         // const filteredCoins = allcoins.filter((coin) =>
//         //     coin.name.toLowerCase().includes(value) || coin.symbol.toLowerCase().includes(value)
//         // );
//         showCoin();
//     } else {
//         alert('Lütfen bir kullanıcı ismi giriniz.');
//     }
// };





