const escola = "Fatec";

// charAt mostra letra no indice
console.log(escola.charAt(0));

// charCodeAt tabela ascii
console.log(escola.charCodeAt(0));

// indexOf posição do indece da letra
console.log(escola.indexOf("t"));

// substring exibe o valor pra frente ou entre valores
console.log(escola.substring(2));
console.log(escola.substring(1, 4));

// concat ou + para concatenar strings
console.log(Number("1") + 1);
console.log("olá ".concat(escola).concat("!"));
console.log("7" / 2);

// replace subistitui caracter
console.log(escola.replace("c", "k"));

// split exibe em array passando delimitador
console.log("Rafa,Diego,Mel,Brena".split(","));
