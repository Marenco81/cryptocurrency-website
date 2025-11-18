let btcPrice = document.getElementById("bitcoin");
let ethPrice = document.getElementById("ethereum");
let dgcPrice = document.getElementById("dogecoin");



var settings = {
    "async": true,
    "scrossDomain": true,
    "url": 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin%2Cethereum%2Cdogecoin&names=Bitcoin%2CEthereum%2CDogecoin&symbols=btc%2Ceth%2Cdgc',
    "method": "GET",
    "headers": {
        'x-cg-demo-api-key': 'CG-zJH6LoBxXU4o7tZt5itZf2kk'
    }
}
$.ajax(settings).done(function(response){
    
    btcPrice.innerHTML = response.bitcoin.usd;
    ethPrice.innerHTML = response.ethereum.usd;
    dgcPrice.innerHTML = response.dogecoin.usd;

})
