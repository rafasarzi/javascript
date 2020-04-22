function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function main(){
    // capturar elementos
    let texto_pergunta = document.getElementById("texto_pergunta")

    let pergunta_div = document.getElementById("pergunta_div")
    let botao_inicio = document.getElementById("botao_inicio")

    let input_resposta = document.getElementById("resposta")
    let botao_enviar = document.getElementById("botao_enviar")

    let numero_perguntas = 0
    let score = 0

    let conta

    // aparecer conteudo (pergunta) no click
    botao_inicio.addEventListener("click", ()=>{
        pergunta_div.style.display = "block"
        numero_perguntas += 1
    })

    conta = funcaoConta()        
    texto_pergunta.innerText = conta[0]

    // responsavel por enviar resposta e checar resultado
    botao_enviar.addEventListener("click", ()=>{
        numero_perguntas += 1
        if(input_resposta.value == conta[1]) {
            alert("acertou")
            score += 10
        } else {
            alert("errou")
        }

        if(numero_perguntas <= 10){
            conta = funcaoConta()        
            texto_pergunta.innerText = conta[0]
        } else {
            alert("terminou")
        }

        console.log(score)
    })
}

main()

function funcaoConta(){
    let x = randomInt(1,10)
    let y = randomInt(1,10)
    let resultado = x*y 

    let valores = [`${x}*${y}=`, resultado]

    return valores
}