# M1-S6-JS-DevinHouse

Crie uma função chamada **sleep**, que recebe como argumento um  valor qualquer.

Quando chamada, essa função precisa retornar, após 3 segundos (setTimeout), uma Promise resolvida com o valor que foi passado como argumento.

Ex.:

````
function sleep ( valor ) {
  return new Promise ( (res, rej) => { 
     setTimeout( ... )
  })
}
````

Chame esta função e confirme o funcionamento dela (lembre-se que o valor do tempo de espera é aproximado!)