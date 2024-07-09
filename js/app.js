const vocales = ['a','e','i','o','u'];
const valores = ["ai","enter","imes","ober","ufat"];
let contador=0;

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
function tieneMayusculas(texto){
    let letra="";
    let res=false;
      for(let i=0;i<texto.length;i++){
         letra=texto[i];
         if(letra == letra.toUpperCase() && letra!=" " && letra!=","){
            res = true;
            break;
         }
      }
      return res;
}
function tieneAcentos(texto){
    let regex = /[áéíóúÁÉÍÓÚ]/;
    let letra="";
    let res=false;
      for(let i=0;i<texto.length;i++){
         letra=texto[i];
         if(regex.test(letra)){
            res=true;
         }
      }
    return res;
}
function mostrarMensajeError(){
    let elemento = document.getElementById("id_error");
    elemento.innerHTML = ` Solo letras minusculas y sin acentos`;
}

function encriptar(){
    let texto = document.getElementById("texto_encriptar").value;
    let letra="";
    let encriptado="";
    let indice;
    /* console.log(tieneMayusculas(texto));
    console.log(tieneAcentos(texto)); */
    if(texto != ""){
        if(!tieneMayusculas(texto) && !tieneAcentos(texto)){
            for(let i=0;i<texto.length;i++){
                letra = texto[i];
                if(existeEnVocales(letra)){
                    indice = buscarIndice(letra);
                    encriptado += valores[indice];
                }else{
                    encriptado += letra;
                }
            }
            if(contador==0){
                agregarElementos();
                contador++;
            }
            document.getElementById("id_error").innerHTML='';
            document.getElementById('boton_desencriptar').removeAttribute('disabled');
            limpiar();
            document.getElementById("texto_encriptado").value = encriptado;
        }else{
            mostrarMensajeError();
        }
    }else{
        mostrarMensajeError();
    }
    
}
function agregarElementos(){
    document.getElementById("mensaj_inicial").remove();
    document.getElementById("contenedor2").innerHTML += `
        <textarea class="texto_area2"  id="texto_encriptado"></textarea>
        <button class="boton_terciario" onclick="copiarTexto();">copiar</button>
    `;
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
