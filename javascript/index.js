// console.log('hi');

// //#region map

// var numbers = [1, 4, 9];
// var doubles = numbers.map(function(num){
//     return num * 2;
// });

// var loja = ['camisa', 'roupa de baixo', 1];

// // for (let index = 0; index < loja.length; index++){
// //     const element = loja[index];
// //     console.log(element);
// // }
// //loja.map(m => console.log(m));

// var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
// var maxCallback2 = (max, cur) => Math.max(max, cur);
 
// const reduceF1 = [{ x: 22 }, { x: 42 }].reduce(maxCallback); // 42
// const reduceF2 = [{ x: 22 }].reduce(maxCallback); // { x: 22 }
// //const reduceF3 = [].reduce(maxCallback); // TypeError
 
// console.log('reduce que encontra a resposta para todos os problemas e que é: ', reduceF1);
// console.log('reduce que encontra a resposta para todos os problemas e que é: ', reduceF2, 'em objeto');

// var arr = [
//     { id: 1 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12 },
//     {},
//     { id: null },
//     { id: NaN },
//     { id: 'undefined' }
// ];

// var invalidEntries = 0;

// function filterByID(obj) {
//     if ('id' in obj && typeof (obj.id) === 'number' && !isNaN(obj.id)) {
//         return true;
//     } else {
//         invalidEntries++;
//         return false;
//     }
// }

// var arrByID = arr.filter(filterByID);

// console.log('Array filtrado: ', arrByID);
// console.log('entradas invalidas no array filtrado: ', invalidEntries);

//#region FIND
// const posts = [
//     { id: 1, title: 'Star Wars' },
//     { id: 2, title: 'Star Trek' }
// ];
 
// const title = posts.find(p => p.id === 1);
// console.log('O melhor filme é: ', title);
//#endregion

// //#region CLOSURE
// function init() {
//     var name = "Farlley";
 
//     const teste = ()=> {
//         console.log('teste 1');
//     };
 
//     function displayName() {
//         console.log('Aqui temos uma closure que retorna um nome: ', name);
//     };
 
//     teste();
//     displayName();
// }
 
// const classe = (outro_nome) => {
//     const metodo = {};
 
//     metodo.um = () => console.log(`teste ${outro_nome}`);
 
//     return metodo;
// }
 
// let teste = classe('saulo');
 
// teste.um();
 
// //#endregion