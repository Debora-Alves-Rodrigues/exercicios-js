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
  const nomes = alunos.map((aluno) => aluno.nome);
  return nomes;
}

// Exercício 4 — buscarAluno
export function buscarAluno(alunos, nome) {
  const nom = alunos.find((aluno) => aluno.nome === nome);
  return nom;
}

// Exercício 5 — calcularMedia
export function calcularMedia(notas) {
  const notas = alunos.map((aluno) => aluno.nota);
  let total = 0; 
  let media = 0;
  for (let i = 0; i < notas.length; i++) {
    total = total + notas[i];
  }
  media = total/notas.length;
  return media;
}
