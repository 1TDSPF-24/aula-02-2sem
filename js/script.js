
// MAP

// Declarando um array de frutas:
// let frutas = ["Banana", "Limao", "Goiaba", "Melancia", "Uva"];
// const saidaDoMap = frutas.map( (fruta ) => (fruta));
// console.log(saidaDoMap);


// let frutas = ["Banana", "Limao", "Goiaba", "Melancia", "Uva"];
// const arrayObjFrutas = frutas.map( (fruta, indice) => { 
//      return {"id":(indice + 1),
//              "nome":fruta};
//  });

//  console.log(arrayObjFrutas);


// // FIND

// const arrayObjFrutasImpares = arrayObjFrutas.map( (fruta) => {    
//     const frutaImpar = arrayObjFrutas.find((f) =>f.id === fruta.id && f.id % 2 != 0);

//     return frutaImpar;
// });

// console.log(arrayObjFrutasImpares);

// // FILTER
// const arrayObjFrutasPares = arrayObjFrutas.filter( (fruta)=> (fruta.id % 2 == 0)); 

// console.log(arrayObjFrutasPares);


// EX-2
// let frutas = ["Banana", "Limao", "Goiaba", "Melancia", "Uva"];

// //Array de precos de frutas:
// let precos = [8.90, 12.88, 20.34, 33.40, 15.40];

// const frutasPrecificadas = frutas.map((fruta,indice)=>{
    
//     //Mecansimo de selecao de objetos com a condicao desejada
//     const preco = precos.find((p,i) => i == indice )

//     //Montando um objeto
//     const objFruta = {
//         "ID":(indice + 1),
//         "Nome":fruta,
//         "Preco":preco 
//     }
//     return objFruta
// });
// console.log(frutasPrecificadas);


// EX-3
// const alunos = [
//     {"id":1, "nome":"Nathan"},
//     {"id":2, "nome":"Julio"},
//     {"id":3, "nome":"Mariano"}
// ];

// const notas = [
//     {"id":1, "nota":6},
//     {"id":2, "nota":5},
//     {"id":3, "nota":8}
// ];

// const alunoComNotas = alunos.map((aluno)=>{
//     const nota = notas.find(nota => nota.id === aluno.id);

//     return {...aluno, nota:nota ? nota.nota : null}
// });

// console.log(alunoComNotas);
