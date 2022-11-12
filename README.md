# M1-S6-JS-DevinHouse

Altere as funções abaixo usando **async-await** para retorno e tratamento de promises:

```javascript
function obterClienteNoBancoDeDados(idCliente) {
    return new Promise( (resolve, reject) => {
            const cliente = { nome: 'bruce wayne', id: idCliente };
            resolve(cliente);
    });
}

function processar() {
    obterClienteNoBancoDeDados(7)
        .then(cliente => console.log(cliente));
}

processar();
```