//variaveis
let phrases = ["Sonhos são caminhos construídos pelo coração.",
"Impossível é uma palavra que serve só de enfeite no dicionário.",
"Você é beleza, luz e força.",
"Dias nublados guardam o sol atrás deles.",
"Um dia bonito começa com um barril de esperança e um café de otimismo.",
"Permita que o seu corpo descanse.",
"Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente.",
"Melhor lutar por algo do que viver para nada.",
"Escolher o seu tempo é ganhar tempo.",
"Perder para a razão, sempre é ganhar.",
"Transformando os meus erros em sementes. ",
]


const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


function sorte(){
    randomNumber = Math.round(Math.random() * 10)
    let phrase = document.querySelector(".screen2 p").innerHTML = phrases[randomNumber]
}

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function handleTryClick(event){
    toggleScreen()
}
function handleResetClick(event){
    toggleScreen()
    sorte()
}
function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
 }

 