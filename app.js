const process = require("process");
const calculadora = require("./calculadora");
const { isNumberObject } = require("util/types");

const operaciones =["sumar", "restar", ",multiplicar", "dividir"];
const operacion = process.argv[2];
const numA = +process.argv[3];
const numB = +process.argv[4];
let resultado = 0;

if(operaciones.includes(operacion)){
   if(operacion === "sumar"){
       resultado = calculadora.sumar(numA,numB)
   } else if(operacion === "restar"){
       resultado = calculadora.restar(numA,numB)
   } else if(operacion === "multiplicar"){
       resultado = calculadora.multiplicar(numA,numB)
   } else if(operacion === "dividir"){
       resultado = calculadora.dividir(numA,numB)
       if(numB === 0){
        return console.log("nose puede dividir por 0");
      }
   }
   console.log(resultado);

} else {
    console.log("La operación no es válida");
}

