// tipo Number

const meuNumero = 3; //defino uma vaariável e atribuo um valor a ela 

const primeiroNumero = 5;
const segundoNumero = 10;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica)

//Ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperação = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperação);

//NAN -> Not A Number (não é um número)

const alura = "Alura"

console.log (alura * primeiroNumero);

const idade = 28;
const pi = 3.14;

console.log (idade*pi);

var a = 10;
var b = 0;
console.log(a/b); // Infinity

var a = 0;
var b = 0;
console.log(a/b); // NaN

//STRING

const texto1 = 'o texto 1 está com aspas simples';
const texto2 = " e O texto 2 está com aspas duplas!";

const citacao = 'aí ele disse "ai eu disse"';

console.log(citacao);

// Concatenação -> eu uso o operador '+'

console.log (texto1 + texto2);

//Booleanos



console.log(primeiroNumero < segundoNumero); // ===  e == indica comparação no JavaScript, 
                                            // === NULL e UNDEFINED são diferentes
                                            // == NULL é igual a UNDEFINED

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

const senha = "minhaSenhaaaa123";
console.log(senha.length); // 13 caracteres