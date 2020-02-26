const imprimirResutado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}
imprimirResutado(8)
imprimirResutado(6)
imprimirResutado('Epa...')//cuidado resultado errado por nao ser numero

