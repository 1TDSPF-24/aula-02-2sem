/* AULA 2 - MANIPULAÇÃO DE ARRAYS */


/* MAP: percorre por todos os itens de uma lista existente e cria uma nova.
diferença do FOR IT (o MAP faz uma especie de retorno em relação ao array percorrido)*/

//ex1)
// let frutas = ["Banana", "Limão", "Goiaba", "Melancia", "Uva"];

// const saidaDoMap = frutas.map((fruta)=>(fruta)); /* MAP É UMA FUNÇÃO DO ARRAY (FUNÇÃO ANONIMA DE CALLBACK COMO PARÂMETRO) */

// console.log(saidaDoMap);
//_____________________________________________________________________
//ex 2)
// let frutas = ["Banana", "Limão", "Goiaba", "Melancia", "Uva"];

// const arrayObjFrutas = frutas.map((f)=>{
//     return {}
// }); 
//_____________________________________________________________________
// console.log(arrayObjFrutas);

//ex 3) ARRAY DE OBJETOS
// let frutas = ["Banana", "Limão", "Goiaba", "Melancia", "Uva"];

// const arrayObjFrutas = frutas.map((fruta,indice)=>{
//     return {"id": (indice+1), "nome":fruta} //em tabela o indice inicia no 1
// }); 

// console.log(arrayObjFrutas); // RETORNO: objetos separados contendo cada o ID e o nome
//_____________________________________________________________________
//ex 4) MAP + FIND (criar condição com FIND)
// let frutas = ["Banana", "Limão", "Goiaba", "Melancia", "Uva"];

// const arrayObjFrutas = frutas.map((fruta,indice)=>{
//         return {"id": (indice+1), "nome":fruta};
//     }); 
    
// console.log(arrayObjFrutas);

// const arrayObjFrutasImpares = arrayObjFrutas.map((fruta)=>{

//     const frutaImpar /*objeto*/ = arrayObjFrutas.find((f)=> (f.id === fruta.id && f.id % 2 != 0)); // o MAP retorna undefined mas o resultado abaixo está correto

//     return frutaImpar;
// }); 

// console.log(arrayObjFrutasImpares);

// //UTILIZAR FILTER
// const arrayObjFrutasPares = arrayObjFrutas.filter((fruta)=>(fruta.id % 2 == 0));

// console.log(arrayObjFrutasPares);
//_____________________________________________________________________
// ex 5) MESCLAR DOIS ARRAYS
let frutas = ["Banana", "Limão", "Goiaba", "Melancia", "Uva"];

let precos = [8.90, 12.88, 20.34, 33.40, 15.40];

//usar como base o array de frutas e gerar um novo array com a junção dos dois
const frutasPrecificadas = frutas.map((fruta, indice)=>{

    //criar um "mecanismo de seleção" de objetos com a condição desejada
    //condição: ID das frutas sejam o mesmo que o ID dos preços
    const preco = precos.find((p,i)=> i == indice); //agora temos os indices dos preços

    //montando o objeto
    const objFruta = {"id":(indice+1),"nome":fruta,"preco": preco};
    return objFruta;
});

console.log(frutasPrecificadas);
//_____________________________________________________________________
// ex 6)
//array de objetos
// const alunos = [
//     {"id":1,"nome":"Nathan"},
//     {"id":2,"nome":"Julio"},
//     {"id":3,"nome":"Mariano"}
// ];

// const notas = [
//     {"id":1,"nota":6},
//     {"id":2,"nota":5},
//     {"id":3,"nota":8}
// ];

// const alunoComNotas = alunos.map((aluno)=>{
//     const nota = notas.find(nota=> nota.id === aluno.id);
//     return {...aluno, nota:nota ? nota.nota : null};
// });

// console.log(alunoComNotas);
//_____________________________________________________________________
// utilização do ternário

// let nr1 = 10;
// let nr2 = 5;
// let resultado;

// resultado = nr1 > nr2 ? "É MAIOR" : "É MENOR"
//verificar se o nr1 é maior que o nr2, SE FOR MAIOR ele retorna a String



// MÉTODO REDUCE: utilizado para acumular os valores de um array (da esquerda para a direita) para reduzir em um unico valor
//Reduce trabalha com um valor inicial que damos para ele