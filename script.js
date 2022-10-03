const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".menaje");

function encriptar(stringEncriptado) {
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for(let i = 0; i < matrizCodigo.length;i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        } 
     
    }   
    return stringEncriptado;
}

function btnDesenciptar(){
    const textoEncriptado = desencriptar (inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value
}



function desencriptar(stringDesencriptado) {
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = tringDesencriptado.toLowerCase();
    for(let i = 0; i < matrizCodigo.length;i++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = tringDesencriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        } 
     
    }   
    return stringDesencriptado;
}
