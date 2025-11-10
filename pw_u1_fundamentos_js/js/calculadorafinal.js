//variables globales
//let num1=0;
//let num2=0;
let operacion = "";
function mostrarDisplay(valor){
    let elemento = document.getElementById("display");
    elemento.innerText= elemento.innerText + valor;
    operacion = operacion+valor;
}
function eliminarElemento(){
    let elemento=document.getElementById("display");
    elemento.innerText="";
    operacion="";
    
    
}
function removerUltimo(){
    let elemento = document.getElementById("display");
    elemento.innerText = elemento.innerText.slice(0,-1);
    operacion = operacion.slice(0, -1);
}
// Evaluar la operación cuando se presiona "="
function calcularResultado() {
    try {
        // Evaluar la operación (segura para uso básico)
        let resultado = eval(operacion);
        document.getElementById("display").innerText = resultado;
        operacion = resultado.toString(); // permite seguir operando con el resultado
    } catch (error) {
        document.getElementById("display").innerText = "Error";
        operacion = "";
    }
}