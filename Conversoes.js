//tipo de dados 
//Booleanos

//Conversão implícita

const numero = 456;
const numero_string = "456";

console.log(numero === numero_string); //Compara o Valor e o tipo
console.log(numero == numero_string); //Compara o Valor (transforma os dois para string)

console.log(numero + numero_string); //Concatenou os dois valores como string

//Conversão explícita

//Number() função transforma a string em número
//String() função transforma o número em string

console.log(Number(numero_string)); //Devemos garantir que na string não tenha número ou teremos NaN