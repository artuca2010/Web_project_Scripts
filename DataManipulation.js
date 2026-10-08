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
// 5 --------------------------------------