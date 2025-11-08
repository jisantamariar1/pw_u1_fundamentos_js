//variables globales
let num1=0;
let num2=0;
function mostrarDisplay(valor){
    let elemento = document.getElementById("display");
    elemento.innerText= elemento.innerText + valor;
}
function eliminarElemento(){
    let elemento=document.getElementById("display");
    elemento.innerText="";
    
}
function removerUltimo(){
    let elemento = document.getElementById("display");
    elemento.innerText = elemento.innerText.slice(0,-1);
}
function sumar(num1, num2){
   let resultado = num1 + num2;
   return resultado;
}
function restar(){

}
function multiplicar(){

}
function dividir(){

}
function porcentaje(){

}