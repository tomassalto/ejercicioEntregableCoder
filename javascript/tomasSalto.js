let cantSueldo = parseInt(prompt("Ingrese la cantidad de sueldos: "));

sumaSueldo = 0;
promedio = 0;

for (i = 1; i <= cantSueldo; i++){

   let sueldo = parseInt(prompt("Ingrese el sueldo: "));
   sumaSueldo = sumaSueldo + sueldo; 
   
}

promedio = sumaSueldo / cantSueldo;

console.log(promedio);