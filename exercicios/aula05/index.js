// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

// Exercício 1 — classificarIdade
export function classificarIdade(idade) {
  if(idade < 12){
    return "criança";
  } else if (idade <= 17){
    return "adolescente";
  } else {
    return "adulto";
  }
}

// Exercício 2 — calcularDesconto
export function calcularDesconto(preco, percentual) {
  console.log(preco);
  console.log(percentual);
  return (preco - ((preco * percentual)/100));
}

// Exercício 3 — verificarAprovacao
export function verificarAprovacao(nota) {
  if(nota >= 60){
    return "aprovado";
  } else if (nota >= 40){
     return "recuperação";
  } else {
    return "reprovado";
  }
}

// Exercício 4 — somarPares
export function somarPares(numeros) {
  for (const numero of numeros) {
    console.log(numero);
    for (let i = 0; i < numero.length; i++ ) {
      if(numero[i] % 2 === 0){
        let sum = 0;
        return sum += numeros[i];
      }
    }
  }
}

// Exercício 5 — contarLetra
export function contarLetra(texto, letra) {
  // escreva seu código aqui
}
