const nome = "Diego";
const frase = "Ola " + nome + "!";

const template = `Ola ${nome}!`;

const template2 = `
    Ola
        ${nome}
                !
`;
console.log(template);
console.log(nome);

console.log(`2 + 2 = ${2 + 2}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);
