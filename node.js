// variavel local
let a = 3
//variavel em escopo global
global.b = 123
this.c = 456

console.log(a)
console.log(global.b)
console.log(this.c)
//this = module.exports
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

abc = 123 //nao colocar variavel em escopo global
console.log(global.abc)