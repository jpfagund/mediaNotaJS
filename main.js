let resultado = document.getElementById("resultado");

function calcular(){
    let notaUm = Number(document.getElementById("notaUm").value)
    let notaDois = Number(document.getElementById("notaDois").value)
    let notaTres = Number(document.getElementById("notaTres").value)
    let notaQuatro= Number(document.getElementById("notaQuatro").value)
    let mediaNota = (notaUm + notaDois + notaTres + notaQuatro) / 4
    let situacao;
    if (mediaNota >= 7){
        situacao = "Aprovado"
    }else{
        situacao = "Reprovado"
    }
    console.log(mediaNota)
    resultado.innerHTML = "Média: " + mediaNota.toFixed(2) + "; O aluno está " + situacao
}
