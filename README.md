# M1-S6-JS-DevinHouse

Existe a API **'Random User Generator'**, que gera usuários fakes para fins de testes e protótipos.
Vamos usá-la para praticar e consumir APIs com promises.

A URL da API é esta abaixo, onde o argumento 'results' representa a quantidade de resultados que queremos retornar:
https://randomuser.me/api/?results=4

Verifique a documentação e exemplo de retorno em: 
https://randomuser.me/documentation#howto, ou 
faça uma chamada para a API (no navegador ou console) para verificar um exemplo de resultado.

Com base no json de retorno, monte uma página web com layout semelhante ao **anexo**, contendo dados de usuários de sistema com 
foto, título, nome, sobrenome, e-mail e endereço completo.
O layout (css) é livre, desde que apresente as informações solicitadas.

**Dicas**:
a) Perceba que os resultados ficam dentro do campo _'results'_ do json de retorno;
b) Para a foto, use a versão grande do campo _'picture'_: 'large' (grande);
c) Para o nome, use os campos de _'name'_: 'title' (título), 'first' (nome), 'last' (sobrenome);
d) Para o endereço, use os campos de _'location'_: 'street' (rua), 'city' (cidade), 'state' (estado), 'country' (país);
e) Como é uma chamada remota para o serviço, o resultado pode demorar alguns segundos para retornar.

**extra**:
Adicione um campo para que o usuário selecione a quantidade de itens que deseja exibir