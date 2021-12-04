var mensagemText = document.querySelector("#mensagem");

var seletor = document.querySelector("#select");

var labelIncrementoCifra = document.querySelector(".incremento");
var inputIncrementoCifra = document.querySelector("#numeroCesar");

var radioCodificar = document.querySelector("#codificar");
var radioDecodificar = document.querySelector("#decodificar")

var submitButton = document.querySelector("#submit");

var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

var hImprimeMsg = document.querySelector(".hMensagem");
var pImprimeMsg = document.querySelector(".pMensagem");

seletor.addEventListener('change', function(){
    
    if(seletor.value == 'cifraCesar'){
        labelIncrementoCifra.style.display = "block";
        inputIncrementoCifra.style.display = "block";
    }else {
        labelIncrementoCifra.style.display = "none";
        inputIncrementoCifra.style.display = "none";
    }
});

radioCodificar.addEventListener("change", function(){
    submitButton.value = "Codificar Mensagem!"
});

radioDecodificar.addEventListener("change", function(){
    submitButton.value = "Decodificar Mensagem!"
});

function codificarCezar(){
    var conteudoMsg = mensagemText.value;
    var msgMinuscula = conteudoMsg.toLowerCase();
    var n = Number(inputIncrementoCifra.value % 26);
    var textoCodificadoCezar = '';

    for(var i = 0; i < msgMinuscula.length; i++){
        for(var j = 0; j < alfabeto.length; j++){
            if(msgMinuscula[i] == alfabeto[j]){
                textoCodificadoCezar += alfabeto[j + n];
                break;
            } else if (msgMinuscula[i] == ' '){
                textoCodificadoCezar += " ";
                break;
            }
        }
    }
  
    return textoCodificadoCezar;
}

function decodificarCezar(){
    var conteudoMsg = mensagemText.value;
    var msgMinuscula = conteudoMsg.toLowerCase();
    var n = Number(inputIncrementoCifra.value % 26);
    var textoCodificadoCezar = '';

    for(var i = 0; i < msgMinuscula.length; i++){
        for(var j = 0; j < alfabeto.length; j++){
            if(msgMinuscula[i] == alfabeto[j]){
                textoCodificadoCezar += alfabeto[j - n];
                break;
            } else if (msgMinuscula[i] == ' '){
                textoCodificadoCezar += " ";
                break;
            }
        }
    }
    return textoCodificadoCezar;
}

function codificarBase(){
    // encontrei nesse video (https://www.youtube.com/watch?v=JFXrBkdCAeQ) a funçao btoa que converte string em base64 e por isso a utilizei 
    //  "The btoa() method creates a Base64-encoded ASCII string from a binary string 
    //  (i.e., a String object in which each character in the string is treated as a byte of binary data)." - (MDN)
    // btoa => binary to ascii
    var conteudoMsg = mensagemText.value;
    return btoa(conteudoMsg);
}

function decodificarBase(){
    // a função atob faz o contrario
    // atob => ascii to binary
    var conteudoMsg = mensagemText.value;
    return atob(conteudoMsg);
}



submitButton.addEventListener('click', function(e){
    e.preventDefault();
    
    if(seletor.value === "Base64"){
        if(submitButton.value === "Codificar Mensagem!"){
            hImprimeMsg.innerText = "Sua mensagem codificada:"
            pImprimeMsg.innerText = codificarBase();
            
        }else{
            hImprimeMsg.innerText = "Sua mensagem decodificada:"
            pImprimeMsg.innerText = decodificarBase();
        }
    }else if(seletor.value === "cifraCesar"){
        if(submitButton.value === "Codificar Mensagem!"){
            hImprimeMsg.innerText = "Sua mensagem codificada:"
            pImprimeMsg.innerText = codificarCezar();
            
        }else{
            hImprimeMsg.innerText = "Sua mensagem decodificada:"
            pImprimeMsg.innerText = decodificarCezar();
        }
    }
});