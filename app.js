criarCartao  (categoria,pergunta,resposta ) ( 

  )
criarCartao( categoria,pergunta,resposta)(
  let container = document.getElementById('container') 
  let cartao = document.createElement('article')
cartao.className = 'cartao'
)
cartao.innerHTML =
  <div class="cartao_conteudo">
  <h3>${categoria}</p>
<div class="cartao_conteudo_pergunta">
  <p>${pergunta}</p>
  </div>
<div class= "cartao_conteudo_resposta">
  <p>${resposta}</p>
  </div>
  </div>
let respostaEstaVisivel= false 
fuction viracartao() {
respostaEstaVisivel=IrespostaEstaVisivel
  cartao.classList.toogle('active', respostaEstaVisivel)
}
cartao.addEventlistene('click', viracartao)
container.appenChild(cartao)
