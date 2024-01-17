var age=23;
if (age>=65){
    console.log("Obtiene sus ingresos de su pensión")
}else if(age<65 && age>=18){
    console.log("Cada mes recibe un salario")
}else if(age<18){
    console.log( "Recibes un subsidio")
}else{
    console.log("El valor de la variable edad no es numérico")
}
