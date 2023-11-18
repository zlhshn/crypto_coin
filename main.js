const searchBtn = document.getElementById('search')
const coinList = document.getElementById('coinList')
const searchInput = document.getElementById('searchInput')
const form = document.getElementById('form')

// const nameCoin = document.querySelector('name')
// const symbol = document.querySelector('symbol')
// const priceCoin = document.querySelector('price')
// const img = document.querySelector('img')
// const change = document.querySelector('change')


let allcoins = []

const getCoin = async () => {
    const BASE_URL = 'https://api.coinranking.com/v2/coins';
    try {
        const res = await fetch(BASE_URL)
        if (!res.ok) {
            throw new Error(`Something went wrong:${res.status}`)
        }

        const data = await res.json()
        allcoins = data
        // console.log(data);
        showCoin(data)
    } catch (error) {
        console.error(error);
    }
}



const showCoin = (coin) => {
    console.log(coin.data.coins);
    

    // coinList.innerHTML = ""; // Clear previous search results

     coin.data.coins.forEach((item) => {
        const { name, symbol, price, iconUrl, change,color } = item;

        const listItem = document.createElement('li');
        listItem.innerHTML = `

            <h2>${name}</h2>
            <p style= color:${color}>${symbol}</p>
            <p>${price}</p>
            <i class="fa-solid fa-chart-line"></i>
            <div class="svg-icon" style="background-image: url('${iconUrl}')"></div>
            <p>${change}</p>

        `;

        coinList.appendChild(listItem);
        
    });

   
}



// searchBtn.addEventListener('click', () => {
//     const value = searchInput.value.toLowerCase().trim();
//     console.log(value);

//     if (value) {
//         const filteredCoins = allcoins.data.coins.filter(coin =>
//             coin.name.toLowerCase().includes(value) || coin.symbol.toLowerCase().includes(value)
//         );
//         showCoin(filteredCoins);
//     } else {
//         alert("Lütfen bir kullanıcı ismi giriniz.");
//     }
// });

// getCoin();