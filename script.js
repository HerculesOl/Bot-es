let texto = document.querySelector("p")
let titulo = document.querySelector("h1")
let fundo = document.querySelector("body")
let img = document.querySelector("img")

let tituloAlter = 0
let  alterarTitulo = () => {
    let titulo = document.querySelector('h1')
if(tituloAlter == 1){
    titulo.innerText = "Fernando Beira mar é preso"
    tituloAlter =0
}else{
    tituloAlter=1
titulo.innerText = "Fernandinho Beira mar e solto"
}
}
