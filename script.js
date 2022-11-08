let botao1 = document.querySelector("#btn1")
let botao2 = document.querySelector("#btn2")
let botao3 = document.querySelector("#btn3")
let pause = document.querySelector("#pausar")
let parar = document.querySelector("#parar")
let iniciar = document.querySelector("#iniciar")

let inicial = 0
let time = 0
botao1.addEventListener("click" , function(){
    exibirDiv("divCronometro")
})
pause.addEventListener("click" , ()=>{
    clearInterval(time)
})

parar.addEventListener("click" , ()=>{
    clearInterval(time)
    time = 00
    inicial = 00
    document.querySelector("#txtnum").innerHTML = inicial  + "0"
})

iniciar.addEventListener("click" , ()=>{
        
        time = setInterval(function(){
            inicial++
            inicial = (inicial<10)?'0'+inicial :inicial

            document.querySelector("#txtnum").innerHTML = inicial  
            
        },100)
})


let contImagem = 1
botao2.addEventListener("click" , function(){
    exibirDiv("divSlide")
})
document.querySelector("#ant").addEventListener("click" , function(){
    if (contImagem>1)
    contImagem--
    else
    contImagem=5
    exibirImage()
})

document.querySelector("#prox").addEventListener("click" , function(){
    if (contImagem<5)
    contImagem++
    else
    contImagem=1
    exibirImage()
})

function exibirImage(){
    let img = `img${contImagem}.jpg`
    document.querySelector("#imagens").src = `imagens/${img}`
}

botao3.addEventListener("click" , function(){
    exibirDiv("divTabuada")
    document.getElementById("btntab").addEventListener("click" , ()=>{
        
    let numero = Number(document.getElementById("txtNumTab").value)
    for(let cont = 1 ; cont <= 10 ; cont++){
        document.querySelector("#restab").innerHTML += (`${numero} x ${cont} = ${numero*cont}<br>`)
    }
})
    document.getElementById("btnLimpar").addEventListener("click" , ()=>{
        document.querySelector("#restab").innerHTML = ""
    })
})

// Busca a div 

function exibirDiv(div){
    let tagdiv = document.querySelectorAll("div")
    for(let i=0 ; i<tagdiv.length ; i++){
        if(tagdiv[i].id.indexOf("div") <= 0){
            if(tagdiv[i].id == div){
                tagdiv[i].style.display = "block"
            }else{
                tagdiv[i].style.display = "none"
            }
        }
    }
}
