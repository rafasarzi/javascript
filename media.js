// Funcao calcula media alunos
const media = (nota1, nota2, nota3, nota4) => {
  const total = nota1 + nota2 + nota3 + nota4;
  const media = total / 4;
  console.log("Média:", media);

  if (media > 5) {
    console.log("Aprovado...");
  } else {
    console.log("Reprovado...");
  }
};
 
media(2, 5, 4, 3);
