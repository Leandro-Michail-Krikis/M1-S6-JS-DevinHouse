const requisicao = fetch("https://api.agify.io/?country_id=BR&name=leandro")
requisicao
  .then(resposta =>{
    return resposta.json()
  })
  .then(body => {
    console.log(body);
  })