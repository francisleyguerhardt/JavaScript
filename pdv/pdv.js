/**
 * PDV - Exercício referente a cálculo de porcentagem
 * @author Francisley Guerhardt 
 */

// esta variável está presente nas 2 funções, portando precisa ser glogal
 let totalDesconto

function calcularDesconto(){
    let total, desconto, valorDesconto
    //Entrada
    total = Number(frmPdv.txtTotal.value.replace(",","."))
    desconto = Number(frmPdv.txtPorcentagem.value.replace(",","."))
    //processamento
    valorDesconto = (total * desconto)/100
    totalDesconto = total - (total * desconto)/100
    //saida
    frmPdv.txtDesconto.value = 'R$ ' + valorDesconto.toFixed(2)
    frmPdv.txtTotalDesconto.value = 'R$ ' + totalDesconto.toFixed(2)
}
function calcularTroco(){
    let valorPago, troco
    valorPago = Number(frmPdv.txtValorPago.value.replace(",","."))
    troco = valorPago - totalDesconto
    frmPdv.txtTroco.value = 'R$ ' + troco.toFixed(2)

    
}