let cantSueldo = parseInt(prompt("Ingrese la cantidad de sueldos: "));


if(cantSueldo >= 0){

   sumaSueldo = 0;
   promedio = 0;

   for (i = 1; i <= cantSueldo; i++){
 
      let sueldo = parseInt(prompt("Ingrese el sueldo "+i+": "));
      sumaSueldo = sumaSueldo + sueldo; 
             
   }
   
   promedio = sumaSueldo / cantSueldo;
   
   console.log(promedio);

}else{

   respuesta = "Error! Ingrese un numero mayor a 0";
   console.log(respuesta);
}

