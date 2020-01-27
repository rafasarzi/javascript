Number.prototype.entre = function (inicio,fim){
    return this >= inicio && this <=fim
}
const media = function(nota1, nota2, nota3, nota4){
    const total = nota1 + nota2 + nota3 + nota4;
    const mediatotal = total / 4;
    console.log("Média:",mediatotal)


if (mediatotal.entre(9, 10)){
    console.log('Aprovado com honra')
}else if(mediatotal.entre(5, 8.99)){
    console.log('Aprovado')
}else if (mediatotal.entre(0, 4.99)){
    console.log('Reprovado')
}else{
    console.log('Nota invalida')
}
}
media(4,5,6,7)