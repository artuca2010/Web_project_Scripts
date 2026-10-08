// Flux Control Structures --//---

// 1 ------------------------
let idade = 13

if (idade <= 16){
    console.log("Não");
}

// 2 -------------------------
let mensagem

if (idade => 18){
    mensagem = idade
    console.log("Data Loaded!")
}
// 3 -------------------------
// Criando a variável color com o valor 'vermelho'
let color = 'vermelho';

switch (color) {
    case 'vermelho':
        console.log('Pare');
        break;
        
    case 'amarelo':
        console.log('Atenção');
        break;
        
    case 'verde':
        console.log('Siga');
        break;
        
    default:
        console.log('Cor inválida');
}
// 4 ------------------------------------
let RandomNumber = 55

if (RandomNumber % 2 == 0){
    console.log("O número é par")
}
// 5 -----------------------------------
let NotadoJorjinho = 8;

if (NotadoJorjinho <= 5) {
    console.log("REPROVADO! >:");
} else if (NotadoJorjinho >= 6) {
    console.log("APROVADO!! :D");
}

//2 LAÇOS DE REPETIÇÃO ---///------
//6 -----------------------------------
let Required_Number = 4;

for (let i = 0; i < Required_Number; i++) { 
    console.log(i); 
}
//7 ------------------------------------
const Frutas = ["uva", "pera", "maçã"]  

for (let fruta of Frutas){
    console.log(fruta)
}
// 8 ------------------------------------

let j = 0

while (j < 3){
    console.log(j)
    j ++
}
// 9 -------------------------------------------
for (let numero = 0; numero <= 20; numero++) {
    if (numero % 3 === 0) {
        console.log(numero);
    }
}
// 10 ---------------------------------------------
let contador = 10;

while (contador >= 0) {
    console.log(contador);
    contador--;
}
// 3 MÉTODOS FUNDAMENTAIS DE ARRAY (ITERAÇÃO) -------
// 11 -----------------------------------------------
let numberArray1 = [1, 2, 3, 4];

let novoArray = numberArray1.map(numero => numero + 1);

console.log(novoArray);
// 12 -----------------------------------------------
let numberArray = [1, 2, 3, 4];

let elemento = numberArray[1];

console.log(elemento);
// 13 -------------------------------------------------
