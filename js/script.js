// Declarando um array de frutas

// //Declarando um array de frutas:
// let frutas = [ "Banana", "Limão","Goiaba","Melancia","Uva"];
// const saidaDoMap = frutas.map( (f)=>(f));
// console.log(saidaDoMap);

// let frutas = [ "Banana", "Limão","Goiaba","Melancia","Uva"];

// // ctrl + ; é um atalho para comentar partes selecionadas do código
// // const arrayObjFrutas = frutas.map( (f)=>(f));


// // Cridando um array de objetos com o map
// // além de estarmos criando este novo array, estamos dando atributos aos objetos
// const arrayObjFrutas = frutas.map( (fruta,indice)=>{


//     return {"id":(indice+1),"nome":fruta}
// });

// const arrayObjFrutasImpares = frutas.map( (fruta,indice)=>{

//     const frutaImpar = arrayObjFrutas.find((f)=> f.id % 2!= 0);

//     return frutaImpar;
// });

// // console.log(arrayObjFrutasImpares);

// const arrayObjFrutasPares = arrayObjFrutas.filter( (fruta)=>(fruta.id % 2 != 0));

// console.log(arrayObjFrutasPares);

//Declarando um array de frutas:
// let frutas = ["Banana", "Limão", "Goiaba", "Melancia", "Uva"];

// //Declarando um array de preços de frutas:
// let precos = [8.90, 12.88, 20.34, 33.40, 15.40];

// const frutasPrecificadas = frutas.map((f, indice) => {

//     const preco = precos.find((p, i) =>  ` ${p == i}  + ${i == indice}`)

//     console.log(preco);


// });

const alunos = [
    {"id":1 ,"nome":"nathan"},
    {"id":2 ,"nome":"Julio"},
    {"id":3 ,"nome": "Gustavo"}
];


const notas = [
    {"id":1 ,"nota":6},
    {"id":2 ,"nota":5},
    {"id":3 ,"nota":8}
];

const alunoComNota = alunos.map((aluno)=>{

    const nota = notas.find((nota) => nota.id = aluno.id );
    return {...aluno, nota:nota ? nota.nota : null};

});

console.log(alunoComNota);