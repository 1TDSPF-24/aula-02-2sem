

// //Declarando um array de frutas:
// let frutas = [ "Banana", "Limão","Goiaba","Melancia","Uva"];
// const saidaDoMap = frutas.map( (f)=>(f));
// console.log(saidaDoMap);

// let frutas = [ "Banana", "Limão","Goiaba","Melancia","Uva"];

// const arrayObjFrutas = frutas.map( (fruta,indice)=>{
//     return {"id":(indice+1),"nome":fruta};
// });

// console.log(arrayObjFrutas);

// const arrayObjFrutasImpares = arrayObjFrutas.map((fruta)=>{
//     const frutaImpar = arrayObjFrutas.find((f)=> (f.id === fruta.id && f.id % 2 != 0));
//     return frutaImpar;
// });

// console.log(arrayObjFrutasImpares);

// const arrayObjFrutasPares = arrayObjFrutas.filter( (fruta)=>(fruta.id % 2 == 0));
// console.log(arrayObjFrutasPares);


// //Declarando um array de frutas:
// let frutas = [ "Banana", "Limão","Goiaba","Melancia","Uva"];

// //Declarando um array de preços de frutas:
// let precos = [ 8.90, 12.88,20.34,33.40,15.40];

// const frutasPrecificadas = frutas.map((fruta,indice)=>{

//     //Mecanismo de seleção de objetos com a condição desejada;
//     const preco = precos.find((p,i)=> i == indice);
    
//     //Montando o objeto
//     const objFruta = {"id":(indice+1),"nome":fruta,"preco":preco}
//     return objFruta;
// });

// console.log(frutasPrecificadas);




// const alunos = [
//     {"id":1,"nome":"Nathan"},
//     {"id":2,"nome":"Júlio"},
//     {"id":3,"nome":"Mariano"}
// ];

// const notas = [
//     {"id":1,"nota":6},
//     {"id":2,"nota":5},
//     {"id":3,"nota":8}
// ];


// const alunoComNotas = alunos.map((aluno)=>{
//     const nota = notas.find((nota)=> nota.id === aluno.id);
//      return {...aluno, nota:nota ? nota.nota : null};
//     //return {"id":aluno.id,"nome":aluno.nome, nota:nota ? nota.nota : null};
// });

// console.log(alunoComNotas);

// let nr1 = 10;
// let nr2 = 5;
// let resultado;

// resultado = nr1 > nr2 ? "É MAIOR": "É MENOR";
// console.log(resultado);
