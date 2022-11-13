const mainUsuarios = document.getElementById("mainUsuarios")

async function getUsuarios(quantidade = 4) {
  const requisicao = await fetch("https://randomuser.me/api/?results=" + quantidade)
  const body = await requisicao.json()
  montaHtmlUsuarios(body)
}

const montaHtmlUsuarios = (body) => {
  mainUsuarios.innerHTML = ""
  body.results.forEach(usuario => {
    mainUsuarios.appendChild(montaLiUsuario(usuario));
  });
}

const montaLiUsuario = (usuario) => {
  const liUsuario = document.createElement("li")
  liUsuario.style = "background: aqua;"

  const nome = document.createElement("h2")
  const {title, first, last} = usuario.name
  nome.innerText = title + " "
  nome.innerText += first + " "
  nome.innerText += last
  liUsuario.appendChild(nome)

  const foto = document.createElement("img")
  foto.src = usuario.picture.large
  liUsuario.appendChild(foto)

  const endereco = document.createElement("p")
  const {street, city, state, country} = usuario.location
  endereco.innerText = street.name + " "
  endereco.innerText += city + " "
  endereco.innerText += state + " "
  endereco.innerText += country
  liUsuario.appendChild(endereco)
  return liUsuario
}

getUsuarios(3)

const botaoQuantidadeUsuarios = document.getElementById("quantidadeUsuarios")
botaoQuantidadeUsuarios.addEventListener('change', (event) => getUsuarios(event.target.value))