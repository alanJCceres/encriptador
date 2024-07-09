const vocales = ['a','e','i','o','u'];
const valores = ["ai","enter","imes","ober","ufat"];
let contador2=0;
let bandera=false;

function desencriptar(){
    let texto = document.getElementById("texto_encriptar").value;
    let letra="";
    let desencriptado="";
    let indice;
    let saltos;
    if(texto !=""){
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
        if(contador2!=0){
            limpiar();
        }
        agregarElementos();
        contador2++;
        document.getElementById("texto_encriptado").value = desencriptado;
    }
    

}
function tieneMayusculas(texto){
    let letra="";
    let res=false;
      for(let i=0;i<texto.length;i++){
         letra=texto[i];
         if(letra == letra.toUpperCase() && letra!=" " && letra != "  "&& letra!="," && letra!="." && letra!="/" && letra!="?"){
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
            agregarElementos();
            document.getElementById("id_error").innerHTML='';
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
    if(bandera == false){
        document.getElementById("mensaj_inicial").remove();
        document.getElementById("contenedor2").innerHTML += `
        <textarea class="texto_area2"  id="texto_encriptado"></textarea>
        <button class="boton_terciario" onclick="copiarTexto();">copiar</button>
        `;
        bandera=true;
    }
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
