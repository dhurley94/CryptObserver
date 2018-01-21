const API = require('./exchangeApi');

const allCoins = API.top25();

console.log(allCoins)

// setInterval(updateCoin() => {
//     API.top25.forEach((coin) => {
//         this.updateCoin(coin._id, coin.name, coin.symbol, coin.usd_price, coin.sat_price, coin.ranking);
//     });
// }
