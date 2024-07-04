const vocales = ['a','e','i','o','u'];
const valores = ["ai","enter","imes","ober","ufat"];

function desencriptar(){
    let texto = document.getElementById("texto_encriptar").value;
    let letra="";
    let desencriptado="";
    let indice;
    let saltos;
    for(let i=0;i<texto.length;i++){
        letra=texto[i];
        if(existeEnVocales(letra)){
            indice = buscarIndice(letra);
            saltos = valores[indice].length-1;
            i += saltos;
            desencriptado += letra;
        }else{
            desencriptado += letra;
        }
    }
    limpiar();
    document.getElementById("texto_encriptado").value = desencriptado;
}

function encriptar(){
    let texto = document.getElementById("texto_encriptar").value;
    let letra="";
    let encriptado="";
    let indice;
    for(let i=0;i<texto.length;i++){
        letra = texto[i];
        if(existeEnVocales(letra)){
            indice = buscarIndice(letra);
            encriptado += valores[indice];
        }else{
            encriptado += letra;
        }
    }
    limpiar();
    document.getElementById("texto_encriptado").value = encriptado;
}
function existeEnVocales(letra){
    let res=false;
    for(let i=0;i<vocales.length;i++){
        if(letra == vocales[i]){
            res = true;
            break;
        }
    }
    return res;
}
function buscarIndice(letra){
    let res=0;
    for(let i=0;i<vocales.length;i++){
        if(letra == vocales[i]){
            res = i;
            break;
        }
    }
    return res;
}

function limpiar(){
    document.getElementById("texto_encriptado").value = "";
}

function copiarTexto(){
    let texto = document.getElementById("texto_encriptado").value;
    navigator.clipboard.writeText(texto);
}
