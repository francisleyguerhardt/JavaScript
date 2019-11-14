/**
 * Eleitor
 * @author Francisley Guerhardt
 */
let idade


function verificar(){
    idade = Number(frmEleitor.txtIdade.value)
    
    if (idade < 16){
    alert('Proibido Votar')
    }else if (idade >= 18 && idade < 70){
    alert('Voto Obrigratório')
    }else {
    alert('Voto Facultativo')
}
}   