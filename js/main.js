

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";

   // console.log(document.getElementById(agradecimento));
    //alert("Obrigado por clicar")
}
function redirecionar(){
    window.open("https://www.silverline.com.br");
    //window.location.href = "https://www.silverline.com.br";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar de texto")
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load()
{
    alert("Pagina carregada")
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
///unction soma(n1, n2){
//    return n1 + n2;
//}
/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade));*/
//function setReplace(frase, nome, novo_nome){
 //   return frase.replace(nome, novo_nome)
//}
//alert(soma(5,10));
//alert(setReplace("Vai Japão","Japão", "Brasil"));


/*var d = new Date();
alert(d.getMonth() +1);
*/
/*var count;
for (count =0; count <= 5; count ++){
    alert(count);
};*/

/*var count = 0;
while (count < 5){
    console.log (count);
    count = count + 1;
};*/
/*var idade = prompt("Qual a sua idade");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};-/

//var frutas =[{nome:"maça", cor:"vermelha"}, {nome:"laranja", cor:"orange"}]
//console.log(frutas);
//alert(frutas[1].nome);

//var fruta = {nome:"maça", cor: "vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);
//var lista = ["maça","perâ", "laranja"];
//lista.push("uva");
//console.log(lista);
//console.log(lista.join());
//console.log(lista.toString());
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
/*
var nome = "Leila Martins";
var idade = 42;
var idade2 = 13;
var frase = "Japão é o melhor time do mundo"
alert(nome  +  " tem "  + idade + " anos");
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
*/