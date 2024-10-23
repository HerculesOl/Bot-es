let texto = document.querySelector("p")
let titulo = document.querySelector("h1")
let fundo = document.querySelector("body")
let img = document.querySelector("img")

let clickTitulo = 0
let  alterarTitulo = () => {
    let titulo = document.querySelector('h1')
if(clickTitulo == 1){
    titulo.innerText = "Fernando Beira mar é preso"
    clickTitulo =0
}else{
    clickTitulo=1
titulo.innerText = "Fernandinho Beira mar e solto"
}
}
