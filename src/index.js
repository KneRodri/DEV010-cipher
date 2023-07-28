import cipher from './cipher.js';

//Para obtener elementos del DOM
const inputElement = document.getElementById('input');
const btnInsertar = document.getElementById('btnInsertar');
const textAreaElement = document.getElementById('texto');
const btnEncode = document.getElementById('btnEncode');
const btnDecode = document.getElementById('btnDecode');

function capturaIngreso() {
  const offset = parseInt(inputElement.value);  
  if (!isNaN(offset)) { //Revisa si el valor es un número válido NaN: not a number
    cipher.offset = offset;//indica el desplazamiento
  }
}

//Función para cifrar el texto del textarea
function encodeText() {
//Toma un valor numérico del input, lo convierte en entero con parse y lo almacena en la variable
  const offset = parseInt(inputElement.value);
  const text = textAreaElement.value;//Para obtener el contenido a manipular
  const encryptedText = cipher.encode(offset, text);//trae desde cipher
  textAreaElement.value = encryptedText;
}

function decodeText() {
  const offset = parseInt(inputElement.value);
  const text = textAreaElement.value;
  const decryptedText = cipher.decode(offset, text);
  textAreaElement.value = decryptedText;
}


btnInsertar.addEventListener('click', capturaIngreso);
btnEncode.addEventListener('click', encodeText);
btnDecode.addEventListener('click', decodeText);
