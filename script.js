function verificaIdade(){
    let idade = document.getElementById("idade").value;
    let resposta = document.getElementById("resposta");

    if(idade == "" || "0"){
        resposta.innerHTML = 'Por favor, informe a sua idade';
    document.getElementById("idade").focus();
    } else if (idade < 18){
        resposta.innerHTML ="Você é menor de idade" ;
    } else {
        resposta.innerHTML ="Você é maior de idade" ;
    }
}
