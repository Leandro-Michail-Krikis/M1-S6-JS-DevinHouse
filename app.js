const requisicao = fetch("https://api.coincap.io/v2/assets/bitcoin")
requisicao
  .then(resposta =>{
    return resposta.json()
  })
  .then((data) => {
    return data.data
  })
  .then(({symbol, priceUsd}) => {
    console.log(`O preço do Bitcoin ${symbol} em dólares hoje é $ ${priceUsd}`);
  })