const imprimirResultado = function (nota){
    //é uma selecao multipla, seleciona valores e tipos
    //nao de true e false
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            //break sai do bloco associado ao switch, 
            //sem break sai executando todos a baixo
            //break usado como padrao do switch
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida')

        }

}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6)
imprimirResultado(2)
imprimirResultado(0)
imprimirResultado(-2.3)
