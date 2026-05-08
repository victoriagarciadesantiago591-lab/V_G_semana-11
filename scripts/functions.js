



// declaro una funcion de nombre sumar sin parametros
function sumar(){
    //vinculador let
    //num1 es el nombre de la variable
    //parseFloat vamos a convertir a numero decimal
    // del id num1 nos traemos el valor 
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;
    document.getElementById("resul").textContent = "El resultado es:" + result;
};
    