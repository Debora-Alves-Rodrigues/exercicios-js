// ========================================
// Aula 06 — Funções e Arrays
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula06
// Não mexa no arquivo index.test.js.

// Exercício 1 — criarSaudacao
export function criarSaudacao(nome) {
  return `Olá, ${nome}!`;
}

// Exercício 2 — filtrarAprovados
export function filtrarAprovados(alunos) {
  const aprovados = alunos.filter((aluno) => aluno.nota >= 60);
  return aprovados;
}

// Exercício 3 — extrairNomes
export function extrairNomes(alunos) {
  const nomes_e_notas = alunos.map((aluno) => ({
    nome: aluno.nome;
    nota: aluno.nota;
  }));
  return console.log(nomes_e_notas);
}

// Exercício 4 — buscarAluno
export function buscarAluno(alunos, nome) {
  // escreva seu código aqui
}

// Exercício 5 — calcularMedia
export function calcularMedia(notas) {
  // escreva seu código aqui
}
