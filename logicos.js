function compras(trabalho1, trabalho2){
const comprarSorvete = trabalho1 || trabalho2
const comprarTv50 = trabalho1 && trabalho2
const comprarTv32 = trabalho1 != trabalho2
const ficarSaudavel = !comprarSorvete

return {comprarSorvete, comprarTv50, comprarTv32, ficarSaudavel}
}
console.log(compras(true,true))//os 2 v = v
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

// e tem que ser igual pra ser vdd
// um ou outro pra ser vdd
// ou exculsivo tem que ser diferente pra dar vdd