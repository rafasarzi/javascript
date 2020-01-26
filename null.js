const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined;
console.log(produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null; //sem preco
console.log(!!produto.preco);
console.log(produto);
