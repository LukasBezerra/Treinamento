/* let x = "";

console.log(x); 
x= "oi";

console.log(x);
//1) define a função
function imprime(babu){
    console.log (babu)
}
//2) chama a função / executa

imprime ('olá');

function soma(a,b){
    const resultado = a+b;
    return resultado;
}

console.log (soma(3,20)); 

function multiplica (num1 =1, num2 = 1){ //= define o DEFAULT
                                        // Escrever a função dessa forma, faz com que a função seja listada antes de executar outros blocos de código
    return num1 * num2;
}

console.log(multiplica(3,2))
console.log(Math.random());
 */
//const soma = function (num1, num2) {return num1 + num2} // dessa forma, eu preciso declarar a função soma antes de chamar
 
//ARROW function

const apresentarArrow = nome => `meu nome é ${nome}`; //não confunfir com a função maior ou igual que >=
                                                    // Lembrar que ao declarar Strings com variáveis dentro, usar Crase

const soma_numeros_pequenos = (num1, num2) => {
    if (num1 || num2 > 10) {                    // || significa OU
        return "somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}

console.log (soma_numeros_pequenos(3 , 4));

function soma (num1 = 0 , num2 = 0){
    if (num1 || num2 > 10) {                    // || significa OU
        return "somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}
console.log(soma(0 ,3))