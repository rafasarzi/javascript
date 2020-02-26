
//== compara a semelhança dos valore
//=== compara a igualdade dos valores inclusive o tipo
// != compara a diferença dos valores
console.log('1)', '1' == 1)
console.log('2)', '2'=== 2)
console.log('3)', '3'!= 3)
console.log('4)', '3'!= 4)

// comparaçao de maior/menor ou igual < > =
console.log('5)', 3 < 2)
console.log('6)', 3 > 2)
console.log('7)', 3 <= 2)
console.log('8)', 3 >= 2)

const d1 = new Date
const d2 = new Date //false quando alocado na memoria
console.log('9)', d1 === d2)
console.log('10)', d1 == d2)
// true com getTime pq os valores dentro da new sao iguais
console.log('11)', d1.getTime() == d2.getTime()) 

console.log('12)', undefined == null)//sao iguais
console.log('13)', undefined === null)//nao sao extamente iguais