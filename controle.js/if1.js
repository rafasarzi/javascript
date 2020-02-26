//so aparecer se for => e nao vai mostrar se for menor
function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado' + nota)
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6.7)

//nao vai imprimir false e vai imprimir true
function seForVerdadeFalo(valor){
    if(valor){
        console.log('é verdade...' + valor)
    }
}

seForVerdadeFalo()
seForVerdadeFalo(null)
seForVerdadeFalo(undefined)
seForVerdadeFalo(NaN)
seForVerdadeFalo('')
seForVerdadeFalo(0)
seForVerdadeFalo(-1)
seForVerdadeFalo(' ')
seForVerdadeFalo('?')
seForVerdadeFalo([])
seForVerdadeFalo([1,2])
seForVerdadeFalo({})